import { createSelector } from 'reselect'
import type { Todo } from './todo-list.types';

const todoListSliceSelector = (state) => state.todoListSlice;

export const todoListSelector: Todo[]  = createSelector(
  todoListSliceSelector,
  (state) => state && state.todoList
);