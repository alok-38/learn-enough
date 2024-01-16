function addActivity() {
    // Get the input value
    const activityInput = document.getElementById('activityInput');
    const activityText = activityInput.value.trim();

    // Check the input is not empty
    if (activityText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = activityText;
        // Append the list item to the activity list
        const activityList = document.getElementById('activityList');
        activityList.appendChild(listItem);
        // Clear the input field
        activityInput.value = '';
    }
}

// Add event listener for the "Enter" key
const addActivityBtn = document.getElementById('addActivityBtn');
addActivityBtn.addEventListener('click', addActivity);