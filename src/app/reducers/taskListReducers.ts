import { TaskList } from '../TaskList';

export const addNewTaskList = (state) => {
  let newState = {...state.lists};
  newState['newList'] = new TaskList();
  return newState;
}

//* To update for listIDs
export const addNewTask = (state) => {
  return {...state};
}