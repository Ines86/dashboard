import React from 'react';
import PropTypes from 'prop-types';
import PaperBox from './PaperBox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  }
});

class Tables extends React.Component {
  render() {
    const { classes } = this.props;
    let id = 0;
    function createData(title, author, pages, rating) {
      id += 1;
      return { id, title, author, pages, rating };
    }
    const data = [
      createData('Pride and Prejudice', "Jane Austen", 279, 4.25),
      createData('To Kill a Mockingbird ', "Harper Lee", 234, 4.26),
      createData('The Great Gatsby', "F. Scott Fitzgerald", 180, 3.9),
      createData('Wuthering Heights', "Emily Bronte", 464, 3.83),
      createData('Animal Farm ', " George Orwell", 122, 3.89),
    ];

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} lg={6}>
            <PaperBox
              title="Top Classics (Simple Table)"
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell numeric>Title</TableCell>
                    <TableCell numeric>Author</TableCell>
                    <TableCell numeric>Pages</TableCell>
                    <TableCell numeric>Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell numeric>{n.title}</TableCell>
                        <TableCell numeric>{n.author}</TableCell>
                        <TableCell numeric>{n.pages}</TableCell>
                        <TableCell numeric>{n.rating}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </PaperBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <PaperBox
              title="Top Classics (Customized Table)"
            >
              <Table className="customTable">
                <TableHead>
                  <TableRow>
                    <TableCell numeric>Title</TableCell>
                    <TableCell numeric>Author</TableCell>
                    <TableCell numeric>Pages</TableCell>
                    <TableCell numeric>Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => {
                    return (
                      <TableRow key={n.id}>
                        <TableCell numeric>{n.title}</TableCell>
                        <TableCell numeric>{n.author}</TableCell>
                        <TableCell numeric>{n.pages}</TableCell>
                        <TableCell numeric>{n.rating}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </PaperBox>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Tables);