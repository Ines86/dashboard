import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AddTask extends React.Component {
  state = {
    error: undefined
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAddTask(task);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.task.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="todoErrorMessage">{this.state.error}</p>}
        <form id="add-task" onSubmit={this.handleAddTask}>
          <Input type="text" name="task" />
          <Button
            variant="raised"
            size="small"
            color="primary"
            type="submit"
            form="add-task"
            className={this.props.classes.button}
          >Add Task
          </Button>
        </form>
        <Button
          variant="raised"
          size="small"
          color="primary"
          className={this.props.classes.button}
          onClick={this.props.handleDeleteTasks}
        >
          Delete All
    </Button>
      </div>
    );
  }
}

export default withStyles(styles)(AddTask);
