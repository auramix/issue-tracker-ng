import { TaskList } from '../TaskList';

export const addNewTaskList(state) {
  let newState = {...state};
  newState.lists['newList'] = new TaskList();
}