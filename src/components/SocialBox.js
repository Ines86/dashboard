import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class SocialBox extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className='socialWidget'>
          <div className='socialTop' style={{ backgroundColor: this.props.color }}>{this.props.children}</div>
          <div><h5>{this.props.leftText}</h5> | <h5>{this.props.rightText}</h5></div>
        </div>
      </Paper>
    )
  }
};

export default withStyles(styles)(SocialBox);