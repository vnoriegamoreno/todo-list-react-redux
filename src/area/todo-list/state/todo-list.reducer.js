import type { Todo } from './todo-list.types';

type TodoListSlice = {
  todoList: Todo[],
}

const initialState: TodoListSlice = {
  todoList: [],
};

const todoListReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
      };
    case 'LOAD_TODO_LIST':
      return {
        ...state,
        todoList: action.payload,
      };
    case 'TOGGLE_IS_COMPLETED':
      const { todoList } = state;
      const index = todoList.findIndex((todo) => todo.id === action.payload);
      state.todoList[index].completed = !state.todoList[index].completed;
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default todoListReducer;