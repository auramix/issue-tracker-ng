import { createAction } from '@ngrx/store';

export const newTaskList = createAction('[TaskList Component] newTaskList');
export const newTask = createAction('[TaskList Component] newTask');
export const reorderLists = createAction('[BoardLists Component] reorderLists');