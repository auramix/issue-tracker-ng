import { Component } from '@angular/core';
import { TaskList } from './TaskList';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskLists, event.previousIndex, event.currentIndex);
    console.log(this.taskLists);
  }
}
