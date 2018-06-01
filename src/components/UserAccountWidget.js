import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Account from 'mdi-material-ui/Account';
import Heart from 'mdi-material-ui/Heart';
import Help from 'mdi-material-ui/Help';
import Settings from 'mdi-material-ui/Settings';

const styles = theme => ({
    card: {
        maxWidth: 345,
    }
});


class UserAccountWidget extends React.Component {
    render() {
        const { classes } = this.props;
      
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar src="images/user.jpg" className={classes.avatar} />
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Jane Smith"
                        subheader="Project Manager"
                        className="userAccountHeader"
                    />
                    <CardContent className="userAccountContent">
                        <List component="nav">
                            <ListItem button>
                                <ListItemIcon>
                                    <Account />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Settings />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Heart />
                                </ListItemIcon>
                                <ListItemText primary="Favourites" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Help />
                                </ListItemIcon>
                                <ListItemText primary="Help" />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(UserAccountWidget);