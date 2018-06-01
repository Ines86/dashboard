import React from 'react';
import Task from './Task';
import List from '@material-ui/core/List';

class Tasks extends React.Component {
  render() {
    const filteredTasks = this.props.tasks.filter((task) => {
      switch (this.props.currentStatus) {
        case 'ACTIVE_TASKS':
          return !task.completed;
        case 'COMPLETED_TASKS':
          return task.completed;
        case 'ALL':
          return task;
        default:
          return true;
      }
    })
    return (
      <div>
        {this.props.tasks.length === 0 && <p className="todoMessage">Add a task.</p>}
        <List>
          {
            filteredTasks.map((task, index) => (
              //props.tasks.map((task, index) => (
              <Task
                key={index + 1}
                taskText={task}
                count={index + 1}
                handleDeleteTask={this.props.handleDeleteTask}
                handleOnToggle={this.props.handleOnToggle}
              />
            ))
          }
        </List>
      </div>
    )
  }
}

export default Tasks;

