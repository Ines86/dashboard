import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PaperBox from './PaperBox';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

class CustomGrid extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <PaperBox
                            title="Full-width Grid"
                        >
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>xs=12</Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Paper className={classes.paper}>xs=12 sm=4</Paper>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Paper className={classes.paper}>xs=12 sm=4</Paper>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Paper className={classes.paper}>xs=12 sm=4</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Paper className={classes.paper}>xs=6 sm=2</Paper>
                                </Grid>
                            </Grid>
                        </PaperBox>
                    </Grid>
                    <Grid item xs={12}>
                        <PaperBox
                            title="CSS Grid"
                        >
                            <div className={classes.container}>
                                <div style={{ gridColumnEnd: 'span 10' }}>
                                    <Paper className={classes.paper}>xs=10</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 2' }}>
                                    <Paper className={classes.paper}>xs=2</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 3' }}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 3' }}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 3' }}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 3' }}>
                                    <Paper className={classes.paper}>xs=3</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 6' }}>
                                    <Paper className={classes.paper}>xs=6</Paper>
                                </div>
                                <div style={{ gridColumnEnd: 'span 6' }}>
                                    <Paper className={classes.paper}>xs=6</Paper>
                                </div>
                            </div>
                        </PaperBox>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(CustomGrid);