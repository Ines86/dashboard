import React from 'react';
import Account from 'mdi-material-ui/Account';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Heart from 'mdi-material-ui/Heart';
import Help from 'mdi-material-ui/Help';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PaperBox from './PaperBox';
import Settings from 'mdi-material-ui/Settings';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  button: {
    margin: theme.spacing.unit,
  },

  customOne: {
    textTransform: 'uppercase',
    borderRadius: 20,
    fontSize: 16,
    padding: '8px 14px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
  },
  customTwo: {
    fontSize: 18,
    padding: '10px 16px',
    margin: "10px",
    backgroundColor: '#90caf9',
    color: "#000",
    border: "none",
    '&:hover': {
      backgroundColor: '#1565c0'
    },
    '&:active': {
      backgroundColor: '#1565c0'
    },
  },
  customThree: {
    border: "none",
    fontSize: 18,
    border: "none",
    backgroundColor: '#ff6f00',
    color: "#fff",
    margin: "20px",
    '&:hover': {
      backgroundColor: '#ffb300'
    },
    '&:active': {
      backgroundColor: '#ffb300'
    },
  },
  customFour: {
    fontSize: 18,
    border: '1px solid',
    backgroundColor: '#8e24aa',
    color: "#fff",
    border: "1px solid #fff"
  }
});

class Buttons extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Raised Buttons"
            >
              <Button variant="raised" className={classes.button}>
                Default
              </Button>
              <Button variant="raised" color="primary" className={classes.button}>
                Primary
              </Button>
              <Button variant="raised" color="secondary" className={classes.button}>
                Secondary
              </Button>
              <Button variant="raised" color="secondary" disabled className={classes.button}>
                Disabled
              </Button>
            </PaperBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Icon Buttons"
            >
              <IconButton color="secondary" className={classes.button} aria-label="Thumb up">
                <Icon>thumb_up</Icon>
              </IconButton>
              <IconButton color="primary" className={classes.button} aria-label="Stars">
                <Icon>stars</Icon>
              </IconButton>
              <IconButton color="secondary" className={classes.button} aria-label="Notifications active">
                <Icon>notifications_active</Icon>
              </IconButton>
              <IconButton color="primary" className={classes.button} aria-label="Check box">
                <Icon>check_box</Icon>
              </IconButton>
              <IconButton color="secondary" className={classes.button} aria-label="Home">
                <Icon>home</Icon>
              </IconButton>
              <IconButton color="primary" className={classes.button} aria-label="help">
                <Icon>help</Icon>
              </IconButton>
            </PaperBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Flat Buttons"
            >
              <Button className={classes.button}>Default</Button>
              <Button color="primary" className={classes.button}>
                Primary
              </Button>
              <Button color="secondary" className={classes.button}>
                Secondary
              </Button>
              <Button disabled className={classes.button}>
                Disabled
              </Button>
            </PaperBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Sizes"
            >
              <Button variant="raised" size="small" color="secondary" className={classes.button}>
                Small
              </Button>
              <Button variant="raised" size="medium" color="secondary" className={classes.button}>
                Medium
              </Button>
              <Button variant="raised" size="large" color="secondary" className={classes.button}>
                Large
              </Button>
            </PaperBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Floating Action Buttons"
            >
              <Button variant="fab" color="primary" aria-label="account" className={classes.button}>
                <Account />
              </Button>
              <Button variant="fab" color="secondary" aria-label="help" className={classes.button}>
                <Help>Help</Help>
              </Button>
              <Button variant="fab" disabled aria-label="settings" className={classes.button}>
                <Settings />
              </Button>
              <Button variant="fab" color="primary" aria-label="heart" className={classes.button}>
                <Heart />
              </Button>
            </PaperBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaperBox
              title="Customized Buttons"
            >
              <Button
                variant="raised"
                color="primary"
                disableRipple
                className={classes.customOne}
              >
                Button
              </Button>
              <Button
                variant="raised"
                color="secondary"
                className={classes.customTwo}
              >
                Read More
              </Button>
              <Button
                variant="raised"
                color="primary"
                disableRipple
                className={classes.customThree}
              >
                Click Me
              </Button>
              <Button
                variant="raised"
                color="primary"
                className={classes.customFour}
              >
                Button
              </Button>
            </PaperBox>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Buttons);