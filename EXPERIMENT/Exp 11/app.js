// ES6 Module: Importing schedule and formatTime function
import { schedule, formatTime } from './scheduler.js';

// DOM elements
const clockEl = document.getElementById('clock');
const countdownEl = document.getElementById('countdown');
const classTitle = document.getElementById('currentClassTitle');
const statusMsg = document.getElementById('statusMsg');
const classList = document.getElementById('classList');
const modeBadge = document.getElementById('modeBadge');
if (modeBadge) modeBadge.innerText = 'Server Mode: ES6 Module (http://)';

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const customInput = document.getElementById('customInput');
const setCustomBtn = document.getElementById('setCustomBtn');

let currentClassIndex = 0;
let timeLeft = schedule[0].duration;
let timerId = null;

// 1. setInterval(): Updates live clock every 1000ms (1 second)
const updateClock = () => {
    clockEl.innerText = new Date().toLocaleTimeString();
};
updateClock(); // immediate display without 1s initial lag
setInterval(updateClock, 1000);

// Render the class schedule list
function renderSchedule() {
    classList.innerHTML = schedule
        .map((cls) => `<li><strong>${cls.subject}</strong> (${cls.room}) <span>${cls.duration}s</span></li>`)
        .join('');
    updateDisplay();
}

function updateDisplay() {
    const cls = schedule[currentClassIndex];
    classTitle.innerText = `Upcoming: ${cls.subject} (${cls.room})`;
    countdownEl.innerText = formatTime(timeLeft);
}

// 2. setInterval(): Dynamic countdown ticker
function startCountdown() {
    if (timerId) return; // avoid multiple intervals

    timerId = setInterval(() => {
        timeLeft--;
        countdownEl.innerText = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            statusMsg.innerText = `🔔 Started: ${schedule[currentClassIndex].subject}!`;

            // 3. setTimeout(): Wait 3 seconds, then switch to the next class
            setTimeout(() => {
                currentClassIndex = (currentClassIndex + 1) % schedule.length;
                timeLeft = schedule[currentClassIndex].duration;
                updateDisplay();
                statusMsg.innerText = "Ready for next class.";
            }, 3000);
        }
    }, 1000);
}

function pauseCountdown() {
    clearInterval(timerId);
    timerId = null;
    statusMsg.innerText = "Timer paused.";
}

function resetCountdown() {
    pauseCountdown();
    timeLeft = schedule[currentClassIndex].duration;
    countdownEl.innerText = formatTime(timeLeft);
    statusMsg.innerText = "";
}

// Button Events
startBtn.addEventListener('click', startCountdown);
pauseBtn.addEventListener('click', pauseCountdown);
resetBtn.addEventListener('click', resetCountdown);

// Set Custom Countdown Time
setCustomBtn.addEventListener('click', () => {
    const customSeconds = parseInt(customInput.value);
    if (customSeconds > 0) {
        pauseCountdown();
        timeLeft = customSeconds;
        countdownEl.innerText = formatTime(timeLeft);
        statusMsg.innerText = `Custom countdown set to ${customSeconds}s.`;
        customInput.value = '';
    }
});

// Initial call
renderSchedule();
