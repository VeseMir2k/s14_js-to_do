const openModalBtn = document.querySelector(".open-modal-btn");
const exitModalBtn = document.querySelector(".exit-modal-btn");
const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskInput = document.querySelector(".add-task-modal input");

const blurModal = document.querySelector(".blur-modal");
const addTaskModal = document.querySelector(".add-task-modal");

const openModal = () => {
  blurModal.style.zIndex = 1;
  addTaskModal.style.display = "flex";
};

const exitModal = () => {
  blurModal.style.zIndex = -1;
  addTaskModal.style.display = "none";
};

openModalBtn.addEventListener("click", openModal);
exitModalBtn.addEventListener("click", exitModal);
