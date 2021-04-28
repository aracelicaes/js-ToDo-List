import { projects, counter, tasks } from './globals';

const settingLocalStorage = () => {
  localStorage.setItem('projectsList', JSON.stringify(projects));
  localStorage.setItem('tasksList', JSON.stringify(tasks));
};

const gettingLocalStorage = () => {
  const projectList = JSON.parse(window.localStorage.getItem('projectsList'));
  const taskList = JSON.parse(window.localStorage.getItem('tasksList'));
  if (projectList || projectList == null) {
    projectList.forEach(e => {
      projects.push(e);
    });
    const last = projects.length - 1;
    counter = projects[last].id + 1;
  }

  if (taskList || taskList == null) {
    taskList.forEach(e => {
      tasks.push(e);
    });
  }
};

export default [gettingLocalStorage, settingLocalStorage];