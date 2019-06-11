import { createStore, combineReducers } from 'redux';
import todoListReducer from '../area/todo-list/state/todo-list.reducer';

const rootReducer = combineReducers({
  todoListSlice: todoListReducer,
})

export default() => createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);