import './style.css';

const addTask = document.querySelector('#add_task');
const toDoList = document.querySelector('#to_do_list');
const inProgressList = document.querySelector('#in_progress_list');
const doneList = document.querySelector('#done_list');
const moveTaskProg = document.querySelector('#move_task_progress');
const moveTaskDone = document.querySelector('#move_task_done');
let selectedTask;

addTask.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const description = event.target.description.value;

  const task = {
    title: title,
    description: description,
  };

  const taskElement = document.createElement('div');
  taskElement.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p>`;
  taskElement.classList.add('task', 'spacing');

  toDoList.appendChild(taskElement);

  taskElement.addEventListener('click', () => {
    if (selectedTask) selectedTask.classList.remove('selected');
    selectedTask = taskElement;
    moveTaskProg.disabled = false;
    moveTaskDone.disabled = false;
    taskElement.classList.add('selected');
  });

  event.target.title.value = '';
  event.target.description.value = '';
});

moveTaskProg.addEventListener('click', () => {
  if (!selectedTask) return;

  inProgressList.appendChild(selectedTask);
  selectedTask.classList.remove('selected');
  moveTaskProg.disabled = true;
  selectedTask = null;
});

moveTaskDone.addEventListener('click', () => {
  if (!selectedTask) return;

  doneList.appendChild(selectedTask);
  selectedTask.classList.remove('selected');
  moveTaskDone.disabled = true;
  selectedTask = null;
});
