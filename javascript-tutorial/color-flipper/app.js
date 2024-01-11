// Array of possible colors
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33', '#FF3333', '#33FFA1', '#A133FF', '#A1FF33'];

// Function to generate random color
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to change the color and update the display
function changeColor() {
    const colorDisplay = document.getElementById('color-display');
    const newColor = getRandomColor();
    colorDisplay.textContent = newColor;
    document.body.style.backgroundColor = newColor;
}

const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', changeColor);