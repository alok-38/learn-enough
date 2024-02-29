// Selecting elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Pomodoro timer class
class PomodoroTimer {
    constructor(duration, timerDisplay) {
        this.duration = duration;
        this.timerDisplay = timerDisplay;
        this.intervalId = null;
        this.isRunning = false;
    }
}