import React from 'react';
import SocialBox from './SocialBox';
import DataBox from './DataBox';
import InfoBox from './InfoBox';
import RecentPostsWidget from './RecentPostsWidget';
import ProductList from './ProductList';
import UserAccountWidget from './UserAccountWidget';
import UsersActivityWidget from './UsersActivityWidget';
import withStyles from '@material-ui/core/styles/withStyles';
import data from './data';
import Grid from '@material-ui/core/Grid';
import Facebook from 'mdi-material-ui/Facebook';
import Twitter from 'mdi-material-ui/Twitter';
import Instagram from 'mdi-material-ui/Instagram';
import Pinterest from 'mdi-material-ui/Pinterest';
import Cart from 'mdi-material-ui/Cart';
import Email from 'mdi-material-ui/Email';
import Comment from 'mdi-material-ui/Comment';
import Account from 'mdi-material-ui/Account';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class Widgets extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24} alignItems="stretch">
          <Grid item xs={12} sm={6} md={3}>
            <SocialBox
              color="#d500f9"
              leftText="20k followers"
              rightText="250 posts"
            >
              <Instagram />
            </SocialBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SocialBox
              color="#f50057"
              leftText="18k followers"
              rightText="173 pins"
            >
              <Pinterest />
            </SocialBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SocialBox
              color="#3b5998"
              leftText="100k friends"
              rightText="1500k likes"
            >
              <Facebook />
            </SocialBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SocialBox
              color="#00aced"
              leftText="14k friends"
              rightText="1356 tweets"
            >
              <Twitter />
            </SocialBox>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#fff"
              background="#7B1FA2"
              number="1623"
              text="New Orders"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#fff"
              background="#1565c0"
              number="37"
              text="Processed Orders"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#fff"
              background="#283593"
              number="16"
              text="Completed Tasks"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#fff"
              background="#6a1b9a"
              number="16"
              text="Completed Tasks"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#fff"
              background="#ad1457"
              number="16"
              text="Completed Tasks"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <DataBox
              color="#7B1FA2"
              background="#fff"
              number="74"
              text="New Customers"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentPostsWidget
              title={data.post1.title}
              subheader={data.post1.subheader}
              image={data.post1.image}
              text={data.post1.text}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentPostsWidget
              title={data.post2.title}
              subheader={data.post2.subheader}
              image={data.post2.image}
              text={data.post2.text}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentPostsWidget
              title={data.post1.title}
              subheader={data.post1.subheader}
              image={data.post1.image}
              text={data.post1.text}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <InfoBox
              background="#4a148c"
              number="74"
              text="New Customers"
            >
              <Cart />
            </InfoBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <InfoBox
              background="#7b1fa2"
              number="6"
              text="New Messages"
            >
              <Email />
            </InfoBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <InfoBox
              background="#ab47bc"
              number="685"
              text="Comments"
            >
              <Comment />
            </InfoBox>
          </Grid>
          <Grid item xs={6} md={3}>
            <InfoBox
              background="#ce93d8"
              number="85"
              text="Users"
            >
              <Account />
            </InfoBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <UserAccountWidget />
          </Grid>
          <Grid item xs={12} md={4}>
            <ProductList />
          </Grid>
          <Grid item xs={12} md={4}>
            <UsersActivityWidget />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Widgets);