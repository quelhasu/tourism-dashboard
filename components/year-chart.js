import { Line } from 'react-chartjs-2';
import { Omit } from '../utils/helpers'

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
    options= {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
        text: 'Yearly evolution per region '
      },
      legend:{
        labels:{
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
          ticks:{
            fontSize:10
          },
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Year'
          }
        }],
        yAxes: [{
          ticks:{
            fontSize:10
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

  constructor(props) {
    super(props);
    this.data.datasets = chartData(props);
    this.options.title.text += props.var
    this.data.labels = Object.getOwnPropertyNames(
      this.props.evolution[Object.keys(this.props.evolution)[0]]
    ).filter(el => el.match(/^\d{4}$/))
  }

  componentWillReceiveProps(nextProps) {
    this.data.datasets = chartData(nextProps);
  }

  render() {
    return (
      <div className="month-chart">
        <Line width={this.props.width} data={this.data} options={this.options} />
      </div>
    )
  }
}

function chartData(props) {
  let dataArr = null;
   return Object.keys(props.evolution).map(key => {
    dataArr = Object.keys(props.evolution[key]).map(elKey => {return props.evolution[key][String(elKey)][props.var]});
    return {
      label: key,
      backgroundColor: props.colors[key],
      borderColor: props.colors[key],
      data: dataArr,
      fill: false
    }
  })
}
