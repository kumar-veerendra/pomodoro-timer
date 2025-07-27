const timerEle = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let interval = null;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEle.innerHTML = formattedTime;
}

function startTimer() {
    if (interval !== null) return; // ✅ Prevent multiple intervals

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            interval = null; // ✅ Reset interval reference
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null; // ✅ Reset interval so it can be started again
}

function resetTimer() {
    clearInterval(interval);
    interval = null; // ✅ Reset interval reference
    timeLeft = 1500;
    updateTimer();
}

// Initialize the display on page load
updateTimer();

// Button event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
