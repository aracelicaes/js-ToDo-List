import Project from './project';
import Task from './task';
import projects from './globals';
import { settingLocalStorage, gettingLocalStorage } from './storage';


// ALL PROJECT RELATED
function createProject() {
  const theName= document.getElementById("projectName").value;
  const newProject = new Project(theName);
  console.log(newProject);
  projects.push(newProject);
  settingLocalStorage();
  return newProject;
}

function displayProject(project) {
  const theProject = document.querySelector(".projectName");
  theProject.innerText = project.name;
  theProject.setAttribute("id", project.id);
  console.log(theProject.id);
  console.log(projects);
  projects.forEach((project) => {
    if (project.id === theProject.id) {
      const projectDisplayContainer = document.querySelector(".projectDisplay");
      const newTaskBtn = document.createElement('button');
      newTaskBtn.setAttribute('id', project.id);
      newTaskBtn.className = 'newTask';
      newTaskBtn.innerText = 'New Task'
      projectDisplayContainer.appendChild(newTaskBtn);
    }
  });
}

// function addTaskBtn(project) {
//   displayProject(project);
// }

const projectSubmitEvent = () => {
  const projectSubmit = document.getElementById("projectBtn");
  projectSubmit.addEventListener('click', (e) => {
    e.preventDefault;
    // createProject();
    const project = createProject();
    displayProject(project);
  });
};

projectSubmitEvent();

// ALL TASK RELATED

const newTaskBtnEvent = () => {
  projects.forEach((project) => {
    const newTaskBtn = document.getElementById(project.id);
    if (project.id == newTaskBtn.id) {
    console.log(newTaskBtn);
    newTaskBtn.addEventListener('click', (e) => {
      displayTaskForm(project.id);
    });
    }
  });
}

function displayTaskForm(id) {
  const taskForm = document.querySelector(".theTaskForm");
  const taskName = document.querySelector(".taskName");
  taskName.setAttribute('id', id);
  taskForm.classList.toggle("hidden");
  console.log(taskForm);
}

newTaskBtnEvent();


function createTask() {
  const taskStatus = document.querySelector(".taskStatus").checked;
  const taskName = document.querySelector(".taskName").value;
  taskName.getAttribute("id");
  console.log(taskName);
  const taskDescription = document.querySelector(".taskDescription").value;
  const taskDate = document.querySelector(".taskDate").value;
  const taskPriority = document.querySelector(".taskPriority").selectedOptions[0].value;
  
  const newTask = new Task(taskStatus, taskName, taskDescription, taskDate, taskPriority);
  tasks.push(newTask);
  settingLocalStorage();
  console.log(newTask);
}

const taskSubmitEvent = () => {
  const taskSubmit = document.getElementById("taskBtn");
  taskSubmit.addEventListener('click', (e) => {
    e.preventDefault;
    createTask();
  });
};

taskSubmitEvent();

window.addEventListener('DOMContentLoaded', () => {
  gettingLocalStorage();
});