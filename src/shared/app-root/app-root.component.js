import React from 'react';
import TodoList from '../../area/todo-list/view/todo-list.container';
import Header from './header/header.component';

const AppRoot = () => {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};

export default AppRoot;