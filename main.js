const openModalBtn = document.querySelector(".open-modal-btn");
const exitModalBtn = document.querySelector(".exit-modal-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskNameInput = document.querySelector(".task-name-input");

const blurModal = document.querySelector(".blur-modal");
const addTaskModal = document.querySelector(".add-task-modal");

const tasksUl = document.querySelector("main ul");

const tasks = [
  {
    name: "Zadanie 1",
  },
  {
    name: "Zadanie 2",
  },
  {
    name: "Zadanie 3",
  },
];

const openModal = () => {
  blurModal.style.zIndex = 1;
  addTaskModal.style.display = "flex";
  taskNameInput.value = "";
  document.querySelector(".error-name").textContent = "";
};

const exitModal = () => {
  blurModal.style.zIndex = -1;
  addTaskModal.style.display = "none";
};

const addTask = () => {
  event.preventDefault();
  name = taskNameInput.value;
  if (name.length >= 3) {
    tasks.push({ name: name });
    showTasks();
    exitModal();
  } else {
    document.querySelector(".error-name").textContent = "Wpisz więcej znaków!";
  }
};

const showTasks = () => {
  tasksUl.textContent = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task";
    li.textContent = `> ${task.name}`;

    const btn = document.createElement("button");
    btn.className = "delete-task-btn";

    const i = document.createElement("i");
    i.className = "fas fa-times";
    btn.appendChild(i);

    li.appendChild(btn);
    tasksUl.appendChild(li);
  });
};

showTasks();

openModalBtn.addEventListener("click", openModal);
exitModalBtn.addEventListener("click", exitModal);
addTaskBtn.addEventListener("click", addTask);
