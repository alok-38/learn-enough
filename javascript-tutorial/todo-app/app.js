class TodoApp {
    constructor() {
      this.tasks = [];
      this.taskInput = document.getElementById('taskInput');
      this.addTaskBtn = document.getElementById('addTaskBtn');
      this.taskList = document.getElementById('taskList');
  
      this.addTaskBtn.addEventListener('click', () => this.addTask());
    }
  
    addTask() {
      const taskText = this.taskInput.value.trim();
  
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
  
        this.tasks.push(taskText);
        this.taskList.appendChild(taskItem);
  
        this.taskInput.value = '';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
  