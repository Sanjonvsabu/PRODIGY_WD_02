let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").textContent = "START";
  } else {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    document.getElementById("startStop").textContent = "STOP";
  }
}

function updateTimer() {
  let stopwatch = document.getElementById("stopwatch");
  let timeArray = stopwatch.textContent.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  stopwatch.textContent =
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById("startStop").textContent = "START";
  document.getElementById("stopwatch").textContent = "00:00:00";
  lapCount = 1;
  document.getElementById("recordedLaps").innerHTML = "";
}

function lap() {
  let lapTime = document.getElementById("stopwatch").textContent;
  let lapItem = document.createElement("div");
  lapItem.className = "lapItem";
  lapItem.textContent = "Lap " + lapCount + ": " + lapTime;
  document.getElementById("recordedLaps").appendChild(lapItem);
  lapCount++;
}

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

document.getElementById("startStop").addEventListener("click", startStop);
document.getElementById("lap").addEventListener("click", lap);
document.getElementById("reset").addEventListener("click", reset);
