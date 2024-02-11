const manipulateString = (event) => {
    const inputString = document.getElementById('inputString').value;
    const operation = event.currentTarget.dataset.operation;
    let outputString;

    switch (operation) {
        case 'concat':
            outputString = capitalizeEachWord(inputString);
            break;
        case 'split':
            outputString = inputString.split('').join(' ');
            break;
        case 'reverse':
            outputString = inputString.split('').reverse().join('');
            break;
        case 'uppercase':
            outputString = inputString.toUpperCase();
            break;
        case 'lowercase':
            outputString = inputString.toLowerCase();
            break;
        case 'trim':
            outputString = inputString.trim();
            break;
        default:
            outputString = 'Invalid operation';
    }

    displayOutput(outputString);
}

const capitalizeEachWord = (inputString) => {
    const words = inputString.split(' ');

    // Capitalize first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    // Join the words back together and return
    return capitalizedWords.join(' ');
}

const searchString = () => {
    const targetString = document.getElementById('inputString').value;
    const searchTerm = document.getElementById('searchString').value;
    const regex = new RegExp(searchTerm, 'gi');
    const matches = targetString.match(regex);
    const highlightedString = targetString.replace(regex, match => `<span class="highlight">${match}</span>`);

    displaySearchOutput(matches, highlightedString);
}

const encodeDecodeString = (operation) => {
    const inputString = document.getElementById('encodeDecodeInput').value;
    let outputString;

    switch (operation) {
        case 'base64encode':
            outputString = btoa(inputString);
            break;
        case 'base64decode':
            outputString = atob(inputString);
            break;
        case 'urlEncode':
            outputString = encodeURIComponent(inputString);
            break;
        case 'urlDecode':
            outputString = decodeURIComponent(inputString);
            break;
        default:
            outputString = 'Invalid operation';
    }

    displayEncodeDecodeOutput(outputString);
}

const validateString = (validationType) => {
    const inputString = document.getElementById('validationInput').value;
    let validationOutput;

    switch (validationType) {
        case 'email':
            validationOutput = validateEmail(inputString) ? 'Valid email address' : 'Invalid email address';
            break;
        case 'password':
            validationOutput = validatePasswordStrength(inputString);
            break;
        default:
            validationOutput = 'Invalid validation type';
    }

    displayValidationOutput(validationOutput);
}

const displayOutput = (output) => {
    document.getElementById('output').innerText = output;
}

const displaySearchOutput = (matches, highlightedString) => {
    const outputDiv = document.getElementById('searchOutput');
    outputDiv.innerHTML = `Matches: ${matches ? matches.length : 0}`;
    outputDiv.innerHTML += `<div>${highlightedString}</div>`;
}

const displayEncodeDecodeOutput = (output) => {
    document.getElementById('encodeDecodeOutput').innerText = output;
}

const displayValidationOutput = (output) => {
    document.getElementById('validationOutput').innerText = output;
}

const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const validatePasswordStrength = (password) => {
    // Basic password strength validation (example)
    if (password.length < 8) {
        return 'Password is too short';
    } else if (!/\d/.test(password)) {
        return 'Password must contain at least one digit';
    } else if (!/[a-zA-Z]/.test(password)) {
        return 'Password must contain at least one letter';
    } else {
        return 'Password strength: Strong';
    }
}

const manipulationOptions = document.getElementById('manipulationOptions');
manipulationOptions.addEventListener('click', manipulateString);