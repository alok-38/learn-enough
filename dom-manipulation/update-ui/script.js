const appEl = document.getElementById('app');
// Create a new H1 element
const headerEl = document.createElement('h1');
// Create a new text node for the h1 element
const textNode = 'Develop. Preview. Ship.';
const headerElContent = document.createTextNode(textNode);

// Append the text to the h1 element
headerEl.appendChild(headerElContent);

// Place the h1 inside the div
appEl.appendChild(headerEl);