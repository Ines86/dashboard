import React from 'react';
import AddTask from './AddTask';
import Card from '@material-ui/core/Card';
import TodoHeader from './TodoHeader';
import Tasks from './Tasks';
import TodoFooter from './TodoFooter';
import update from 'react-addons-update';

class Todo extends React.Component {
  state = {
    tasks: [],
    currentStatus: "ALL"
  };

  handleDeleteTasks = () => {
    this.setState(() => ({ tasks: [] }));
  };

  handleDeleteTask = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task)
    }));
  };

  handleAddTask = (task) => {
    if (!task) {
      return 'Enter valid value to add item';
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists';
    }
    let newTask = {
      task: task,
      completed: false,
      checked: false
    }
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask)
    }));
  };

  handleOnToggle = (task) => {
    let taskIndex = this.state.tasks.findIndex((todo) => todo.task == task.task);
    const currentState = this.state.tasks[taskIndex].completed;
    const currentCheckedState = this.state.tasks[taskIndex].checked;
    let nextState = update(this.state.tasks, {
      [taskIndex]: {
        completed: { $set: !currentState },
        checked: { $set: !currentCheckedState }
      }
    });
    this.setState({ tasks: nextState })
  };

  handleActiveTasks = () => {
    this.setState(() => ({ currentStatus: "ACTIVE_TASKS" }));
  };

  handleCompletedTasks = () => {
    this.setState(() => ({ currentStatus: "COMPLETED_TASKS" }));
  };

  handleAllTasks = () => {
    this.setState(() => ({ currentStatus: "ALL" }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({ tasks }));
      }
    } catch (e) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
    }
  }

  render() {
    const activeTasksCount = this.state.tasks.reduce((accum, task) => {
      return task.completed ? accum : accum + 1;
    }, 0);

    return (
      <Card>
        <div className="todoContainer">
          <TodoHeader
            title="Todo"
          />
          <div className="todoContent">
            <Tasks
              tasks={this.state.tasks}
              handleDeleteTask={this.handleDeleteTask}
              handleOnToggle={this.handleOnToggle}
              currentStatus={this.state.currentStatus}
            />
            <AddTask
              handleAddTask={this.handleAddTask}
              handleDeleteTasks={this.handleDeleteTasks}
            />
          </div>
          <TodoFooter
            count={activeTasksCount}
            activeTasks={this.handleActiveTasks}
            completedTasks={this.handleCompletedTasks}
            allTasks={this.handleAllTasks}
          />
        </div>
      </Card>
    )
  }
};

export default Todo;