import React from 'react';
import Button from '@material-ui/core/Button';

const TodoFooter = (props) => (
  <div id="todo-footer">
    <span>Left: {props.count}</span>
    <Button
      variant="raised"
      size="small"
      color="secondary"
      onClick={props.activeTasks}
    >
      Active
      </Button>
    <Button
      variant="raised"
      size="small"
      color="primary"
      onClick={props.completedTasks}
    >
      Completed
      </Button>
    <Button
      variant="raised"
      size="small"
      color="secondary"
      onClick={props.allTasks}
    >
      All
      </Button>
  </div>
);

export default TodoFooter;