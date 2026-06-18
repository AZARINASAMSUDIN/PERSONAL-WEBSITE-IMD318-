document.addEventListener("DOMContentLoaded", function() {

    // 1. WELCOME POP-UP (Hanya muncul di index.html)
    const path = window.location.pathname;
    if (path.includes("index.html") || path === "/" || path === "/index.html") {
        alert("Welcome to my little digital heart! 🍓✨");
    }

    // 2. DIGITAL CLOCK
    function updateClock() {
        const clockElement = document.getElementById("clock");
        if (clockElement) { clockElement.innerText = new Date().toLocaleTimeString(); }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3. COUNTDOWN
    function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            const eventDate = new Date("December 31, 2026 23:59:59").getTime();
            const now = new Date().getTime();
            const distance = eventDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            countdownElement.innerText = days + " days " + hours + " hours left! 🥂";
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
