import * as fromMyReducers from './index';
import { TaskList } from '../TaskList';

const mockState = {
  // listIDs: [],
  lists: {
    someID: {tasks: ['1'], title: 'title'}
  },
  tasks: {
    '1': {text: 'a new stateful todo'}
  },
  listOrder: ['someID']
}

/* Expect: [{
  tasks: [{text: 'a new stateful todo'}],
  title: 'title'
}] */

describe('My Selectors', () => {
  it('should construct task lists', () => {
    let selectorOutput = fromMyReducers.selectAllTaskLists(mockState);
    let {tasks, title} = selectorOutput[0];
    expect(selectorOutput).toBeTruthy();
    expect(tasks[0].text).toBe('a new stateful todo');
    expect(title).toBe('title');
  })
})