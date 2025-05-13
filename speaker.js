let utterThis=null;
let utterances = [];

const synth = window.speechSynthesis;
synth.cancel();
let voices = [];
//let voice;

function populateVoiceList() {
  voices = synth.getVoices();
  voices = voices.filter(a => a.lang.includes("en") && a.lang.includes("GB") && a.name.includes("Google"));
  //if not exists Google voices
  if (voices.length == 0) {
    voices = voices.filter(a => a.lang.includes("en") && a.lang.includes("GB"));
  }
  console.log(voices);
}

//voices=synth.getVoices();



setTimeout(() => {

  //populateVoiceList();
  initUtterance();
}, 1000);

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}

function log() {
  console.log("SpeechSynthesisUtterance.onend");
}


function speakWithDelay(text, delay = 250, callback = log) {
  console.log("speakWithDelay");
  if (text == "" || text == null || text == undefined) {
    console.log("empty text");
    return;
  }

  if (synth.speaking) {
    synth.cancel();
    console.log("speechSynthesis.cancelspeaking");
    //return;
  }
  utterThis.onend = function (event) {
    console.log('speak end');
    callback();
  };
 // setTimeout(() => {

    //setTimeout(() => {
      utterThis.text=text;
      console.log("speakWithDelay say:" + utterThis.text);
      //alert(voices)

      //synth.cancel();
      //console.log("speakWithDelay:" + utterThis)
      synth.speak(utterThis);
      //setTimeout(callback ,delay);
    //}, 500);
  //}, delay);

}

function initUtterance()
{
   utterThis = new SpeechSynthesisUtterance();
   utterThis.voice = voices[0];
   utterThis.pitch = 1;
   utterThis.rate = 1;
   utterThis.lang = "en-GB";
   
   utterances.push(utterThis);//чтобы не удалил GarbageCollector

  utterThis.onstart = function (event) {
    console.log("speak start");
  }

  utterThis.onerror = function (event) {
    console.error("SpeechSynthesisUtterance.onerror:" + event.error);
    initUtterance();
    //utterThis=new SpeechSynthesisUtterance();
  };

}

function speakAllWithDelay(texts, delay = 250, callback = log) {
  console.log('speakAllWithDelay');
  if (synth.speaking) {
    //synth.cancel();
    //console.error("speechSynthesis.speaking");
    //return;
  }
  if (texts && texts.length > 0) {
    setTimeout(() => {
      i = 0;
      //utterThis = new SpeechSynthesisUtterance(texts[i]);
      utterThis.text=texts[i];
      //utterThis.voice = voices[0]
      utterThis.onend = function (event) {
        console.log('speak end');
        i++;
        if (i < texts.length) {
          utterThis.text = texts[i];
          synth.cancel();
          setTimeout(synth.speak(utterThis), 200);
          //synth.speak(utterThis);
          //alert(voices)

        }
        else
          callback();
      };

      // utterThis.onerror = function (event) {
      //   console.error("SpeechSynthesisUtterance.onerror:" + event.error);
      //   return;
      // };
      //speakOverUtterance(utterThis);
      // utterThis.pitch = 1;
      // utterThis.rate = 1.02;
      // utterThis.lang = "en-GB";
      synth.speak(utterThis);
    }, delay);


  }
}

function speakOverUtterance(utterSynth) {
  //if (utterSynth==null) return;
  utterSynth.pitch = 1;
  utterSynth.rate = 1.02;
  utterSynth.lang = "en-GB";
  synth.speak(utterThis);
}

function promiseSpeak(text, delay = 250, callback = log) {
  return new Promise(resolve => {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    setTimeout(() => {
      const utterThis = new SpeechSynthesisUtterance(text);

      utterThis.onend = function (event) {
        console.log('speak end');
        callback();
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror:" + event.error);
      };
      utterThis.voice = voices[0]
      //alert(voices)
      utterThis.pitch = 1;
      utterThis.rate = 1.02;
      utterThis.lang = "en-GB";
      synth.speak(utterThis);
    }, delay);
  })

}



function playSoundAndCallFunction(soundFile, callback, delay = 250) {
  synth.cancel();
  setTimeout(() => {
    const audio = new Audio(soundFile);

    audio.onended = function () { callback(); };

    audio.play();
  }, delay);
}

function playSoundSayTextAndPlaySoundAgain(soundFile, text, callback1) {
  const audio = new Audio(soundFile);

  audio.onended = function () {
    speakWithDelay(text, 0, function () {
      const audioAgain = new Audio(soundFile);

      audioAgain.onended = function () {
        callback1();
      };

      audioAgain.play();
    });
  };

  audio.play();
}


console.log("speaker loaded");

//speak('speaker loaded');

///////////////////////////////////////////////////////////////////
/*
function populateVoiceList() {
  if (typeof synth === "undefined") {
    return;
  }

  const voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    
    document.getElementById("voiceSelect").appendChild(option);
    document.getElementById("voiceSelect").onchange=(e)=>{alert(e);}
  }
}

populateVoiceList();
if (
  typeof synth !== "undefined" &&
  synth.onvoiceschanged !== undefined
) 
{
  synth.onvoiceschanged = populateVoiceList;
}*/