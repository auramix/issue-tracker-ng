import { Injectable } from '@angular/core';
import { allTasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  ngOnInit() {
  }

  getAllTasks() {
    return allTasks;
  }
}
