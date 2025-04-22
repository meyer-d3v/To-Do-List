function getTasks() {
    // This function retrieves the list of tasks from the server and displays them in the task list
    let endpoint = "https://to-do-api-o7t8.onrender.com/todos/";
    let request = new XMLHttpRequest();
    request.open("GET", endpoint, true);

    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const tasks = JSON.parse(request.responseText);
                const taskList = document.getElementById('list');
                taskList.innerHTML = ''; // Clear the existing list

                tasks.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task.item; // Assuming the task object has an 'item' property
                    taskList.appendChild(listItem);
                });
            } else {
                console.error("Error retrieving tasks:", request.statusText);
            }
        }
    }
}


function addTask() {

    event.preventDefault();

    // This function adds a new task to the task list
    // It retrieves the value from the input field, creates a new list item, and appends it to the task list

    // It also clears the input field after adding the task

    // and checks if the input is empty, alerting the user if it is

    let endpoint = "https://to-do-api-o7t8.onrender.com/";
    let request = new XMLHttpRequest();
    request.open("POST", endpoint + "todos/" + taskInput.value, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 201) {
                console.log("Task added successfully!");
            } else {
                console.error("Error adding task:", request.statusText);
            }
        }
    };
    request.send(JSON.stringify({ task: taskInput.value }));

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