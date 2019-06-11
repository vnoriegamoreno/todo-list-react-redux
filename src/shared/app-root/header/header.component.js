import React from 'react';
import { withStyles } from '@material-ui/styles';

type Props = {
  classes: Object,
};

const Header = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <h1>TodoList</h1>
    </div>
  );
};

const styles = ({
  container: {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  },
});

export default withStyles(styles)(Header);