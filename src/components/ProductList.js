import React from 'react';
import Cart from 'mdi-material-ui/Cart';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    card: {
        maxWidth: 345,
    }
};

class ProductList extends React.Component {
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
                        title="Product List"
                        subheader="New Items"
                        className="productListHeader"
                    />
                    <CardContent className="productListContent">
                        <List>
                            {[0, 1, 2].map(value => (
                                <ListItem key={value} dense button className={classes.listItem}>
                                    <Cart />
                                    <ListItemText primary={`Item ${value + 1}`} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                                    <ListItemText primary="EUR 250" />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </div>
        )
    }
};

export default withStyles(styles)(ProductList);