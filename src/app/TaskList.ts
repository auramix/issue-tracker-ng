import { Task } from './Task';

export class TaskList {
  title: string =  'New task list';
  tasks: Task[] = [new Task()];
}