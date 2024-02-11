export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  export function power(a, b) {
    return Math.pow(a, b);
  }
  
  export function sqrt(a) {
    if (a < 0) {
      throw new Error("Cannot compute square root of a negative number");
    }
    return Math.sqrt(a);
  }
  