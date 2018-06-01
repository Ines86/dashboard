import React from 'react';
import PaperBox from './PaperBox';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  circle: {
    listStyleType: 'circle',
  },
  center: {
    textAlign: 'center'
  },
  purple: {
    color: "#673ab7"
  },
  blue: {
    color: "#3f51b5"
  }
});

class TypographyPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Headings"
            >
              <h1 className={classes.purple}>Heading 1</h1>
              <Typography variant="body1" align="left" className={classes.purple}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
              </Typography>
              <h2>Heading 2</h2>
              <Typography variant="body2" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
              </Typography>
              <h3 className={classes.blue}>Heading 3</h3>
              <Typography variant="body1" align="left" className={classes.blue}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
              </Typography>
              <h4>Heading 4 </h4>
              <Typography variant="body2" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
              </Typography>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Display - Material UI"
              className={classes.center}
            >
              <Typography variant="display4" gutterBottom className={classes.blue}>
                Display 4
      </Typography>
              <Typography variant="display3" gutterBottom>
                Display 3
      </Typography>
              <Typography variant="display2" gutterBottom className={classes.purple}>
                Display 2
      </Typography>
              <Typography variant="display1" gutterBottom>
                Display 1
      </Typography>
              <Typography variant="headline" gutterBottom>
                Headline
      </Typography>
              <Typography variant="title" gutterBottom>
                Title
      </Typography>
              <Typography variant="subheading" gutterBottom>
                Subheading
      </Typography>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Text Align"
            >
              <Typography variant="body1" gutterBottom align="left">
                Left aligned text
      </Typography>
              <Typography variant="body1" gutterBottom align="center">
                Center aligned text
      </Typography>
              <Typography variant="body1" gutterBottom align="right">
                Right aligned text
      </Typography>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Blockquotes"
            >
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. roin nibh augue, suscipit a.</p>
                <small>- Author <cite title="Source Title">Source Title</cite></small>
              </blockquote>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Paragraphs"
            >
              <Typography variant="body1" gutterBottom align="left">
                Lorem ipsum dolor sit amet, <mark>consectetur</mark> adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
      </Typography>
              <Typography variant="body2" gutterBottom align="right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.
      </Typography>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Text Formatting"
            >
              <p><b>This text is bold</b></p>
              <p><i>This text is italic</i></p>
              <p><small>This text is small</small></p>
              <strong>This text is strong</strong>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Unordered List"
            >
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <ul className={classes.circle}>
                    <li>Consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                  <li>Consectetur adipiscing elit</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Ordered List"
            >
                <ol>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <ol>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ol>
                </ol>
            </PaperBox>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TypographyPage);