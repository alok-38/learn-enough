const displayMessageBtnEl = document.getElementById('displayMessageBtn');

const displayAnotherMessage = () => {
    const anotherParagraph = document.createElement('p');
    const myMessage = prompt('Enter your message: ');
    anotherParagraph.textContent = myMessage;
    document.body.appendChild(anotherParagraph);
}

displayMessageBtnEl.addEventListener('click', displayAnotherMessage);

setTimeout(displayAnotherMessage, 2000);