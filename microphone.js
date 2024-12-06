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

        recTime: 15,
        micStatus: MicStatus.INVISIBLE,
        micReadyStatus: MicReadyStatus.NOTREADY,
        audio: null,
        chunks: [],
        info: 'Микрофон не готов',//log recorder        
        mediaRecorder: null,
        isShowTime: true,
        timer: null,
        isShowRecorder: false,
        param: {
            'record': false,
            'directTimer': true,
            'directProgress': true,
            'maxRecTime': 10,
            'next': false,
            'needTimerStop': false,
            nextStepText: 'К экзамену'
        }
        //action: null//действие-функция
    },
    computed: {
        formatTime() {
            return (this.recTime + "").toMMSS();
        },
        currentIcon() {
            switch (this.micStatus) {
                case MicStatus.NOTREADY:
                    return 'fa-solid  fa-microphone-slash icon-size';
                case MicStatus.READYTORECORD:
                    if (this.mediaRecorder == null)
                        return 'fa-solid fa-record-vinyl icon-size red';
                    else
                        return 'fa-solid fa-record-vinyl icon-size red';
                case MicStatus.READYTOPLAY:
                    return 'fa-solid fa-circle-play icon-size';
                case MicStatus.RECORDING:
                    if (this.mediaRecorder == null)
                        return 'fa-solid fa-circle-stop icon-size gray';
                    else
                        return 'fa-solid fa-circle-stop icon-size red';

                case MicStatus.AUTORECORDING:
                    if (this.mediaRecorder == null)
                        return 'fa-solid fa-circle-stop icon-size gray';
                    else
                        return 'fa-solid fa-circle-stop icon-size red';

                case MicStatus.PLAY:
                    return 'fa-solid fa-circle-stop icon-size';
                case MicStatus.PREPARE:
                    return 'fas fa-tasks icon-size'
                case MicStatus.AUTORECORDING:
                    if (this.mediaRecorder == null)
                        return 'fa-solid fa-microphone icon-size gray';
                    else
                        return 'fa-solid fa-microphone icon-size red';
                case MicStatus.INVISIBLE:
                    return 'fa-solid fa-record-vinyl icon-size red invisible-icon';


            }
        },
        micReadyIcon() {
            switch (this.micReadyStatus) {
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
        },

        async getMic() {

            if (this.micReadyStatus == MicReadyStatus.READY) return;
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                this.mediaRecorder = new MediaRecorder(stream);
                if (this.mediaRecorder == null) {

                    return;
                }
                this.mediaRecorder.ondataavailable = (e) => {
                    this.chunks.push(e.data);
                    //this.recorder.chunks[app.step]=e.data;
                    console.log('data available:' + this.chunks.length)
                }
                this.mediaRecorder.onstart = (e) => {
                    console.log('Recording started');
                }
                this.mediaRecorder.onstop = (e) => {
                    console.log('Recording stoped');
                }
                this.micReadyStatus = MicReadyStatus.READY;
                this.micStatus = MicStatus.READYTORECORD;
                this.info = "Микрофон готов";
            }
            catch {
                alert('Не могу получить доступ к микрофону. Запись не ведется');
                this.micStatus = MicStatus.INVISIBLE;
                this.micReadyStatus = MicReadyStatus.NOTREADY;

            }
            //this.nextStep();

        },
        toggleIcon() {
            //console.log(this.micStatus)
            switch (this.micStatus) {
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
            //console.log(this.micStatus)
        },
        startRecording() {
            //if (mediaRecorder && mediaRecorder.state === 'inactive') 

            if (this.mediaRecorder == null) {
                alert("Нет доступа к микрофону. Запись не ведется");
                return;
            }
            if (this.micStatus != MicStatus.AUTORECORDING)
                this.micStatus = MicStatus.RECORDING;
            try {
                this.mediaRecorder.start();
                this.timerStart(this.param);
            }
            catch (err) {
                this.micReadyIcon = MicReadyStatus.NOTREADY;
                console.log(err);
                //console.log(mediaRecorder);
                this.micReadyStatus = MicReadyStatus.NOTREADY;
                console.log('Нет доступа к микрофону. Запись не ведется');
                this.info = 'Нет доступа к микрофону. Запись не ведется';
                if (confirm('Нет доступа к микрофону. Запросить доступ?')) {
                    this.getMic();
                }
            }

        },
        stopRecording(needTimerStop = true) {
            if (this.mediaRecorder == null) return;
            if (this.mediaRecorder.state === 'recording') {

                this.mediaRecorder.stop();
                this.progressValue = 0;
                if (this.micStatus != MicStatus.AUTORECORDING)
                    this.micStatus = MicStatus.READYTOPLAY;
                if (needTimerStop) this.timerStop(this.timer);

            }
            else {
                console.log('No active recording');
            }
        },
        playLastRecord() {
            // Проверяем, есть ли записанные фрагменты и есть ли последний фрагмент
            if (this.chunks && this.chunks.length > 0) {
                const lastChunk = this.chunks.at(-1); // Получаем последний фрагмент
                const lastChunks = []
                lastChunks.push(this.chunks.at(-1));

                if (lastChunk) {
                    const blob = new Blob(lastChunks, { type: lastChunk.type }); // Создаем Blob из всех фрагментов
                    const audioURL = URL.createObjectURL(blob); // Создаем URL для Blob

                    this.audio = new Audio(audioURL); // Создаем новый объект Audio
                    this.audio.play() // Проигрываем аудио
                        .then(() => {
                            console.log('Аудиофайл начал проигрываться');
                            this.progressValue = 0; // Сбрасываем значение прогресса
                            this.timer = this.timerStart(this.param); // Запускаем таймер
                            this.micStatus = MicStatus.PLAY; // Обновляем статус микрофона

                            // Добавляем слушателя события 'ended' для отслеживания окончания воспроизведения
                            this.audio.addEventListener('ended', () => {
                                console.log('Аудиофайл завершил проигрывание');
                                this.timerStop(this.timer); // Останавливаем таймер
                                this.progressValue = 0; // Сбрасываем значение прогресса
                                this.micStatus = MicStatus.READYTOPLAY; // Обновляем статус микрофона
                            });
                        })
                        .catch(error => {
                            console.error('Ошибка при проигрывании аудио:', error);
                        });
                }
            } else {
                console.log('No recorded audio to play'); // Выводим сообщение, если нет записанного аудио
            }
        },
        stopPlayLastRecord(needTimerStop = true) {
            if (needTimerStop) this.timerStop(this.timer);
            if (this.audio == null) return;
            this.audio.pause();
            this.audio.currentTime = 0;
            this.micStatus = MicStatus.READYTOPLAY;

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
                this.progressValue = 0;
            else {
                this.progressValue = 100;
                progressStep *= - 1;
            }
            let t = 0;
            this.timer = setInterval(
                () => {
                    t++;
                    if (t <= param.maxRecTime) {
                        if (!param.directTimer)
                            this.recTime = this.param.maxRecTime - t;
                        else
                            this.recTime = t;
                        this.progressValue += progressStep;
                        //console.log(this.recorder.progressValue);
                    }

                    else {
                        this.timerStop(this.timer);
                        if (this.micStatus == MicStatus.PREPARE ||
                            this.micStatus == MicStatus.AUTORECORDING) {
                            this.micStatus = MicStatus.NOTREADY;
                            if (param.next)
                                this.nextStep(false);//false остаемся на том же экране
                        }
                    }
                }, 1000);
            return this.timer;
        },

        timerStop(timer) {
            clearInterval(timer);
            this.recTime = 0;
            console.log("timer stop")
            this.progressValue = 0;
            switch (this.micStatus) {
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
        recorder.micReadyStatus = MicReadyStatus.NOTREADY;
        recorder.getMic();
        //this.mic_message = 'микрофон не доступен'
        // Дополнительные действия при изменении доступа к микрофону
    };
});

console.log('microphone loaded');