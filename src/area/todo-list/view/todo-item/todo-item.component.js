import React, { Component } from 'react';
import type { Todo } from '../../state/todo-list.types';
import { withStyles } from '@material-ui/styles';

type Props = {
  todo: Todo,
  toggleIsCompleted: (id: number) => void,
  classes: Object,
};

type State = {
  todo: Todo,
};

class TodoItemComp extends Component<Props, State> {
  state = {
    todo: {},
  };
  componentDidMount() {
    if (this.props.todo) {
      this.setState({
        todo: this.props.todo,
      });
    }
  }
  handldeOnChange = (id: number) => {
    this.props.toggleIsCompleted(id);
    this.setState((prevState) => ({
      ...prevState,
      completed: !prevState.completed
    }));
  }
  render() {
    const { id, title, completed } = this.state.todo;
    const { todo, classes } = this.props;
    const checked = Boolean(completed);
    return (
      <div>
        <input type="checkbox" checked={checked} onChange={() => this.handldeOnChange(id)} />
        <span className={checked ? classes.isCompleted : {}}>
          {todo && title}
        </span>
        <button onClick={() => {}}>x</button>
      </div>
    );
  }
}

const styles = ({
  isCompleted: {
    textDecorationLine: 'line-through', 
  },
});

export const TodoItem = withStyles(styles)(TodoItemComp);