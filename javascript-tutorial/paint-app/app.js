console.log('Script Loaded...');

function paint(color) {
  console.log(color);
  const circle = document.getElementById('circleID');
  circle.style.backgroundColor = color;
  console.log(circle);
}

document.getElementById('colorPicker').addEventListener('input', () => {
  const color = document.getElementById('colorPicker').value;
  paint(color);
});
