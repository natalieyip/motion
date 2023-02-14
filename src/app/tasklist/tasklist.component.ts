import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TasklistService } from '../tasklist.service';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasklist: Task[];
  hasErrors: boolean = false; 

  constructor(
    private tasklistService: TasklistService
  ) {}

  ngOnInit(): void {
    this.tasklist = this.tasklistService.getTasks();
  }

  onKeyDown(event, taskId): void {
    if (event.code === "Space") {
      this.tasklistService.deleteTask(taskId);
    }
  }

  toggleCompleted(task: Task): void {
    Object.assign(task, {...task, completed: !task.completed});
    this.tasklistService.saveState();
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      this.hasErrors = true;
      return; 
    }
    const task = new Task(form.value.task);
    this.tasklistService.addTask(task);
    form.reset();
  }

  onDelete(taskId: string): void {
    this.tasklistService.deleteTask(taskId);
  }

}
