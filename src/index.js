import Project from './project';

function createProject() {
  const theName = document.getElementById('projectName').value;
  const newProject = new Project(theName);
  console.log(newProject);
  projects.push(newProject);
  settingLocalStorage();
}

const projectSubmitEvent = () => {
  const projectSubmit = document.getElementById('projectBtn');
  projectSubmit.addEventListener('click', (e) => {
    e.preventDefault;
    createProject();
  });
};

projectSubmitEvent();