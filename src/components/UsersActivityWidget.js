import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    card: {
        maxWidth: 345,
    }
});


class UsersActivityWidget extends React.Component {
    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Users Activity"
                        subheader="Click to accept"
                        className="usersActivityHeader"
                    />
                    <CardContent className="usersActivityContent">
                        <List>
                            {[0, 1, 2, 3].map(value => (
                                <ListItem key={value} dense button className={classes.listItem}>
                                    <Avatar alt="user avatar" src="/images/user.jpg" />
                                    <ListItemText primary={`Jane Doe`} secondary="Added comment" />
                                    <ListItemSecondaryAction>
                                        <Checkbox
                                            onChange={this.handleToggle(value)}
                                            checked={this.state.checked.indexOf(value) !== -1}
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(UsersActivityWidget);