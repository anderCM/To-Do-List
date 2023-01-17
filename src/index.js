import './style.css';

const tasks = [
  {
    id: 1,
    description: 'Set up Webpack',
    completed: true,
    index: 0,
  },
  {
    id: 2,
    description: 'Create Server with express',
    completed: true,
    index: 1,
  },
  {
    id: 3,
    description: 'Add css to Index.js',
    completed: true,
    index: 2,
  },
  {
    id: 4,
    description: 'Build the project structure',
    completed: false,
    index: 3,
  },
  {
    id: 5,
    description: 'Deploy the project',
    completed: false,
    index: 4,
  },
];

const mainUl = document.getElementById('main-tasks');

tasks.map((task) => {
  const {
    id, description, completed,
  } = task;

  const mainLi = document.createElement('li');
  mainLi.classList.add('list-group-item', 'd-flex', 'justify-content-between');
  mainLi.id = id;

  const checkPContainer = document.createElement('div');
  checkPContainer.classList.add('d-flex', 'gap-3');

  const checkBox = document.createElement('input');
  checkBox.classList.add('form-check-input');
  checkBox.type = 'checkbox';
  checkBox.id = `check-${id}`;

  if (completed) checkBox.checked = true;

  const taskLabel = document.createElement('label');
  taskLabel.textContent = description;
  taskLabel.setAttribute('for', `check-${id}`);

  checkPContainer.append(checkBox, taskLabel);

  const icon = document.createElement('div');
  icon.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

  mainLi.append(checkPContainer, icon);
  return mainUl.append(mainLi);
});