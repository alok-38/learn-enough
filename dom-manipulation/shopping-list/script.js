const ulEl = document.querySelector('ul');
const inputEl = document.getElementById('item');
const buttonEl = document.querySelector('button');

const respondWhenClicked = () => {
    const shoppingItem = inputEl.value.trim();
    inputEl.value = '';
    const liEl = document.createElement('li');
    const spanEl = document.createElement('span');
    const secondButtonEl = document.createElement('button');

    liEl.textContent = shoppingItem;
    secondButtonEl.textContent = 'Delete';
    spanEl.appendChild(secondButtonEl); // Append the delete button to the span
    liEl.appendChild(spanEl); // Append the span (with the delete button) to the li
    ulEl.appendChild(liEl);

    secondButtonEl.addEventListener('click', () => {
        ulEl.removeChild(liEl);
    });

    inputEl.focus();
}

buttonEl.addEventListener('click', respondWhenClicked);
