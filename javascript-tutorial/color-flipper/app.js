// Array of possible colors
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33A1FF', '#A1FF33', '#FF3333', '#33FFA1', '#A133FF', '#A1FF33'];

// Function to generate random color
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to determine if a color is light or dark
function isLightColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
  
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Colors with luminance greater than 0.5 are considered light
    return luminance > 0.5;
}

// Function to change the color and update the display
function changeColor() {
    const colorDisplay = document.getElementById('color-display');
    const newColor = getRandomColor();
    colorDisplay.textContent = newColor;
    document.body.style.backgroundColor = newColor;
    // Check if the background color is light or dark
    const isLight = isLightColor(newColor);

    // Adjust font color based on background color
    colorDisplay.style.color = isLight ? '#000' : '#fff';
}

const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', changeColor);