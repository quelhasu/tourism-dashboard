import { Bar } from 'react-chartjs-2';
import { OrderColorsRGBA } from '../utils/helpers'
import 'chartjs-plugin-datalabels';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  datasetFill: true,
  legend: {
    display: false
  },
  plugins: {
    datalabels: {
      color: '#fff',
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 95);
        return {
          size: size,
          // weight: 200
        };
      }
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        fontSize: 10,
        stepSize: 50
      },
      stacked: true
    }],
    yAxes: [{
      ticks: {
        fontSize: 10,
        beginAtZero: true, callback: function (value, index, values) {
          return value + "%";
        },
        stepSize: 5
      },
      stacked: true
    }]
  }
}

/**
 * Create a going chart component
 * @class GoingChart
 * 
 * @prop {Object[]} evolution - Evolution values to display
 * @prop {String} year - Year evolution value
 * @prop {String[]} colors - Colors array associated with name
 * 
 * @extends React.Component<Props>
 */
export default class GoingChart extends React.Component {

  chartData = (props) => {
    let evolution = Object.keys(props.evolution).sort((a, b) => (props.evolution[b][props.year]['Ingoing'] + props.evolution[b][props.year]['Outgoing']) - (props.evolution[a][props.year]['Ingoing'] + props.evolution[a][props.year]['Outgoing']))

    this.data.labels = evolution.map(key => { return key })

    this.data.datasets[0].data = evolution.map(key => {
      return props.evolution[key][props.year] ? props.evolution[key][props.year]['Ingoing'] : 0
    })

    this.data.datasets[1].data = evolution.map(key => {
      return props.evolution[key][props.year] ? props.evolution[key][props.year]['Outgoing'] : 0
    })

    const colors = OrderColorsRGBA(this.data.labels, this.selectedColors, 'ingoing', 'outgoing')

    this.data.datasets[0].backgroundColor = colors.ingoing
    this.data.datasets[0].borderColor = colors.ingoing

    this.data.datasets[1].backgroundColor = colors.outgoing
    this.data.datasets[1].borderColor = colors.outgoing
  }

  constructor(props) {
    super(props);
    this.data = {
      labels: '',
      datasets: [
        {
          label: 'Ingoing',
          borderWidth: 1,
        },
        {
          label: 'Outgoing',
          borderWidth: 1,
        }
      ]
    }
    this.selectedColors = props.colors
    this.chartData(props);
  }

  componentWillReceiveProps(nextProps) {
    this.chartData(nextProps);
  }

  render() {
    // this
    // Object.keys(this.props.evolution).forEach((key, i) => {
    //   // console.log(this.props.evolution[key][this.props.year])
    //   // console.log(i, this.props.evolution[key])
    //   // if(i == 1) return props.evolution[year]['Ingoing']
    // });
    return (
      <div className="going-chart">
        <Bar
          data={this.data}
          width={100}
          // height={20}
          options={options}
        />
      </div>
    )
  }

}
