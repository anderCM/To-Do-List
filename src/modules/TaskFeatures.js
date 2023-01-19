const mainUl = document.getElementById('main-tasks');

let tasks = [];
let taskToDelete = [];

const storeTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getTasks = () => {
  tasks = !localStorage.getItem('tasks') ? [] : JSON.parse(localStorage.getItem('tasks'));
  return tasks;
};

const getLastTask = () => {
  let id = 1;
  let index = 1;
  const getLocalData = getTasks();

  if (getLocalData?.length > 0) {
    const lastTask = getLocalData.slice(-1);
    id = lastTask[0].id + 1;
    index = lastTask[0].index + 1;
  }
  return { id, index };
};

export const AddTask = (description) => {
  const lastTask = getLastTask();
  const getLocalData = getTasks();
  const newTask = {
    id: lastTask.id,
    description,
    completed: false,
    index: lastTask.index,
  };
  getLocalData.push(newTask);
  storeTask(getLocalData);
  return newTask;
};

const SelectTask = (idTask) => {
  const mainLi = document.getElementById(idTask);
  const checkBox = document.getElementById(`check-${idTask}`);
  const addedInputTask = mainLi.querySelector('input[type=text]');
  checkBox.addEventListener('change', function select() {
    if (this.checked) {
      addedInputTask.classList.add('text-decoration-line-through');
      taskToDelete.push(idTask);
      return;
    }
    addedInputTask.classList.remove('text-decoration-line-through');
    taskToDelete = taskToDelete.filter(((task) => idTask !== task));
  });
};
const removeFromLocal = (tasks, taskId) => tasks.filter((task) => taskId !== task.id);

const updateIndex = (tasks) => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
};

export const editTask = (idTask) => {
  const idLi = document.getElementById(idTask);
  const addedInputTask = idLi.querySelector('input[type=text]');
  const iconContainer = document.getElementById(`icon-container-${idTask}`);
  idLi.classList.add('edit-task');
  addedInputTask.classList.add('edit-task');
  addedInputTask.disabled = false;
  addedInputTask.focus();
  iconContainer.innerHTML = `<i id="remove-task-${idTask}" class="remove-icon fa-solid fa-trash-can"></i>`;

  const removeIcon = document.getElementById(`remove-task-${idTask}`);
  if (removeIcon) {
    removeIcon.addEventListener('click', () => {
      let getLocalData = getTasks();
      getLocalData = removeFromLocal(getLocalData, idTask);
      document.getElementById(idTask).remove();

      updateIndex(getLocalData);
      storeTask(getLocalData);
    });
  }

  addedInputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      idLi.classList.remove('edit-task');
      addedInputTask.classList.remove('edit-task');
      addedInputTask.disabled = true;
      iconContainer.innerHTML = `<i id="icon-edit-${idTask}" class="edit-icon fa-solid fa-ellipsis-vertical"></i>`;

      const editIcon = document.getElementById(`icon-edit-${idTask}`);
      editIcon.addEventListener('click', () => {
        editTask(idTask);
      });
    }
  });
};

const DisplayTask = (task) => {
  const {
    id, description, completed,
  } = task;

  const mainLi = document.createElement('li');
  mainLi.classList.add(
    'list-group-item',
    'd-flex',
    'justify-content-between',
  );
  mainLi.id = id;

  const checkPContainer = document.createElement('div');
  checkPContainer.classList.add('d-flex', 'gap-3');

  const checkBox = document.createElement('input');
  checkBox.classList.add('form-check-input');
  checkBox.type = 'checkbox';
  checkBox.id = `check-${id}`;

  if (completed) checkBox.checked = true;

  const addedInputTask = document.createElement('input');
  addedInputTask.value = description;
  addedInputTask.setAttribute('type', 'text');
  addedInputTask.disabled = true;
  addedInputTask.classList.add('input-task-added');

  checkPContainer.append(checkBox, addedInputTask);

  const icon = document.createElement('div');
  icon.id = `icon-container-${id}`;
  icon.innerHTML = `<i id="icon-edit-${id}" class="edit-icon fa-solid fa-ellipsis-vertical"></i>`;

  mainLi.append(checkPContainer, icon);
  mainUl.append(mainLi);

  const editIcon = document.getElementById(`icon-edit-${id}`);
  editIcon.addEventListener('click', () => {
    editTask(id);
  });

  SelectTask(id);
};

export const ShowAllTasks = () => {
  const getLocalData = getTasks();
  getLocalData?.map((task) => DisplayTask(task));
};

export const DeleteAllSelected = () => {
  if (taskToDelete.length === 0) {
    alert('Please select at least 1 task first');
    return;
  }
  let getLocalData = getTasks();
  taskToDelete.map((taskId) => {
    getLocalData = removeFromLocal(getLocalData, taskId);
    return document.getElementById(taskId).remove();
  });
  updateIndex(getLocalData);
  storeTask(getLocalData);
};

export default DisplayTask;