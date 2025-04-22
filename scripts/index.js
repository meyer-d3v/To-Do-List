function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('list');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskInput.value;
  taskList.appendChild(listItem);
  taskInput.value = '';
}