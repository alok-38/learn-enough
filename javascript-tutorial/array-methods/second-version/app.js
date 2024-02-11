// Initialize array
let numbersArray = [];

// Function to display the current array
const displayArray = () => {
    const arrayListEl = document.getElementById('arrayList');
    arrayListEl.innerHTML = '';
    numbersArray.forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        arrayListEl.appendChild(listItem);
    });
}

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    const numberInputEl = document.getElementById('numberInput');
    const number = parseFloat(numberInputEl.value);
    if (!isNaN(number)) {
        numbersArray.push(number);
        displayArray();
    }
    numberInputEl.value = '';
});

const popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', () => {
    numbersArray.pop();
    displayArray();
});

const shiftBtn = document.getElementById('shiftBtn');
shiftBtn.addEventListener('click', () => {
    numbersArray.shift();
    displayArray();
});

const unshiftBtn = document.getElementById('unshiftBtn');
unshiftBtn.addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value);
    if (!isNaN(number)) {
        numbersArray.unshift(number);
        displayArray();
    }
    numberInput.value = ''; // Clear input field
});

const clearArray = () => {
    numbersArray = []; // Reset the array to an empty array
    displayArray(); // Update the display
}
document.getElementById('clearBtn').addEventListener('click', clearArray);
