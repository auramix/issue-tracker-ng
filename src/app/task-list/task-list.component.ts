import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskList } from '../TaskList';
import { Task } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  list: TaskList = new TaskList();
 
  addTask() {
    this.list.tasks.push(new Task());
    console.log('Our todo list', this.list);
  }

  onKeyTaskEdit(value, i) {
    this.list.tasks[i].text = value;
  }
  onKeyTitleEdit(value) {
    this.list.title = value;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
