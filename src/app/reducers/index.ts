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
import { newTaskList } from '../actions/actions';
import { addNewTaskList } from '../reducers/taskListReducer';

export interface State {
  // listIDs: String[],
  lists: {

  }
  // tasks: {

  // }
}

export const initialState = {
  // listIDs: [],
  lists: {

  }
  // tasks: {

  // }
}

const _TaskListReducer = createReducer(initialState,
  on(newTaskList, state => addNewTaskList(state))
)

export const reducers: ActionReducerMap<State> = {
  lists: _TaskListReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
