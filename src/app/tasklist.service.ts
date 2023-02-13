import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  tasklist: Task[] = [];

  constructor() {
    this.loadState();
   }

  getTasks() {
    return this.tasklist;
  }

  getTask(id: string) {
    return this.tasklist.find(t => t.id === id)
  }

  addTask(task: Task) {
    this.tasklist.push(task)

    this.saveState()
  }

  updateTodo() {
    this.saveState();
  }

  deleteTask(id: string) {
    const index = this.tasklist.findIndex(t => t.id === id)
    if (index === -1) {
      return
    }

    this.tasklist.splice(index, 1)

    this.saveState()
  }

  saveState() {
    localStorage.setItem('tasks', JSON.stringify(this.tasklist));
  }

  loadState() {
    const tasksInStorage = JSON.parse(localStorage.getItem('tasks')|| '{}');

    if (!tasksInStorage) { 
      return;
    }

    this.tasklist.length = 0;
    this.tasklist.push(...tasksInStorage);
  }

}

export class Task {
    id: string;
    completed: boolean;
    constructor(public name: string) {
      this.completed = false
      this.id = uuidv4()
  }
}
