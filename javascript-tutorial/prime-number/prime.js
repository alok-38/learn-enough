function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  // Example: Getting prime numbers from user input
  const userInput = parseInt(prompt("Enter a number:"));
  
  if (!isNaN(userInput)) {
    for (let i = 2; i <= userInput; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  