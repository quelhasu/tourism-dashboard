import { Line } from 'react-chartjs-2';
import { selectedColors } from "../utils/colors";

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class MonthChart extends React.Component {
    options= {
      responsive: true,
      title: {
        display: true,
        text: 'Monthly evolution per region'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
    data = {
      labels: MONTHS,
      datasets: []
    }

  constructor(props) {
    super(props);
    this.data.datasets = chartData(props);
    this.options.title.text = props.var
  }

  componentWillReceiveProps(nextProps) {
    this.data.datasets = chartData(nextProps);
  }

  render() {
    return (
      <div>
        <Line height={200} data={this.data} options={this.options} />
      </div>
    )
  }
}

function chartData(props) {
   return Object.keys(props.evolution).map(key => {
    return {
      label: key,
      backgroundColor: selectedColors[key],
      borderColor: selectedColors[key],
      data: props.evolution[key][props.var].months.map(el => el.low),
      fill: false
    }
  })
}