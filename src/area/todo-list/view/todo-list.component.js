import React, { Component } from 'react';
import { TodoItem } from './todo-item/todo-item.component';
import type { Todo } from '../state/todo-list.types';

type Props = {
  loadTodoList: () => void,
  toggleIsCompleted: (id: number) => void,
  todoList: Todo[],
};

class TodoListComponent extends Component<Props> {
  componentDidMount() {
    this.props.loadTodoList();
  }
  render() {
    const { todoList, toggleIsCompleted } = this.props;
    return (
      <div>
        { todoList && todoList.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} toggleIsCompleted={toggleIsCompleted} />
          );
        })}
      </div>
    );
  }
};

export default TodoListComponent;