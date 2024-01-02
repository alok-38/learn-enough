function displayArray() {
    // Get the input value and split it into an array
    const inputArray = document.getElementById('inputArray').value.split(',');
    
    // Get the container for displaying the array and flavor dropdowns
    const outputContainer = document.getElementById('outputArray');
    const flavorDropdownsContainer = document.getElementById('flavorDropdowns');
    
    // Clear previous content
    outputContainer.innerHTML = '';
    flavorDropdownsContainer.innerHTML = '';
    
    // Create a list to display the array elements
    const list = document.createElement('ul');
    
    // Populate the list with array elements
    inputArray.forEach(customer => {
        const listItem = document.createElement('li');
        
        // Create a span for customer name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${customer} - `;
        listItem.appendChild(nameSpan);
        
        // Create a dropdown for flavor
        const flavorDropdown = document.createElement('select');
        flavorDropdown.id = `flavor_${customer}`;
        const flavors = ['Vanilla', 'Chocolate', 'Strawberry']; // Add more flavors as needed
        flavors.forEach(flavor => {
            const option = document.createElement('option');
            option.value = flavor.toLowerCase();
            option.textContent = flavor;
            flavorDropdown.appendChild(option);
        });
        listItem.appendChild(flavorDropdown);
        
        // Append the list item to the list
        list.appendChild(listItem);
    });
    
    // Append the list to the output container
    outputContainer.appendChild(list);
    
    // Clear the input field
    document.getElementById('inputArray').value = '';
}

const acceptArrayBtn = document.getElementById('acceptArray');
acceptArrayBtn.addEventListener('click', displayArray);
