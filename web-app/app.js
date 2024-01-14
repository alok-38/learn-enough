const fetchData = async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayData = (data) => {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        dataList.appendChild(listItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});