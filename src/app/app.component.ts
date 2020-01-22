import { Component } from '@angular/core';
import { TaskList } from './TaskList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue-tracker';
  taskLists: TaskList[] = [];

  constructor() {}

  addTaskList() {
    this.taskLists.push(new TaskList());
  }
}
