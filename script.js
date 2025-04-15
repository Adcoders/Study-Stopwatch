let startTime = 0;
let elapsed = 0;
let timerInterval;
let isRunning = false;

function updateTimeDisplay() {
  let totalSeconds = Math.floor(elapsed / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  document.getElementById("time").textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  document.getElementById("total").textContent =
    `Total Study Time Today: ${hours} hrs ${minutes} min`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsed;
    timerInterval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateTimeDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsed = 0;
  updateTimeDisplay();
}

// Initialize
updateTimeDisplay();
