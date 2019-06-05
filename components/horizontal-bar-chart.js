import { HorizontalBar } from 'react-chartjs-2';
import { OrderColors } from '../utils/helpers'

/**
 * Create a horizontal bar chart
 * @class HorizontalBarChart
 * 
 * @prop {Number} nbItems - Number of items displayed
 * @prop {Object[]} evolution - Evolution values to display
 * @prop {String} year - Year evolution value
 * @prop {String[]} colors - Colors array associated with name
 * @prop {Number} step - Step for the scale
 * @prop {String} valueType - Type of values displayed (e.g. '%', '$', etc.)
 * 
 * @extends React.Component<Props>
 */
export default class HorizontalBarChart extends React.Component {

  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })

    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year] ? props.evolution[key][props.year]['value'] : 0
    })

    const colors = OrderColors(this.data.labels, this.selectedColors)

    this.data.datasets[0].backgroundColor = colors
    this.data.datasets[0].borderColor = colors
  }

  constructor(props) {
    super(props);
    
    this.data = {
      labels: '',
      datasets: [
        {
          label: props.type,
          borderWidth: 2,
        }
      ]
    }
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          color: '#fff',
          font: function(context) {
            var width = context.chart.width;
            var size = Math.round(width / 60);
            return {
              size: size,
            };
          }
        }
      },
      scales: {
        xAxes: [{
          barThickness: 5,
          position: 'bottom',
          ticks: {
            stepSize: props.step || 10,
            beginAtZero: true, callback: function (value, index, values) {
              return `${value} ${props.valueType ? props.valueType : '%'}`;
            },
          }
        }],
        yAxes: [{
          position: 'right',
          
        }]
      }
    }
    this.selectedColors = props.colors
    this.chartData(props);
  }

  componentWillReceiveProps(nextProps) {
    this.chartData(nextProps);
  }

  render() {
    return (
      <div className="horizontal-bar" style={{height: `${3.090909091 * this.props.nbItems}vh`}}>
        <HorizontalBar
          data={this.data}
          options={this.options}
        />
      </div>
    )
  }

}