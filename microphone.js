'use strict'
String.prototype.toMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - minutes * 60;

    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds;
}


const MicStatus = { NOTREADY: 0, READYTORECORD: 1, RECORDING: 2, READYTOPLAY: 3, PLAY: 4, AUTORECORDING: 5, INVISIBLE: 6, PREPARE: 10 }
const MicReadyStatus = { NOTREADY: 0, READY: 1 }



let recorder = new Vue({
    el: '#recorder',
    data: {
        
        progressValue: 0,              
        recorder: {
            recTime: 15,
            micStatus: MicStatus.INVISIBLE,
            micReadyStatus: MicReadyStatus.NOTREADY,
            audio: null,
            chunks: [],
            info: 'Микрофон не готов',//log recorder        
            mediaRecorder: null,
            isShowTime: true,
            timer: null,
            isShowRecorder:false,
            param: {
                'record': false,
                'directTimer': true,
                'directProgress': true,
                'maxRecTime': 10,
                'next': false,
                'needTimerStop': false,
                nextStepText: 'К экзамену'
            },
            action:null//действие-функция
        }



    },
    computed: {
        formatTime() {
            return (this.recorder.recTime + "").toMMSS();
        },
        currentIcon() {
            switch (this.recorder.micStatus) {
                case MicStatus.NOTREADY:
                    return 'fa-solid  fa-microphone-slash icon-size';
                case MicStatus.READYTORECORD:
                    if (this.recorder.mediaRecorder == null)
                        return 'fa-solid fa-record-vinyl icon-size red';
                    else
                        return 'fa-solid fa-record-vinyl icon-size red';
                case MicStatus.READYTOPLAY:
                    return 'fa-solid fa-circle-play icon-size';
                case MicStatus.RECORDING:
                    if (this.recorder.mediaRecorder == null)
                        return 'fa-solid fa-circle-stop icon-size gray';
                    else
                        return 'fa-solid fa-circle-stop icon-size red';

                case MicStatus.AUTORECORDING:
                    if (this.recorder.mediaRecorder == null)
                        return 'fa-solid fa-circle-stop icon-size gray';
                    else
                        return 'fa-solid fa-circle-stop icon-size red';

                case MicStatus.PLAY:
                    return 'fa-solid fa-circle-stop icon-size';
                case MicStatus.PREPARE:
                    return 'fas fa-tasks icon-size'
                case MicStatus.AUTORECORDING:
                    if (this.recorder.mediaRecorder == null)
                        return 'fa-solid fa-microphone icon-size gray';
                    else
                        return 'fa-solid fa-microphone icon-size red';
                case MicStatus.INVISIBLE:
                    return 'fa-solid fa-record-vinyl icon-size red invisible-icon';


            }
        },
        micReadyIcon() {
            switch (this.recorder.micReadyStatus) {
                case
                    MicReadyStatus.NOTREADY:
                    return 'fa-solid  fa-microphone icon-size red ';
                case MicReadyStatus.READY:
                    return 'fa-solid  fa-microphone black  icon-size';

            }

        }
    },
    methods: {
        init() {
            //let getMicButton = document.getElementById('get-mic');
            //getMicButton.addEventListener('click', async () => this.getMic());
        },

        async getMic() {
            
            if (this.recorder.micReadyStatus == MicReadyStatus.READY) return;
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.recorder.mediaRecorder = new MediaRecorder(stream);
            if (this.recorder.mediaRecorder == null) {
                alert("Не могу получить доступ к микрофону");
                return;
            }
            this.recorder.mediaRecorder.ondataavailable = (e) => {
                this.recorder.chunks.push(e.data);
                console.log('data available:' + this.recorder.chunks.length)
            }
            this.recorder.mediaRecorder.onstart = (e) => {
                console.log('Recording started');
            }
            this.recorder.mediaRecorder.onstop = (e) => {
                console.log('Recording stoped');
            }
            this.recorder.micReadyStatus = MicReadyStatus.READY;
            this.recorder.micStatus=MicStatus.READYTORECORD;
            this.recorder.info = "Микрофон готов";
            //this.nextStep();

        },
        toggleIcon() {
            console.log(this.recorder.micStatus)
            switch (this.recorder.micStatus) {
                case MicStatus.NOTREADY:
                    this.getMic();
                    break;
                case MicStatus.READYTORECORD:
                    this.startRecording();
                    break;
                case MicStatus.READYTOPLAY:
                    this.playLastRecord();
                    break;
                case MicStatus.RECORDING:
                    this.stopRecording();
                    break;
                case MicStatus.PLAY:
                    this.stopPlayLastRecord();
                    break;
            }
            console.log(this.recorder.micStatus)
        },
        startRecording() {
            //if (mediaRecorder && mediaRecorder.state === 'inactive') 

            if (this.recorder.mediaRecorder == null) {
                alert("Нет доступа к микрофону. Запись не ведется");
                return;
            }
            if (this.recorder.micStatus != MicStatus.AUTORECORDING)
                this.recorder.micStatus = MicStatus.RECORDING;
            try {
                this.recorder.mediaRecorder.start();
                this.timerStart(this.recorder.param);
            }
            catch (err) {
                this.recorder.micReadyIcon = MicReadyStatus.NOTREADY;
                console.log(err);
                //console.log(mediaRecorder);
                console.log('Нет доступа к микрофону. Запись не ведется');
                this.info = 'Нет доступа к микрофону. Запись не ведется';
            }

        },
        stopRecording(needTimerStop = true) {
            if (this.recorder.mediaRecorder == null) return;
            if (this.recorder.mediaRecorder.state === 'recording') {

                this.recorder.mediaRecorder.stop();
                this.recorder.progressValue = 0;
                if (this.recorder.micStatus != MicStatus.AUTORECORDING)
                    this.recorder.micStatus = MicStatus.READYTOPLAY;
                if (needTimerStop) this.timerStop(this.recorder.timer);

            }
            else {
                console.log('No active recording');
            }
        },
        playLastRecord() {
            if (this.recorder.chunks != null && this.recorder.chunks.at(-1) != null) {
                const blob = new Blob(this.recorder.chunks, { type: this.recorder.chunks.at(-1).type });
                const audioURL = URL.createObjectURL(blob);
                this.recorder.audio = new Audio(audioURL);
                this.recorder.audio.play();
                this.recorder.progressValue = 0;
                this.recorder.timer = this.timerStart(this.recorder.param);
                this.recorder.micStatus = MicStatus.PLAY;
                this.recorder.audio.addEventListener('ended', () => {
                    console.log('Аудиофайл завершил проигрывание');
                    this.timerStop(this.recorder.timer);
                    this.recorder.progressValue = 0;
                    this.recorder.micStatus = MicStatus.READYTOPLAY;
                });
            } else {
                console.log('No recorded audio to play');
            }
        },
        stopPlayLastRecord(needTimerStop = true) {
            if (needTimerStop) this.timerStop(this.recorder.timer);
            if (this.recorder.audio == null) return;
            this.recorder.audio.pause();
            this.recorder.audio.currentTime = 0;
            this.recorder.micStatus = MicStatus.READYTOPLAY;

        },
        nextStep(next = true) {
            //if (taction) action();
            if (next) app.nextStep(); //this.action();// this.step++;
            // switch (this.step) {
            //     case 0:
            //         this.recorder.param = {
            //             'record': true,
            //             'directTimer': true,
            //             'directProgress': true,
            //             'maxRecTime': 5,
            //             'next': true,
            //             'needTimerStop': true,
            //             'nextStepText': 'К экзамену',
            //             timer: null
            //         }
            //         this.recorder.isShowTime = true;
            //         this.recorder.micStatus = MicStatus.READYTORECORD;

            // }
            // console.log("Next step");
        },

        timerStart(param) {

            let progressStep = 100 / param.maxRecTime;
            if (param.directProgress)
                this.recorder.progressValue = 0;
            else {
                this.recorder.progressValue = 100;
                progressStep *= - 1;
            }
            let t = 0;
            this.recorder.timer = setInterval(
                () => {
                    t++;
                    if (t <= param.maxRecTime) {
                        if (!param.directTimer)
                            this.recorder.recTime = this.recorder.param.maxRecTime - t;
                        else
                            this.recorder.recTime = t;
                        this.recorder.progressValue += progressStep;
                        console.log(this.recorder.progressValue);
                    }

                    else {
                        this.timerStop(this.recorder.timer);
                        if (this.recorder.micStatus == MicStatus.PREPARE ||
                            this.recorder.micStatus == MicStatus.AUTORECORDING) {
                            this.recorder.micStatus = MicStatus.NOTREADY;
                            if (param.next)
                                this.nextStep();
                        }
                    }
                }, 1000);
            return this.recorder.timer;
        },

        timerStop(timer) {
            clearInterval(timer);
            this.recorder.recTime = 0;
            console.log("timer stop")
            this.recorder.progressValue = 0;
            switch (this.recorder.micStatus) {
                case MicStatus.PLAY:
                    this.stopPlayLastRecord(false);
                    break;
                case MicStatus.RECORDING:
                case MicStatus.AUTORECORDING:
                    this.stopRecording(false);
                    break;

            }

        },
        mouseEnter(event) {

            console.log(event.target.id);
            this.info = 'Enter';
        },
        mouseLeave(event) {
            console.log(event.target.id);
            this.info = '';
        }



    }
});




navigator.permissions.query({ name: 'microphone' }).then((permissionStatus) => {
    permissionStatus.onchange = () => {
        console.log('Изменение доступа к микрофону');
        //this.mic_message = 'микрофон не доступен'
        // Дополнительные действия при изменении доступа к микрофону
    };
});

console.log('microphone loaded');











