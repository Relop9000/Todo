let modal = document.getElementById("myModal");
let taskBtn = document.getElementById("taskButton");
let _todoTasks = document.getElementById("todo-tasks");
let _inProgressTasks = document.getElementById("inProgress-tasks");
let _doneTasks = document.getElementById("done-tasks");
let _blockedTasks = document.getElementById("blocked-tasks");
let submitBtn = document.getElementById("submit");
let _addTaskText = document.getElementById("addTaskText");

taskBtn.onclick = function () {
  modal.style.display = "block";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function createTaskELement(text) {
  let _task = `<div id="taskContainer" class="task">
      <label class="container">
        <div class="task_text">${text}</div>
        <input type="checkbox"  />
        <span class="checkmark"></span>
      </label>
      <button id="editBtn" class="edit_task">
        <img src="./icon/edit-icon.png" alt="edit-icon" />
      </button>
      <button id="deleteBtn" class="delete_task" onclick="clearBoards()">
        <img src="./icon/delete-icon.png" alt="delete-icon" />
      </button>
    </div>`;
  return _task;
}

let taskContainer = document.getElementById("taskContainer");

function renderTask(_task, taskStatus) {
  if (taskStatus === "todo") {
    _todoTasks.innerHTML = _task;
  }
  if (taskStatus === "inProgress") {
    _inProgressTasks.innerHTML = _task;
  }
  if (taskStatus === "done") {
    _doneTasks.innerHTML = _task;
  }
  if (taskStatus === "blocked") {
    _blockedTasks.innerHTML = _task;
  }
}

function addTask() {
  // inputess value avah
  let taskText = _addTaskText.value;
  let taskStatus = document.getElementById("statusSelection").value;
  // element create hihh
  let _task = createTaskELement(taskText);
  renderTask(_task, taskStatus);
}

submitBtn.onclick = addTask;

const boards = document.getElementsByClassName("board");

for (let i = 0; i < boards.length; i++) {
  let board = boards[i];
  let boardClasslist = board.classList;

  let isTodoboard = boardClasslist.contains("todo");

  if (isTodoboard) {
    console.log("To do board");
    console.log(i);
  }
}

const tasks = document.getElementsByClassName("task_container");

function clearBoards() {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerHTML = "";
  }
}
