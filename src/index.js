import Project from './project';
import projects from './globals';
import { settingLocalStorage, gettingLocalStorage } from './storage';

function createProject() {
  const theName = document.getElementById('projectName').value;
  const newProject = new Project(theName);
  // console.log(newProject);
  projects.push(newProject);
  settingLocalStorage();
}

const projectSubmitEvent = () => {
  const projectSubmit = document.getElementById('projectBtn');
  projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    createProject();
  });
};

projectSubmitEvent();

window.addEventListener('DOMContentLoaded', () => {
  gettingLocalStorage();
});