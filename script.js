'use strict'

const steps = [
    'start', 'mic-test',
    'count-down1', 'prepair1',
    'count-down2', 'task1',
    'count-down1', 'prepair2', 'task2',
    'count-down2', 'task21', 'task22', 'task23', 'task24', 'task25', 'task26', 'task2end',
    'count-down1', 'prepair3',
    'count-down2', 'task3',
    'download'];
let Sounds = {
    sound1: 'sounds/sound01.mp3',
}

let app = new Vue({
    el: '#app',
    data: {
        step: 0,
        content: {
            head1: "Внимание",
            mainText: `На следующем этапе тренажёр попытается получить доступ к микрофону.<br>Если вы планируете использовать функцию записи, то разрешите сайту использовать микрофон.`,
            head2: '',
            head3: '',
            image1: '1px.png',
            image2: '1px.png',
            text2: '',
            levelTxt: '',
            preparationTimeText: 'Preparation 01:30',
            answerTimeText: 'Answer 01:30',
            taskFilename: ''
        },
        shows: {
            isShowRecorder: false,
            isShowMain: false,
            //isShowMain2: false,
            isShowCountdown: false,
            isStartCountdown: false,
            isShowHeader1: true,
            isShowHeader2: false,
            isShowHeader3: false,
            isShowPrepare: false,
            isShowImage1: false,
            isShowImage2: false,
            isShowResult: false,
            isShowCaption: false,
            isShowAudioContainer: false,
            isShowSelect: true
        },
        countDown: {
            text: 'Be ready for the test',
            count: 10
        }
    },
    computed:
    {
        countDownContent() {
            return '0' + this.countDown.count;
        }

    },
    methods: {
        init() {
            console.log('init js')
            //recorder.action=this.nextStep()
        },
        startCountDown(textToSpeak = '', countDownText = '', countDown = 10) {
            console.log('startCountDown');
            recorder.timerStop();


            this.countDown.text = countDownText;
            this.countDown.count = countDown;
            //this.shows.isShowNav01 = false;
            recorder.isShowRecorder = false;
            this.shows.isShowMain = false;
            //this.shows.isShowMain2 = false;
            this.shows.isShowCountdown = true;
            this.shows.isShowPrepare = false;
            //this.shows.isStartCountdown = true;
            // this.startCountdown();
            //if (this.shows.isStartCountdown) 
            let si = setInterval(() => {
                if (this.countDown.count > 1) {
                    this.countDown.count--;
                } else {
                    clearInterval(si)
                    this.countDown.count = 0;
                    this.nextStep(true);
                }
            }, 1000);
            //speakWithDelay(textToSpeak, countDown * 1000+100)
        },//startCountDown
        nextStep(value) {

            recorder.stopRecording();
            recorder.stopPlayLastRecord();

            //synth.cancel();
            //alert(typeof value);
            if (typeof value === 'number') this.step = value;
            else this.step++;
            //alert(this.step);

            switch (steps[this.step]) {
                case 'start':
                    recorder.isShowRecorder = false;
                    this.shows.isShowSelect = false;
                    this.shows.isShowMain = true;
                    document.getElementById('bottomDiv').style.display = 'block';
                    break;
                case 'mic-test'://Mic test
                    //app.micStatus = MicStatus.READYTORECORD;                    

                    recorder.getMic();
                    recorder.isShowRecorder = true;
                    this.content.mainText = `Нажмите кнопку записи <span class="fa-solid fa-record-vinyl icon-size red"></span> внизу, произнесите несколько слов, остановите запись, затем попробуйте воспроизвести.<br> Если вы уже делали это, можете сразу перейти к выполнению задания.`;
                    this.shows.isShowMain = true;
                    this.shows.isShowHeader1 = true;
                    this.shows.isShowAudioContainer = false;
                    this.content.head1 = 'Внимание';
                    app.content.text2 = '';
                    recorder.chunks = [];
                    recorder.param = {
                        'record': true,
                        'directTimer': true,
                        'directProgress': true,
                        'maxRecTime': 10,
                        'next': false,
                        'needTimerStop': true,
                        'nextStepText': 'К заданию',
                        timer: null
                    }
                    recorder.isShowTime = true;
                    //recorder.micStatus = MicStatus.READYTORECORD;
                    //mic_test('Внимание', 'Нажмите кнопку записи внизу, произнесите несколько слов, остановите запись, затем попробуйте воспроизвести.<br> Если вы уже делали это, можете сразу перейти к выполнению задания.')
                    break;

                case 'count-down1'://Countdown
                    //this.startCountDown('', '', 'Be ready for the test', 5)
                    this.startCountDown('', 'Be ready for the test', 5);
                    break;
                case 'count-down2'://Countdown
                    //this.startCountDown('', '', 'Be ready for the test', 5)
                    this.startCountDown('', 'Be ready for the answer', 5);
                    break;
                case 'prepair1'://Prepair   
                    //Выталкиваем запись проверки звука
                    if (recorder.chunks.length > 0) recorder.chunks.pop();

                    speakWithDelay('Now we are ready to start. Task 1.', 3000, () => {
                        app.content.head1 = currentTask.task1.header;
                        app.shows.isShowCountdown = false;
                        app.content.mainText = currentTask.task1.text;
                        app.shows.isShowMain = true;
                        recorder.isShowRecorder = true;
                        recorder.micStatus = MicStatus.PREPARE;
                        //recorder.param.progressValue = 0;
                        recorder.param.directProgress = true;
                        recorder.param.recTime = 0;
                        recorder.param.maxRecTime = 90;
                        recorder.param.directTimer = false;
                        recorder.param.nextStepText = 'Готов';
                        recorder.timerStart();
                    });
                    break;
                case 'task1':
                    speakWithDelay('Start speaking please', 3000, () => {
                        app.content.head1 = currentTask.task1.header;
                        app.shows.isShowCountdown = false;
                        app.content.mainText = currentTask.task1.text;
                        app.shows.isShowMain = true;
                        recorder.isShowRecorder = true;
                        recorder.micStatus = MicStatus.AUTORECORDING;
                        recorder.param.progressValue = 0;
                        recorder.param.recTime = 0;
                        recorder.param.maxRecTime = 90;
                        recorder.param.directTimer = false;
                        recorder.param.nextStepText = 'Завершить';

                        recorder.startRecording();
                    });
                    break;
                case 'prepair2':
                    speakWithDelay('Task 2', 3000, () => {
                        app.shows.isShowCountdown = false;
                        app.content.head1 = currentTask.task2.header;
                        app.content.mainText = currentTask.task2.introduction2;//currentTask.task2.introduction1;
                        app.content.text2 = '';// currentTask.task2.introduction2;
                        app.shows.isShowMain = true;
                        recorder.isShowRecorder = true;
                        recorder.micStatus = MicStatus.PREPARE;
                        recorder.param.progressValue = 0;
                        recorder.param.recTime = 0;
                        recorder.param.directProgress = true;
                        recorder.param.maxRecTime = 20;
                        recorder.param.nextStepText = 'Готов';
                        recorder.timerStart();
                    });
                    break;
                case 'task2'://prepair for ask questions

                    recorder.timerStop();
                    app.shows.isShowHeader1 = true;
                    app.content.head1 = 'Task 2. Electrionic assistant';
                    app.shows.isShowRecorder = false;
                    app.shows.isShowMain = true;
                    app.shows.isShowCountdown = false;
                    //recorder.progressValue = 0;
                    recorder.param.maxRecTime = 40;

                    app.shows.recTime = 0;
                    app.shows.main_text = '';
                    //document.getElementById('recorderButtonNext').disabled = true;
                    //setTimeout(() => document.getElementById('recorderButtonNext').disabled = false, 15000);
                    blockButton('recorderButtonNext', 10)
                    speakAllWithDelay(currentTask.task2.tapescripts, 500, () => {
                        this.nextStep();
                    });

                    break;
                case 'task21':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 1';
                    app.shows.isShowMain = true;
                    app.shows.isShowCountdown = false;
                    recorder.isShowRecorder = true;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    recorder.param.recTime = 0;
                    recorder.param.maxRecTime = 40;
                    recorder.param.directTimer = false;
                    recorder.param.nextStepText = 'Завершить';
                    recorder.recTime = 40;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[0],
                        () => {
                            recorder.startRecording();
                        });
                    ;
                    break;
                case 'task22':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 2';
                    recorder.recTime = 40;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[1],
                        () => {
                            recorder.startRecording();
                        });

                    break;
                case 'task23':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 3';
                    recorder.recTime = 40;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[2],
                        () => {
                            recorder.startRecording();
                        });
                    break;
                case 'task24':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 4';
                    recorder.recTime = 40;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[3],
                        () => {
                            recorder.startRecording();
                        });
                    break;
                case 'task25':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 5';
                    recorder.recTime = 40;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[4],
                        () => {
                            recorder.startRecording();
                        });

                    break;
                case 'task26':
                    app.content.head1 = 'Task 2. Electrionic assistant: question 6';
                    recorder.recTime = 40;
                    recorder.micStatus = MicStatus.AUTORECORDING;
                    blockButton('recorderButtonNext', 10)
                    playSoundSayTextAndPlaySoundAgain(Sounds.sound1, currentTask.task2.interviewer[5],
                        () => {
                            recorder.startRecording();
                        });

                    break;
                case 'task2end':
                    app.content.head1 = 'Task 2. Electrionic assistant';
                    recorder.isShowRecorder = false;
                    speakAllWithDelay(['This is the end of the survey.', 'Thank you very much for your cooperation'], 500, () => {
                        setTimeout(this.nextStep(), 2000);
                    });
                    break;
                case 'prepair3':
                    speakWithDelay('Task 3', 500, () => {
                        app.shows.isShowCountdown = false;
                        app.content.head1 = currentTask.task3.header;
                        app.content.mainText = currentTask.task3.text;
                        app.content.text2 = currentTask.task3.text2;
                        app.shows.isShowMain = true;
                        recorder.isShowRecorder = true;
                        recorder.micStatus = MicStatus.PREPARE;
                        recorder.param.progressValue = 0;
                        recorder.param.recTime = 0;
                        recorder.param.maxRecTime = 90;
                        recorder.param.nextStepText = 'Готов';
                        recorder.timerStart();
                    });

                    break;
                case 'task3':
                    speakWithDelay('Start speaking please', 500, () => {
                        recorder.isShowRecorder = true;
                        app.shows.isShowCountdown = false;
                        app.shows.isShowMain = true;
                        recorder.param.maxRecTime = 120;
                        recorder.param.directProgress = true;
                        recorder.micStatus = MicStatus.AUTORECORDING;
                        recorder.startRecording();
                    });
                    break;
                case 'download':
                    recorder.timerStop(recorder.timer);//???
                    recorder.isShowRecorder = false;
                    app.shows.isShowMain = false;
                    app.shows.isShowHeader1 = false;
                    app.shows.isShowAudioContainer = true;

                    document.getElementById('bottomDiv').style.display = 'block';
                    document.getElementById('bottomButton').innerHTML = 'С начала';
                    document.getElementById('bottomButton').addEventListener('click', () => {
                        window.location.reload();
                    });
                    setTimeout(() => audioContainerSet('audioContainer', recorder.chunks), 1000);

                    break;




            }
        }

    }
});

function start() {
    stopAllAudio();
    document.getElementById('bottomDiv').style.display = 'none';
    app.nextStep(1);
    //speakAllWithDelay(task1.task2.tapescripts,500);
}


function blockButton(id, seconds) {
    document.getElementById(id).disabled = true;
    setTimeout(() => document.getElementById(id).disabled = false, seconds * 1000);
}

function audioContainerSet(audioContainerId, chunks) {
    // Создаем контейнер для аудиоплееров на веб-странице
    const audioContainer = document.getElementById(audioContainerId);
    //document.body.appendChild(audioContainer);
    audioContainer.innerHTML = '';
    // Проходимся по массиву "chunks" и создаем аудиоплееры
    chunks.forEach((chunk, index) => {
        // Создаем элемент аудиоплеера
        if (index == 0) {
            const textElement = document.createElement('h3');
            textElement.style = 'col-4'
            textElement.innerHTML = 'Task 1';
            audioContainer.appendChild(textElement);
        }
        if (index == 1) {
            const textElement = document.createElement('h3');
            textElement.style = 'col-4'
            textElement.innerHTML = 'Task 2';
            audioContainer.appendChild(textElement);
        }
        if (index == 7) {
            const textElement = document.createElement('h3');
            textElement.style = 'col-4'
            textElement.innerHTML = 'Task 3';
            audioContainer.appendChild(textElement);
        }
        const audioElement = document.createElement('audio');
        // Устанавливаем данные звукового файла из массива "chunk"
        const audioBlob = new Blob([chunk]);
        const audioURL = URL.createObjectURL(audioBlob);
        audioElement.src = audioURL;
        const listItem = document.createElement('span');
        listItem.style = 'col-4'
        listItem.appendChild(audioElement)

        // Устанавливаем атрибуты аудиоплеера
        audioElement.controls = true;
        //audioElement.autoplay = true;

        // Помещаем аудиоплеер в контейнер
        audioContainer.appendChild(listItem);
    });

}



function stopAllAudio() {
    // Находим все элементы <audio> на странице
    const audios = document.querySelectorAll('audio');

    // Проходим по всем найденным элементам и выполняем действия
    audios.forEach(audio => {
        audio.pause(); // Останавливаем воспроизведение
        audio.currentTime = 0; // Сбрасываем текущую позицию воспроизведения
    });
}



console.log('script loaded');

let currentTask = null;

function variant(n) {
    currentTask = allTasks[n - 1]
    app.taskFilename = currentTask.materials;
    app.nextStep(0);
}

let lcst = null;
let logoClickCounter=0;
function logoClick() {
    if (logoClickCounter > 4) {
        logoClick = 0;
        clearTimeout(lcst)
        showMaterials();
    }
    logoClickCounter++;
    if (lcst == null)
        lcst = setTimeout(() => {
            logoClickCounter = 0;
            clearTimeout(lcst)
        }, 3000);

}

function showMaterials() {
    window.location.href = 'tasks/ОГЭ Тренажер 12 вариантов.pdf';
}