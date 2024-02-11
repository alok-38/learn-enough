const secondsAfterMoonLanding = () => {
    const birthdayInput = document.getElementById('birthday').value;
    if (!birthdayInput) {
        alert('Please enter your birthday.');
        return;
    }
    const birthday = new Date(birthdayInput);
    const moonLandingDate = new Date('July 20, 1969 20:17:40 GMT');
    const secondsAfterMoonLanding = (birthday.getTime() - moonLandingDate.getTime()) / 1000;
    const daysAfterMoonLanding = secondsAfterMoonLanding / (60 * 60 * 24);

    if (secondsAfterMoonLanding < 0) {
        document.getElementById('result').textContent = "You were born before the Moon landing!";
        document.getElementById('days').textContent = "";
    } else {
        document.getElementById('result').textContent = "You were born " + secondsAfterMoonLanding.toLocaleString() + " seconds after the Moon landing.";
        document.getElementById('days').textContent = "That's approximately " + daysAfterMoonLanding.toLocaleString() + " days.";
    }
}

const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', secondsAfterMoonLanding);