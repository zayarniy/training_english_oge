'use strict'


let app = new Vue({
    el: '#app',
    data: {
        step: 0,
        content: {
            head1: "Внимание",
            main_text: `На следующем этапе тренажёр попытается получить доступ к микрофону.<br>Если вы планируете использовать функцию записи, то разрешите сайту использовать микрофон.`,
            head2: '',
            head3: '',
            image1: '1px.png',
            image2: '1px.png',
            text2: '',
            levelTxt: '',
            preparationTimeText: 'Preparation 01:30',
            answerTimeText: 'Answer 01:30',
            task_filename: 'tasks/2/task2.pdf'
        },
        shows: {
            isShowRecorder: false,
            isShowMain: true,
            isShowMain2: false,
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
            isShowSelect: false
        },
        countDown: {
            text: 'Be ready for the test',
            count: 10
        }
    },
    methods: {
        init() {
            console.log('init js')
            //recorder.action=this.nextStep()
        },
        startCountDown(textToSpeak = '',  countDownText = '', countDown = 10) {
            recorder.timerStop();


            this.countDown.text = countDownText;
            this.countDown.count = countDown;
            //this.shows.isShowNav01 = false;
            recorder.isShowRecorder = false;
            this.shows.isShowMain = false;
            this.shows.isShowMain2 = false;
            this.shows.isShowCountdown = true;
            this.shows.isShowPrepare = true;
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
            speakWithDelay(textToSpeak,countDown * 1000)
        },//startCountDown
        nextStep(value) {
            
            recorder.stopRecording();
            recorder.stopPlayLastRecord();
            //synth.cancel();
            //alert(typeof value);
            if (typeof value == Number) this.step = value;
            else this.step++;
            //alert(this.step);
            const steps = [
                'start', 'mic-test',
                'count-down-task', 'prepair1',
                'count-down-task', 'task1',
                'count-down-task', 'prepair2', 'task2',
                'count-down-task', 'task21', 'task22', 'task23', 'task24', 'task25', 'task26', 'task2end',
                'count-down-task', 'prepair3',
                'count-down-task', 'task3',
                'download'];

            switch (steps[this.step]) {
                case 'mic-test'://Mic test
                    //app.micStatus = MicStatus.READYTORECORD;                    
                    recorder.isShowRecorder = true;
                    recorder.getMic();
                    this.content.main_text = `Нажмите кнопку записи <span class="fa-solid fa-record-vinyl icon-size red"></span> внизу, произнесите несколько слов, остановите запись, затем попробуйте воспроизвести.<br> Если вы уже делали это, можете сразу перейти к выполнению задания.`;
                    recorder.param = {
                        'record': true,
                        'directTimer': true,
                        'directProgress': true,
                        'maxRecTime': 5,
                        'next': false,
                        'needTimerStop': true,
                        'nextStepText': 'К заданию',
                        timer: null
                    }
                    recorder.isShowTime = true;
                    recorder.micStatus = MicStatus.READYTORECORD;
                    //mic_test('Внимание', 'Нажмите кнопку записи внизу, произнесите несколько слов, остановите запись, затем попробуйте воспроизвести.<br> Если вы уже делали это, можете сразу перейти к выполнению задания.')
                    break;

                case 'count-down-task'://Countdown
                    //this.startCountDown('', '', 'Be ready for the test', 5)
                    this.startCountDown('Now we ready for start', 'Be ready for the test', 5);
                    break;
                /*            case 'count-down-task'://Countdown
                                count_down('', '', 'Be ready for the answer', 5)
                                break;
                
                            case '':
                                //read task and prepair
                                this.Level(); //read_task(headers[1],mains.html[1],headers[1],90)
                                break;
                            case 'prepair1'://Prepair   
                                //Выталкиваем запись проверки звука
                                if (this.chunks.length > 0) this.chunks.pop();
                                speak('Now we are ready to start. Task 1')
                                setTimeout(() => {
                                    app.head1 = Tasks.task1.header;
                                    app.main_text = Tasks.task1.text;
                                    app.isShowMain = true;
                                    prepair('', '', '', 90)
                                    //setTimeout(speak(Tasks.task1.introduction1, 0, () => { speak(Tasks.task1.introduction2, 0, () => { }) }), 3000);
                                }, 3500);
                                break;
                  */
            }
        }

    }
});

function start() {
    document.getElementById('bottomButton').style.display = 'none';
    app.nextStep(1);
}

console.log('script loaded');

function chainPromises(promises) {
    return promises.reduce((prevPromise, currentFunction) => {
        return prevPromise.then(currentFunction);
    }, Promise.resolve());
}