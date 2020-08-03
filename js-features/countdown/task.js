let timerHour = document.getElementById("timerHour");
let timerMin = document.getElementById("timerMin");
let timerSec = document.getElementById("timerSec");
let intervalTimer;

function timer() {
    if ((timerSec.textContent * 1) === 00) {        
        if ((timerMin.textContent * 1) === 00){
            if (((timerHour.textContent * 1) === 00)){
                clearInterval(intervalTimer);
                alert('Вы победили в конкурсе!');
                location.assign("https://www.litres.ru/gettrial/?art=54133353&format=fb2&lfrom=424032133");
            } else {
                timerHour.textContent -= 01;
                timerMin.textContent = 60;
                if (timerHour.textContent < 10) timerHour.textContent = '0' + timerHour.textContent;
            };
        } else {
            timerMin.textContent -= 01;
            timerSec.textContent = 59;
            if (timerMin.textContent < 10) timerMin.textContent = '0' + timerMin.textContent; 
        };
    } else {
        timerSec.textContent -= 01; 
        if (timerSec.textContent < 10) timerSec.textContent = '0' + timerSec.textContent;
    };
};

intervalTimer = setInterval(timer, 1000);