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

  ngOnInit() {
    this.tasklist = this.tasklistService.getTasks();
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
