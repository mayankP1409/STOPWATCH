window.onload = function () {
    let seconds = 0;
    let tens = 0;
    let mins = 0;

    let getSeconds = document.querySelector('.seconds');
    let getTens = document.querySelector('.tens');
    let getMins = document.querySelector('.mins');
    let btnStart = document.querySelector('.btn-start');
    let btnStop = document.querySelector('.btn-stop');
    let btnReset = document.querySelector('.btn-reset');
    let btnLap = document.querySelector('.btn-lap');

    let interval;
    let lapTimes = [];
    let lapList = document.createElement('ul');
    let lapListContainer = document.querySelector('.lap-times-container');

    btnStart.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    btnStop.addEventListener('click', () => {
        clearInterval(interval);
    });

    btnReset.addEventListener('click', () => {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        mins = 0;
        getSeconds.innerHTML = '00';
        getTens.innerHTML = '00';
        getMins.innerHTML = '00';
        lapTimes = [];
        lapList.innerHTML = '';
    });

    btnLap.addEventListener('click', () => {
        lapTimes.push(`${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(tens).padStart(2, '0')}`);
        displayLapTimes();
    });

    function startTimer() {
        tens++;
        if (tens > 99) {
            seconds++;
            tens = 0;
        }
        if (seconds > 59) {
            mins++;
            seconds = 0;
        }
        getTens.innerHTML = String(tens).padStart(2, '0');
        getSeconds.innerHTML = String(seconds).padStart(2, '0');
        getMins.innerHTML = String(mins).padStart(2, '0');
    }

    function displayLapTimes() {
        lapList.innerHTML = '';
        lapTimes.forEach((lapTime, index) => {
            let lapItem = document.createElement('li');
            lapItem.textContent = `Lap ${index + 1}: ${lapTime}`;
            lapList.appendChild(lapItem);
        });
        lapListContainer.appendChild(lapList);
    }
};