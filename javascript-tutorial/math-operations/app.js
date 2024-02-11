// Function to calculate sum
const calculateSum = numbers => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

// Function to find maximum value
const findMax = numbers => {
    return Math.max(...numbers);
};

// Function to find minimum value
const findMin = numbers => {
    return Math.min(...numbers);
};

// Function to count elements
const countElements = numbers => {
    return numbers.length;
};

// Function to calculate average
const calculateAverage = numbers => {
    let sum = calculateSum(numbers);
    return sum / numbers.length;
};

// Event listener for the calculate button
document.getElementById('calculateBtn').addEventListener('click', () => {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    // Filtering out non-numeric inputs
    const filteredNumbers = numbers.filter(num => !isNaN(num));

    if (filteredNumbers.length === 0) {
        document.getElementById('result').innerHTML = 'Please enter valid numbers!';
    } else {
        const sum = calculateSum(filteredNumbers);
        const max = findMax(filteredNumbers);
        const min = findMin(filteredNumbers);
        const count = countElements(filteredNumbers);
        const average = calculateAverage(filteredNumbers);
        document.getElementById('result').innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Maximum: ${max}</p>
        <p>Minimum: ${min}</p>
        <p>Total Elements: ${count}</p>
        <p>Average: ${average.toFixed(2)}</p>
    `;
    }
});

