const timerEle = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEle.innerHTML = formattedTime;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft==0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);  //stop
    timeLeft = 1500;  // reset
    updateTimer();  // restart
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
