<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .container {
      width: 400px;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      color: #333;
    }

    input[type="text"] {
      width: 70%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    button {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background-color: #45a049;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      padding: 10px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
    }

    li:last-child {
      border-bottom: none;
    }

    input[type="checkbox"] {
      margin-right: 10px;
    }

    span {
      flex-grow: 1;
      font-size: 18px;
    }

    label {
      font-size: 16px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Task Manager</h1>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>
    <br><br>
    <label><input type="checkbox" id="showCompleted" onchange="filterTasks()"> Show Completed Tasks</label>
    <ul id="taskList">
      <!-- Tasks will be dynamically added here -->
    </ul>
  </div>

  <script>
    let tasks = [];

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
      }
    }

    function toggleTaskCompletion(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function filterTasks() {
      const showCompleted = document.getElementById('showCompleted').checked;
      renderTasks(showCompleted);
    }

    function renderTasks(showCompleted = true) {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        if (!showCompleted && task.completed) return;
        const taskItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTaskCompletion(index);
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        if (task.completed) {
          taskText.style.textDecoration = 'line-through';
        }
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);
      });
    }
  </script>
</body>
</html>
