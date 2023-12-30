let inputArray = [];

function addValue() {
    const inputValue = document.getElementById('inputValue').value;
    inputArray.push(inputValue);
    updateResult('Array after adding value: ' + inputArray.join(', '));
}

function performOperations() {
    updateResult('Performing operations on array: ' + inputArray.join(', '));
}

function updateResult(message) {
    document.getElementById('result').innerHTML = message;
}

const addToArrayBtn = document.getElementById('addToArray');
addToArrayBtn.addEventListener('click', addValue);
const performOperationsBtn = document.getElementById('performOperations');
performOperationsBtn.addEventListener('click', performOperations);
