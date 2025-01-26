document.addEventListener("DOMContentLoaded", function () {
  // Select elements from the DOM
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  const taskText = taskInput.value.trim();

  // Function that adds a task from the input
  function addTask(taskText, save = true) {
    // Alerts the user if the input is empty to enter one.
    if (taskText === "") {
      alert("Please Enter a Task");
      return;
    }

    // Creates a list item(Task)
    const li = document.createElement("li");
    li.textContent = taskText;

    // Creates button to remove a task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Adds an event incase of removing the task
    removeBtn.addEventListener("click", function () {
      li.remove();
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const index = storedTasks.indexOf(taskText);
      if (index > -1) {
        storedTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
    });

    li.appendChild(removeBtn);

    // Appends the created task to the list
    taskList.append(li);
    taskInput.value = "";

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Adds an event to the add button to add the task to the list
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    addTask(taskText);
  });

  // Adds an enter key functionality for adding an event
  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText);
    }
  });

  // Load tasks from the local storage
  function loadTasks() {
    if (localStorage.getItem("tasks")) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }
  }

  loadTasks();
});
