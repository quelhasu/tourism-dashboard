import { Bar } from 'react-chartjs-2';
import { OrderColors } from '../utils/helpers'

export default class BarChart extends React.Component {
  options = {
    datasetFill: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          stepSize: 50
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true, callback: function (value, index, values) {
            return value + "%";
          },
          stepSize: 10
        },
      }]
    }
  }

  
  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })
  
    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['value']
    })
  
    const colors = OrderColors(this.data.labels, this.selectedColors)
  
    this.data.datasets[0].backgroundColor = colors
    this.data.datasets[0].borderColor = colors
  }

  constructor(props) {
    super(props);
    this.data = {
      labels:'',
      datasets: [
        {
          label: props.type,
          borderWidth: 1,
        }
      ]
    }
    this.options = {
      scales: {
        yAxes:[{
          ticks:{
            stepSize: props.step || 10,
            beginAtZero: true, callback: function (value, index, values) {
              return `${value} ${props.valueType ? props.valueType : '%'}`;
            },
          }
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
    // this
    // Object.keys(this.props.evolution).forEach((key, i) => {
    //   // console.log(this.props.evolution[key][this.props.year])
    //   // console.log(i, this.props.evolution[key])
    //   // if(i == 1) return props.evolution[year]['Ingoing']
    // });
    return (
      <div>
        <Bar
          data={this.data}
          width={100}
          height={20}
          options={this.options}
        />
      </div>
    )
  }

}
