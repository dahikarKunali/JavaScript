# Dynamic Class Scheduler & Countdown (VAC 11)

A minimal, responsive web application demonstrating **JavaScript Timers** and **ES6 Modules**.

## Key Concepts Demonstrated

1. **ES6 Modules (`import` / `export`)**:
   - `scheduler.js`: Exports the `schedule` data array and the `formatTime()` formatting utility using `export`.
   - `app.js`: Imports `schedule` and `formatTime` using `import { schedule, formatTime } from './scheduler.js';`.
   - `index.html`: Loaded via `<script type="module" src="app.js"></script>`.

2. **JavaScript Timers**:
   - `setInterval()`:
     - Real-time clock updating every 1000ms.
     - Live countdown ticker decrementing seconds remaining (supports class durations and custom inputted seconds).
   - `setTimeout()`:
     - Automatically pauses at zero and switches to the next class after a 3-second delay.

## How to Run

You can open and run this project in **two ways** (it is **NOT** strictly required to run from Live Server or VS Code):

### Method 1: Direct File Open (Zero Setup)
- Simply double-click `index.html` or drag it into any modern web browser (Chrome, Edge, Firefox, Brave).
- **Direct File Mode (`file://`)** automatically activates: the application will initialize without CORS errors and run all timers and module logic seamlessly.

### Method 2: Local Web Server / Live Server
- In VS Code: Right-click `index.html` -> **"Open with Live Server"**.
- Or via terminal:
  ```bash
  npx serve "VAC 11"
  ```
- **Server Mode (`http://`)** automatically activates: the application loads `app.js` which natively imports `scheduler.js` via standard ES6 module syntax (`import` / `export`).

---

## Why was a local server originally suggested?
The project requirement states:
> *"Use JavaScript timers (setTimeout(), setInterval()) and ES6 modules (import/export) to build a dynamic countdown or class scheduler with real-time updates and responsive layout."*

By default, modern web browsers enforce strict CORS policies on local `file://` URLs, preventing external relative JavaScript modules (`<script type="module" src="app.js">`) from reading other local `.js` files (`import ... from './scheduler.js'`).

To ensure total flexibility for evaluations, presentations, or quick previews, the application now includes an **intelligent dual-mode runner** in `index.html`. It detects the environment and works in both `file://` (direct click) and `http://` (web server) modes, meeting all project specifications in both environments.
