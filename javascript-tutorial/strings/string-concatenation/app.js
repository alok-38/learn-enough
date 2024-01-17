const concatenate = () => {
    const myString1El = document.getElementById('myString1');
    const myString2El = document.getElementById('myString2');

    // Get the values of the input fields
    const myString1 = myString1El.value;
    const myString2 = myString2El.value;
    const concatenateStrings = `${myString1}${myString2}`;

    // Create a paragraph element
    const paragraphEl = document.createElement('p');
    // Set the text content of the paragraph to the concatenated string
    paragraphEl.textContent = `Concatenated string: ${concatenateStrings}`;

    // Append the paragraph to the document body (you can append it to a different element if needed)
    document.body.appendChild(paragraphEl);
}

const concatenateBtn = document.getElementById('concatenateBtn');
concatenateBtn.addEventListener('click', concatenate);