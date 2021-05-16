import { projects, tasks } from './globals';

export const settingLocalStorage = () => {
  localStorage.setItem('projectsList', JSON.stringify(projects));
  localStorage.setItem('tasksList', JSON.stringify(tasks));
};

export const gettingLocalStorage = () => {
  const projectList = JSON.parse(window.localStorage.getItem('projectsList'));
  const taskList = JSON.parse(window.localStorage.getItem('tasksList'));
  if (projectList || projectList == null) {
    projectList.forEach((e) => {
      projects.push(e);
    });
  }

  if (taskList || taskList == null) {
    taskList.forEach((e) => {
      tasks.push(e);
    });
  }
};