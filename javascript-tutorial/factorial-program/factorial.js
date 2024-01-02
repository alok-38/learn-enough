function factorial(number) {
    if (number < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }

    if (!Number.isInteger(number)) {
        throw new Error("Factorial is only defined for integers.");
    }

    return number === 0 ? 1 : number * factorial(number - 1);
}

try {
    const userInput = parseInt(prompt("Enter a non-negative integer:"));
  
    if (!isNaN(userInput) && userInput >= 0) {
      const result = factorial(userInput);
      console.log(`Factorial of ${userInput} is: ${result}`);
    } else {
      throw new Error("Invalid input. Please enter a non-negative integer.");
    }
  } catch (error) {
    console.error(error.message);
}