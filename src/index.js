import Project from './project';
import Task from './task';
import projects from './globals';
import { settingLocalStorage, gettingLocalStorage } from './storage';

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



window.addEventListener('DOMContentLoaded', () => {
  gettingLocalStorage();
});