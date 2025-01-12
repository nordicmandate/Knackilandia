const targetDate = new Date("June 20, 2025 00:00:00").getTime();
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "Midsummer is here!";
    }
}, 1000);
