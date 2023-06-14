const countdownDate = new Date("2024-02-15").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24)) + " Days";
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " Hours";
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " Minutes";
    const seconds = Math.floor((distance % (1000 * 60)) / 1000) + " Seconds";

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);