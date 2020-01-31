import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as Actions from '../actions/actions';
import * as TaskListReducers from '../reducers/taskListReducers';
import { TaskList } from '../TaskList';

export interface State {
  // listIDs: String[],
  lists: {

  },
  tasks: {

  },
  listOrder: any[]
}

// export interface TaskListsState {
//   id: []
// }

export const initialState = {
  // listIDs: [],
  lists: {
    someID: {tasks: ['1'], title: 'title'}
  },
  tasks: {
    '1': {text: 'a new stateful todo'}
  },
  listOrder: ['someID']
}

//* Selectors *//
const taskLists = (state: State) => state.lists;
const tasks = (state: State) => state.tasks;
const listOrder = (state: State) => state.listOrder;

export const selectAllTaskLists = createSelector(
  taskLists,
  tasks,
  listOrder,
  (taskListState, tasksState, listOrderState) => {
    // Create return array
    // For each taskListID in listOrder
      // For each taskID in taskLists[ID].tasks
        // Create task array
        // Push tasks[taskID] to task array
      
      // Push task list to return array
      let returnLists = [];

      for(let listID of listOrderState) {
        let taskList = [];
        let listTitle = taskListState[listID].title;

        for(let taskID of taskListState[listID].tasks) {
          taskList.push(tasksState[taskID]);
        }
        returnLists.push({tasks: taskList, title: listTitle});
      }
      return returnLists;
  }
)



//* Reducers *//

const _TaskListReducer = createReducer(initialState.lists,
  on(Actions.newTaskList, state => TaskListReducers.addNewTaskList(state))
)

const _TaskReducer = createReducer(initialState.tasks,
  on(Actions.newTask, state => TaskListReducers.addNewTask(state))
)

const _listOrderReducer = createReducer(initialState.listOrder,
  on(Actions.reorderLists, (state) => {return ['']})
)

export const reducers: ActionReducerMap<State> = {
  lists: _TaskListReducer,
  tasks: _TaskReducer,
  listOrder: _listOrderReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
