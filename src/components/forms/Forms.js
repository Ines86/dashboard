import React from 'react';
import Grid from '@material-ui/core/Grid';
import PaperBox from '../PaperBox';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Forms extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Simple Form"
            >
              <FormOne />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Wizard"
            >
              <FormTwo />
            </PaperBox>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Forms);