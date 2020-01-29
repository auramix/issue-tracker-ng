import { Component, OnInit } from '@angular/core';
import { TaskList } from '../TaskList';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-board-lists',
  templateUrl: './board-lists.component.html',
  styleUrls: ['./board-lists.component.css']
})
export class BoardListsComponent {
  title = 'issue-tracker';
  taskLists: TaskList[];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskLists = this.tasksService.getAllTasks()
  }

  addTaskList() {
    this.taskLists.push(new TaskList());
  }

  onKeyTitleEdit(value, i) {
    this.taskLists[i].title = value;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskLists, event.previousIndex, event.currentIndex);
    console.log(this.taskLists);
  }
}
