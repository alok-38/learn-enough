// Sample data to initialize tasks
let tasks = ["Learn JavaScript", "Build a web app", "Master array methods"];

// Function to render tasks on the page
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.addEventListener("click", () => deleteTask(index));
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById("newTask");
    const newTask = newTaskInput.value.trim();

    if (newTask !== "") {
        tasks.push(newTask);
        newTaskInput.value = "";
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to filter tasks
function filterTasks() {
    const filterInput = document.getElementById("filter");
    const filterValue = filterInput.value.trim().toLowerCase();

    const filteredTasks = tasks.filter(task => task.toLowerCase().includes(filterValue));
    tasks = filteredTasks;
    renderTasks();
}

const addTaskBtnEl = document.getElementById('addTaskBtn');
addTaskBtnEl.addEventListener('click', addTask);