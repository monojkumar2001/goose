import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
const data = [
  { year: 'Week 1', population: 1.525 },
  { year: 'Week 2', population: 2.018 },
  { year: 'Week 3', population: 3.682 },
  { year: 'Week 4', population: 4.440 },
  { year: 'Week 5', population: 5.310 },
  { year: 'Week 6', population: 6.127 },
  { year: 'Week 7', population: 6.930 },
  { year: 'Week 8', population: 4.930 },
  { year: 'Week 9', population: 6.330 },
  { year: 'Week 10', population: 7.930 },
  { year: 'Week 11', population: 5.930 },
  { year: 'Week 12', population: 3.930 },
  { year: 'Week 13', population: 7.930 },
];

export default class ChartBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const style = {
        backgroundColor: 'none',
      };
    return (
      <Paper style={style}>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={13} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
