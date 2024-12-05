'use strict'
const steps = [
    'start', 'mic-test', 'count-down-prepair', 'prepair1',
    'count-down-task', 'task1', 'count-down-prepair', 'prepair2', 'count-down-task',
    'task2', 'task22', 'task23', 'task24', 'count-down-prepair', 'prepair3', 'count-down-task', 'task31', 'task32', 'task33', 'task34', 'task35', 'count-down-prepair', 'prepair4', 'count-down-task', 'task4', 'download', 'start'
];

let app = new Vue({
    el: '#app',
    data: {
        step: -1,//Уровень не готов
        content: {
            head1: "Внимание",
            main_text: 'На следующем этапе тренажёр попытается получить доступ к микрофону.<br> У Вас появится запрос на использование сайтом микрофона.<br>Если вы планируете использовать функцию записи, то разрешите сайту использовать микрофон.',
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
            isShowPrepare: true,
            isShowImage1: false,
            isShowImage2: false,
            isShowResult: false,
            isShowCaption: false,
            isShowAudioContainer: false,
            isShowSelect: false
        },
        countDown: {
            countDownText: 'Be ready for the test',
            countDown: 10
        }
    },
    methods: {
        init() {
            console.log('init js')
            //recorder.action=this.nextStep()
        },
        nextStep(value) {
            alert(value)
            recorder.stopRecording();
            recorder.stopPlayLastRecord();
            synth.cancel();
            this.step++;

            switch (steps[this.step]) {
                case 'mic-test'://Mic test
                    app.micStatus = MicStatus.READYTORECORD;
                    mic_test('Внимание', 'Нажмите кнопку записи внизу, произнесите несколько слов, остановите запись, затем попробуйте воспроизвести.<br> Если вы уже делали это, можете сразу перейти к выполнению задания.')
                    break;
                    /*
                case 'count-down-prepair'://Countdown
                    count_down('', '', 'Be ready for the test', 5)
                    break;
                case 'count-down-task'://Countdown
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

function start()
{
    document.getElementById('bottomButton').style.display='none';
    recorder.recorder.isShowRecorder=true;
    recorder.getMic();
}

console.log('script loaded');
