import * as mathOperations from './mathOperations.js';

document.getElementById('calculate').addEventListener('click', () => {
  console.log('Button clicked'); // Add this line for debugging

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operator').value;
  let result;

  try {
    switch (operation) {
      case 'add':
        result = mathOperations.add(num1, num2);
        break;
      case 'subtract':
        result = mathOperations.subtract(num1, num2);
        break;
      case 'multiply':
        result = mathOperations.multiply(num1, num2);
        break;
      case 'divide':
        result = mathOperations.divide(num1, num2);
        break;
      case 'power':
        result = mathOperations.power(num1, num2);
        break;
      case 'sqrt':
        result = mathOperations.sqrt(num1);
        break;
      case 'toNumber':
        result = parseFloat(num1);
        break;
      case 'toString':
        result = num1.toString();
        break;
      default:
        throw new Error('Invalid operation');
    }

    // Update the result div based on the type of result
    if (typeof result === 'number') {
      document.getElementById('result').textContent = `Result: ${result}`;
    } else {
      document.getElementById('result').textContent = `Result: "${result}"`;
    }
  } catch (error) {
    document.getElementById('result').textContent = `Error: ${error.message}`;
  }
});
