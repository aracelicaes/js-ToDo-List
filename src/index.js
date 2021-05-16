import { projects, tasks } from './globals';
import { settingLocalStorage, gettingLocalStorage } from './storage';
import Project from './project';
// import Task from './task';

// ALL PROJECT RELATED
function createProject() {
  const theName = document.getElementById('projectName').value;
  const newProject = new Project(theName);
  console.log(newProject);
  projects.push(newProject);
  settingLocalStorage();
  return newProject;
}

function displayProject(project) {
  const theProject = document.querySelector('.projectName');
  theProject.innerText = project.name;
  theProject.setAttribute('id', project.id);
  console.log(theProject.id);
  console.log(projects);
  const p = theProject.id;
  const parsedP = parseInt(p, 10);
  // projects.forEach((project) => {
  //   if (project.id == parsedP) {
  //     const projectDisplayContainer = document.querySelector(".projectDisplay");
  //     const newTaskBtn = document.createElement('button');
  //     newTaskBtn.setAttribute('id', project.id);
  //     newTaskBtn.className = 'newTask';
  //     newTaskBtn.innerText = 'New Task'
  //     projectDisplayContainer.appendChild(newTaskBtn);
  //   }
  // })
}

const projectSubmitEvent = () => {
  const projectSubmit = document.getElementById('projectBtn');
  projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const project = createProject();
    displayProject(project);
  });
};

projectSubmitEvent();

