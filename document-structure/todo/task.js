const tasksAdd = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

function processingTasksList() {
  if (taskInput.value === "") {
    return false;
  } else {
  tasksList.insertAdjacentHTML(
      "beforeEnd",
      `<div class="task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    );

    taskRemove();
    taskInput.value = "";
  }
}

function taskRemove() {
  let elementArr = document.querySelectorAll(".task__remove");
  let elementRemove = elementArr[elementArr.length-1];
    elementRemove.addEventListener("click", () => {
      elementRemove.closest(".task").remove();
    });
}

taskInput.addEventListener("keyup", (event) =>
  event.keyCode === 13 ? processingTasksList : false
);
tasksAdd.addEventListener("click", (e) => {e.preventDefault();
   processingTasksList()});
