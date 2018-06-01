import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const Task = (props) => (
  <ListItem className="task">
    <Checkbox
      checked={props.taskText.checked}
      onClick={(e) => {
        props.handleOnToggle(props.taskText);
      }}
    />
    <ListItemText primary={`${props.count}. ${props.taskText.task}`} />
    <IconButton
      onClick={(e) => {
        props.handleDeleteTask(props.taskText);
      }}
      aria-label="Delete">
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

export default withStyles(styles)(Task);
