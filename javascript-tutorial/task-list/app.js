// Sample array to store tasks
let tasks = ["Task 1", "Task 2", "Task 3"];

// Function to render tasks on the page
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById("newTaskInput");
    const newTask = newTaskInput.value.trim();

    if (newTask !== "") {
        tasks.push(newTask);
        newTaskInput.value = "";
        renderTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

const addTaskBtnEl = document.getElementById('addTaskBtn');
addTaskBtnEl.addEventListener('click', addTask);