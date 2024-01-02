document.addEventListener('DOMContentLoaded', function() {
    const targetYearEnd = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Next year, January 1st, midnight
    function updateCountdown() {
        const currentDate = new Date();
        const timeRemaining = targetYearEnd - currentDate;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = 
            `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById('countdown').innerHTML = 'Countdown is over!';
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set the initial countdown state
});