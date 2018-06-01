import React from 'react';
import Account from 'mdi-material-ui/Account';
import Cart from 'mdi-material-ui/Cart';
import ChartistGraph from 'react-chartist';
import Comment from 'mdi-material-ui/Comment';
import data from './data';
import Email from 'mdi-material-ui/Email';
import Grid from '@material-ui/core/Grid';
import InfoBox from './InfoBox';
import PaperBox from './PaperBox';
import RecentPostsWidget from './RecentPostsWidget';
import Todo from './Todo';

class App extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} lg={3}>
          <InfoBox
            background="#4a148c"
            number="74"
            text="New Customers"
          >
            <Cart />
          </InfoBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <InfoBox
            background="#7b1fa2"
            number="6"
            text="New Messages"
          >
            <Email />
          </InfoBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <InfoBox
            background="#ab47bc"
            number="685"
            text="Comments"
          >
            <Comment />
          </InfoBox>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <InfoBox
            background="#ce93d8"
            number="85"
            text="Users"
          >
            <Account />
          </InfoBox>
        </Grid>
        <Grid item sm={12} md={5}>
          <PaperBox
            title="Items sold"
          >
            <Grid container>
              <Grid item xs={12}>
                <ChartistGraph data={data.stackedBar1.data} options={data.stackedBar1.options} type="Bar" />
              </Grid>
              <Grid item sm={12} md={6}>
                <div className='dataWidget' style={{ backgroundColor: "#fff", color: "#808080" }}>
                  <h3>259</h3>
                  <h6>New Items</h6>
                </div>
                <ChartistGraph data={data.pie2} type='Pie' />
              </Grid>
              <Grid item sm={12} md={6}>
                <div className='dataWidget' style={{ backgroundColor: "#fff", color: "#808080" }}>
                  <h3>7802</h3>
                  <h6>Regular Customers</h6>
                </div>
                <ChartistGraph data={data.pie3} type='Pie' />
              </Grid>
            </Grid>
          </PaperBox>
        </Grid>
        <Grid item sm={12} md={7}>
          <PaperBox
            title="Users"
          >
            <Grid container>
              <Grid item xs={12}>
                <ChartistGraph data={data.lineChart2.data} options={data.lineChart2.options} type="Line" />
              </Grid>
              <Grid item sm={12} md={6}>
                <ChartistGraph data={data.donut2.data} options={data.donut2.options} type='Pie' />
              </Grid>
              <Grid item sm={12} md={6}>
                <ChartistGraph data={data.bar2} type='Bar' />
              </Grid>
            </Grid>
          </PaperBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: "30px" }}>
          <RecentPostsWidget
            title={data.post1.title}
            subheader={data.post1.subheader}
            image={data.post1.image}
            text={data.post1.text}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: "30px" }}>
          <RecentPostsWidget
            title={data.post2.title}
            subheader={data.post2.subheader}
            image={data.post2.image}
            text={data.post2.text}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} style={{ marginTop: "30px" }}>
          <Todo
          />
        </Grid>
      </Grid>
    )
  }
};

export default App;