const fs = require('fs');
const readlineSync = require('readline-sync');

function processString(inputString, operation) {
    switch (operation) {
        case '1':
            return inputString.toUpperCase();
        case '2':
            return inputString.toLowerCase();
        case '3':
            return inputString.split('').reverse().join('');
        case '4':
            return inputString.trim();
        case '5':
            return inputString.length.toString();
        default:
            throw new Error('Invalid operation.');    
    }
}

try {
    // Get user input
    const userInput = readlineSync.question('Enter a string: ');

    if (!userInput.trim()) {
        throw new Error('Input cannot be empty or contain only spaces.');
    }

    // Display menu
    console.log('Select an operation:');
    console.log('1. Uppercase');
    console.log('2. Lowercase');
    console.log('3. Reverse');
    console.log('4. Trim');
    console.log('5. Length');

    const operationChoice = readlineSync.question('Enter the operation number: ');

    // Process and display results
    const result = processString(userInput, operationChoice);
    console.log(`Result: ${result}`);

    // Ask if the user wants to save the result to a file
    const saveToFile = readlineSync.keyInYNStrict('Do you want to save the result to a file?');

    if (saveToFile) {
        const fileName = readlineSync.question('Enter the file name: ');

        // Write the result to a file
        fs.writeFileSync(fileName, result);
        console.log(`Result saved to ${fileName}.`);
    }
} catch (error) {
    console.error(error.message);
}
