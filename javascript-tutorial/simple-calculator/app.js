const calculateBtnEl = document.getElementById('calculateBtn');
const resetBtnEl = document.getElementById('resetBtn');
const resultEl = document.querySelector('.result');
const num1InputEl = document.querySelector('.num1');
const num2InputEl = document.querySelector('.num2');
const selectOperationEl = document.getElementById('selectOperation');

calculateBtnEl.addEventListener('click', () => {
    let number1 = Number(num1InputEl.value);
    let number2 = Number(num2InputEl.value);
    let operator = selectOperationEl.value;

    switch (operator) {
        case 'plus':
            resultEl.innerHTML = number1 + number2;
            break;
        case 'minus':
            resultEl.innerHTML = number1 - number2;
            break;
        case 'divide':
            resultEl.innerHTML = number1 / number2;
            break;
        case 'multiply':
            resultEl.innerHTML = number1 * number2;
            break;
        default:
            resultEl.innerHTML = "Invalid operator";
    }
});

resetBtnEl.addEventListener('click', () => {
    resultEl.innerHTML = '0';
    num1InputEl.value = '';
    num2InputEl.value = '';
    selectOperationEl.value = 'plus'; // Set a default operation if needed
});