import { OrderColors } from '../utils/helpers'
import Chart from "chart.js";

/**
 * Create a dounghnut chart component
 * @class DoughnutChart
 * 
 * @prop {Object[]} evolution - Evolution values to display
 * @prop {String} year - Year evolution value
 * @prop {String[]} colors - Colors array associated with name
 * 
 * @extends React.Component<Props>
 */
export default class DoughnutChart extends React.Component {
  chartRef = React.createRef();
  data = {
    responsive: true,
    maintainAspectRatio: false,
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  componentDidMount() {
    this.selectedColors = this.props.colors
    this.chartData(this.props);

    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "pie",
      data: this.data,
      options: {
        //Customize chart options
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.chartData(nextProps);
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "pie",
      data: this.data,
      options: {
        //Customize chart options
      }
    });
  }

  constructor(props) {
    super(props);
  }

  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })

    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['value']
    })

    const colors = OrderColors(this.data.labels, this.selectedColors)

    this.data.datasets[0].backgroundColor = colors
    this.data.datasets[0].hoverBackgroundColor = colors
  }


  render() {
    return (
      <div className="doughnut-chart">
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }

}