import { Line } from 'react-chartjs-2';

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class MonthChart extends React.Component {
    options= {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
        text: 'Monthly evolution per region '
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
    this.options.title.text += props.var
  }

  componentWillReceiveProps(nextProps) {
    this.data.datasets = chartData(nextProps);
  }

  render() {
    return (
      <div>
        <Line height={this.props.height} width={this.props.width} data={this.data} options={this.options} />
      </div>
    )
  }
}

function chartData(props) {
   return Object.keys(props.evolution).map(key => {
    return {
      label: key,
      backgroundColor: props.colors[key],
      borderColor: props.colors[key],
      data: props.evolution[key][props.var].months.map(el => {return el != null ? el.low : 0}),
      fill: false
    }
  })
}
