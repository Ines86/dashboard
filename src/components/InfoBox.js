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

class InfoBox extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <div className='infoWidget'>
                    <div style={{ backgroundColor: this.props.background }} className="infoWidgetIcon">{this.props.children}</div>
                    <div className="infoWidgetText">
                        <h5>{this.props.text}</h5>
                        <h3>{this.props.number}</h3>
                    </div>
                </div>
            </Paper>
        )
    }
};

export default withStyles(styles)(InfoBox);