import { connect } from 'react-redux';
import { todoListSelector } from '../state/todo-list.selectors'; 
import TodoListComponent from './todo-list.component';
import loadTodoListAction from '../state/actions/load-todo-list.action';
import toggleIsCompletedAction from '../state/actions/toggle-is-completed.action';

function mapStateToProps(state) {
  return {
    todoList: todoListSelector(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTodoList: () => loadTodoListAction(dispatch),
    toggleIsCompleted: (id: number) => dispatch(toggleIsCompletedAction(id)),
  }
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);

export default TodoList;