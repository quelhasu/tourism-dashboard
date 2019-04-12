import { Line } from 'react-chartjs-2';
import { selectedColors } from "../utils/colors";

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Monthly evolution per ingoing region'
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
  };

  var data = {
      labels: MONTHS,
      datasets: []
  }

export default class MonthChart extends React.Component {
  constructor(props){
    super(props);
    chartData(props);
  }

  render() {
    return (
      <div>
        <Line height={60} data={data} options={options} />
      </div>
    )
  }
}

function chartData(props) {
  data.datasets = Object.keys(props.evolution).map(key => { 
    return{
      label: key,
      backgroundColor: selectedColors[key],
      borderColor: selectedColors[key],
      data: props.evolution[key][props.var].months.map(el => el.low),
      fill: false
    }
  })
}