
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = ${pad(hours)}:${pad(minutes)}:${pad(seconds)};
}

function pad(unit) {
    return unit.toString().padStart(2, '0');
}
[6:11 PM, 9/3/2024] Harshitha Ram: body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#display {
    font-size: 2em;
    margin: 20px 0;
}

.buttons button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 1em;
    cursor: pointer;
}
