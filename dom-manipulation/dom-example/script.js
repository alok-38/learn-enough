const linkEl = document.querySelector('a');
linkEl.textContent = "Mozilla Developer Network";
linkEl.href = "https://developer.mozilla.org";

const sectionEl = document.querySelector('section');
const paraEl = document.createElement('p');
paraEl.textContent = 'We hope you enjoyed the ride!';

sectionEl.appendChild(paraEl);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);


// Manipulating styles
paraEl.style.color = "white";
paraEl.style.backgroundColor = "black";
paraEl.style.padding = "10px";
paraEl.style.width = "250px";
paraEl.style.textAlign = "center";

paraEl.setAttribute('class', 'highlight');