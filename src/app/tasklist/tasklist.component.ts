import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task, TasklistService } from '../tasklist.service';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  tasklist: Task[];

  tasklistForm = this.formBuilder.group({
    task: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private tasklistService: TasklistService
  ) {}

  ngOnInit() {
    this.tasklist = this.tasklistService.getTasks();
  }

  onAddToList(): void {
    const task = new Task(this.tasklistForm.value.task);
    this.tasklistService.addTask(task);
  }

}
