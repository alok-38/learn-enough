const targetDate = new Date('2024-01-01T00:00:00');

function updateCountdown() {
     // Current date and time
     const currentDate = new Date();
     // Time remaining in milliseconds
     const timeRemaining = targetDate - currentDate;

     if (timeRemaining > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = 
        `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
     } else {
        // Display a message when the countdown is over
        document.getElementById('countdown').innerHTML = 'Countdown is over!';
     }
}

 // Update the countdown every second
 setInterval(updateCountdown, 1000);

updateCountdown();