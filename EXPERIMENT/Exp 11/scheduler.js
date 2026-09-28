// ES6 Module: Data and Helper Functions

// 1. Exporting the class schedule array
export const schedule = [
    { subject: "Web Technologies", room: "Lab 3", duration: 15 },
    { subject: "Database Systems", room: "Room 204", duration: 20 },
    { subject: "Computer Networks", room: "Lab 1", duration: 25 }
];

// 2. Exporting a helper function to format seconds as MM:SS
export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}
