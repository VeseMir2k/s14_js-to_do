const openModalBtn = document.querySelector(".open-modal-btn");
const exitModalBtn = document.querySelector(".exit-modal-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskNameInput = document.querySelector(".task-name-input");

const blurModal = document.querySelector(".blur-modal");
const addTaskModal = document.querySelector(".add-task-modal");

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
    exitModal();
  } else {
    document.querySelector(".error-name").textContent = "Wpisz więcej znaków!";
  }
};

openModalBtn.addEventListener("click", openModal);
exitModalBtn.addEventListener("click", exitModal);
addTaskBtn.addEventListener("click", addTask);
