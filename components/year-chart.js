import { RandomIndex } from '../utils/helpers'
import Chart from "chart.js";
import { defaultColors } from '../utils/colors'

/**
 * Create a year chart 
 * @class YearChart
 * 
 * @prop {String} height - Height of the Line chart
 * @prop {String} width - Width of the Line chart
 * @prop {Object[]} evolution - Monthly evolution values
 * @prop {String[]} colors - Colors array associated with name
 * 
 * 
 * @extends React.Component<Props>
 */
export default class YearChart extends React.Component {
  chartRef = React.createRef();
  options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Yearly evolution per region '
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
        gridLines: {
          borderDash: [8, 4]
        },
        ticks: {
          fontSize: 10
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: 'Year'
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 10,
          min: 0
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
  data = {
    datasets: []
  }

  componentDidMount() {
    let data = {};
    data.datasets = this.chartData(this.props);
    data.labels = Object.getOwnPropertyNames(
      this.props.evolution[Object.keys(this.props.evolution)[0]]
    ).filter(el => el.match(/^\d{4}$/))

    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: data,
      options: this.options
    });
  }
  
  componentWillReceiveProps(nextProps) {
    let data = {};
    data.datasets = this.chartData(nextProps);
    data.labels = Object.getOwnPropertyNames(
      nextProps.evolution[Object.keys(nextProps.evolution)[0]]
    ).filter(el => el.match(/^\d{4}$/))

    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: data,
      options: this.options
    });
  }

  chartData(props) {
    let dataArr = null
    var color = ''
    return Object.keys(props.evolution).map(key => {
      color = props.colors[key] ? props.colors[key] : defaultColors[RandomIndex(key, defaultColors.length)]
      dataArr = Object.keys(props.evolution[key]).map(elKey => { return props.evolution[key][String(elKey)][props.var] });
      return {
        label: key,
        backgroundColor: '#fff',
        borderColor: color,
        data: dataArr,
        fill: false,
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
      }
    })
  }

  render() {
    return (
      <div className="month-chart">
         <canvas
          id="myChart"
          ref={this.chartRef}
        />
        {/* <Line width={this.props.width} data={this.data} options={this.options} /> */}
      </div>
    )
  }
}
