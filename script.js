document.addEventListener("DOMContentLoaded", function () {
  // Select elements from the DOM
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function that adds a task from the input
  function addTask() {
    const taskText = taskInput.value.trim();

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
    removeBtn.classList.add("remove-btn");

    // Adds an event incase of removing the task
    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    li.append(removeBtn);

    // Appends the created task to the list
    taskList.append(li);
    taskInput.value = "";
  }

  // Adds an event to the add button to add the task to the list
  addButton.addEventListener("click", addTask);

  // Adds an enter key functionality for adding an event
  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask();
    }
  });
});
