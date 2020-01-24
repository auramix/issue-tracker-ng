import { Component, OnInit } from '@angular/core';
import { TaskList } from '../TaskList';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
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
