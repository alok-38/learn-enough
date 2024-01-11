document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const resetButton = document.getElementById('reset');
    const counterElement = document.getElementById('counter');
  
    // Initial counter value
    let counterValue = 0;
  
    // Update the counter text content
    const updateCounter = () => {
      counterElement.textContent = counterValue;
    };
  
    // Event listener for decrement button
    decrementButton.addEventListener('click', () => {
      counterValue--;
      updateCounter();
    });
  
    // Event listener for increment button
    incrementButton.addEventListener('click', () => {
      counterValue++;
      updateCounter();
    });
  
    // Event listener for reset button
    resetButton.addEventListener('click', () => {
      counterValue = 0;
      updateCounter();
    });
});
