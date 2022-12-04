const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
// Hago la llamada a mi input
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Anulo el envío del formulario mediante el evento
  if (itTask.value !== "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTasks();
  }
});

function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),
    title: value,
    completed: false,
  };

  tasks.unshift(newTask);
}

function renderTasks() {
  const html = tasks.map((task) => {
    return `
        <div class="task">
        <div class="completed">${
          task.completed
            ? "<span class='done'>¡Conseguido!</span>"
            : `<button class="start-button" data-id="${task.id}">Comenzar</button></div>`
        }
            <div class="title">${task.title}</div>
        </div>`;
  });
}
