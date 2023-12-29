// Using event listener to capture input from an HTML input element
const inputElement = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    const userInput = inputElement.value;
    document.write('Happy holidays:', userInput);
})

function submitAddress() {
    // Retrieve values from input fields
}