const checkPassword = () => {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

// Check password complexity
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

    if (strongRegex.test(password)) {
        message.style.color = "green";
        message.innerHTML = "Strong password";
    } else if (mediumRegex.test(password)) {
        message.style.color = "orange";
        message.innerHTML = "Medium password";
    } else {
        message.style.color = "red";
        message.innerHTML = "Weak password";
    }
}

const button = document.querySelector('button');
button.addEventListener('click', checkPassword);