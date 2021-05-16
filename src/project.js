import settingLocalStorage from './storage';

const { v4: uuidv4 } = require('uuid');

export default class Project {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
    this.tasks = [];
    this.newTaskBtn = document.querySelector('.newTask');
    this.newTaskBtn.setAttribute('id', this.id);
    const newTaskId = this.newTaskBtn.id;
    const parsedTaskId = parseInt(newTaskId, 10);
    if (parsedTaskId !== this.id) {
      this.newTaskBtn.style.display = 'none';
    } else {
      this.newTaskBtn.style.display = 'block';
    }
  }

  addTask(task) {
    this.tasks.push(task);
    settingLocalStorage();
  }

  deleteTask(task) {
    const filteredTask = this.tasks.filter((e) => e.name === task.name);
    const idxOfTask = indexOf(filteredTask);
    this.tasks.splice(idxOfTask, 1);
    settingLocalStorage();
  }
}