import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    background: '#EDE7F6',
    padding: 10,
    marginBottom: 10
  }
});

class DataBox extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className='dataWidget' style={{ backgroundColor: this.props.background, color: this.props.color }}>
          <h3>{this.props.number}</h3>
          <h6>{this.props.text}</h6>
        </div>
      </Paper>
    )
  }
};

export default withStyles(styles)(DataBox);