import { Line } from 'react-chartjs-2';
import Chart from "chart.js";
import { RandomIndex } from '../utils/helpers'
import { defaultColors } from '../utils/colors'
import { withTranslation } from '../i18n'

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Create a month chart 
 * @class MonthChart
 * 
 * @prop {String} height - Height of the Line chart
 * @prop {String} width - Width of the Line chart
 * @prop {Object[]} evolution - Monthly evolution values
 * @prop {String[]} colors - Colors array associated with name
 * 
 * 
 * @extends React.Component<Props>
 */

class MonthChart extends React.Component {
  chartRef = React.createRef();
  chart = '';
  options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Monthly evolution per region '
    },
    legend: {
      labels: {
        fontSize: 10,
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    plugins: {
      datalabels: {
        display: false,
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 10
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 10
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: this.props.t('reviews')
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

  }

  static async getInitialProps({ req }) {
    return {
      namespacesRequired: ['chart'],
    }
  }

  componentDidMount() {
    this.data.datasets = chartData(this.props);

    const myChartRef = this.chartRef.current.getContext("2d");
    this.chart = new Chart(myChartRef, {
      type: "line",
      data: this.data,
      options: this.options
    });
  }

  componentWillReceiveProps(nextProps) {
    this.chart.data.datasets = chartData(nextProps);
    this.chart.update();
  }

  render() {
    return (
      <div className="month-chart">
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

function chartData(props) {
  var color = '';
  return Object.keys(props.evolution).map(key => {
    color = props.colors[key] ? props.colors[key] : defaultColors[RandomIndex(key, defaultColors.length)]
    return {
      label: key,
      backgroundColor: color,
      borderColor: color,
      data: props.evolution[key][props.var] ? props.evolution[key][props.var].months.map(el => { return el != null ? el.low : 0 }) : -1,
      fill: false
    }
  })
}


export default withTranslation('chart')(MonthChart)