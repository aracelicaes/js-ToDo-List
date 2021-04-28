import counter from './globals';

export default class Project {
  constructor(name) {
    this.name = name;
    this.id = counter;
    this.task = [];
    counter += 1;
  }

  // addTasks(){
  //   tasks.push(this.task);
  //   settingLocalStorage();
  // }
}