import React from 'react';
import ChartistGraph from 'react-chartist';
import data from './data';
import Grid from '@material-ui/core/Grid';
import PaperBox from './PaperBox';

class Charts extends React.Component {
  render() {
    return (
        <Grid container spacing={24}>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Pie Chart"
            >
              <ChartistGraph data={data.pie1} type='Pie' />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Stacked Bar Chart"
            >
              <ChartistGraph data={data.stackedBar1.data} options={data.stackedBar1.options} type="Bar" />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Donut Chart"
            >
              <ChartistGraph data={data.donut1.data} options={data.donut1.options} type='Pie' />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Line Chart"
            >
              <ChartistGraph data={data.lineChart1.data} options={data.lineChart1.options} type="Line" />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Bi-polar Bar"
            >
              <ChartistGraph data={data.bipolarBar1.data} options={data.bipolarBar1.options} type="Bar" />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperBox
              title="Gauge Chart"
            >
              <ChartistGraph data={data.gauge1.data} options={data.gauge1.options} type="Pie" />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Bar Chart"
            >
              <ChartistGraph data={data.bar1} type='Bar' />
            </PaperBox>
          </Grid>
          <Grid item sm={12} md={6}>
            <PaperBox
              title="Bi-polar Area"
            >
              <ChartistGraph data={data.bipolarChart1.data} options={data.bipolarChart1.options} type="Line" />
            </PaperBox>
          </Grid>
        </Grid>
    );
  }
}

export default Charts;