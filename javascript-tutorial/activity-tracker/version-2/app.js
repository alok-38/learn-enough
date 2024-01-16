const addActivity = () => {
    const activityInput = document.getElementById('activity');
    const activityList = document.getElementById('activity-list');

    if (activityInput.value.trim() === '') {
        alert('Please enter a valid activity');
        return;
    }

    const activityItem = document.createElement('li');
    activityItem.className = 'activity-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      if (!this.checked) {
        activityList.removeChild(activityItem);
      }
    });

    const activityText = document.createElement('span');
    activityText.textContent = activityInput.value;

    activityItem.appendChild(checkbox);
    activityItem.appendChild(activityText);

    activityList.appendChild(activityItem);
    activityInput.value = '';

}

const addActivityBtn = document.getElementById('addActivityBtn');
addActivityBtn.addEventListener('click', addActivity);