import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  list = [{text: 'first and only todo'}];
  title = 'todos';
 
  addTask() {
    this.list.push(new Task());
  }

  showTextEdit(id) {
    let div = document.getElementById(id);
    let input = div.getElementsByTagName('input')[0];
    let p = div.getElementsByTagName('p')[0];

    if(input.style.visibility == 'hidden') {
      p.style.visibility = 'hidden';
      input.style.visibility = 'visible';
    } else {
      p.style.visibility = 'visible';
      input.style.visibility = 'hidden';
    }
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
