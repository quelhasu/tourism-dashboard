import { Bar } from 'react-chartjs-2';

const options = {
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
        stepSize: 2
      },
    }]
  }
}

export default class GoingChart extends React.Component {

  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })
  
    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['Ingoing']
    })
  
    this.data.datasets[1].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['Outgoing']
    })
  
    const colors = orderColors(this.data.labels, this.selectedColors)
  
    this.data.datasets[0].backgroundColor = colors.ingoing
    this.data.datasets[0].borderColor = colors.ingoing
  
    this.data.datasets[1].backgroundColor = colors.outgoing
    this.data.datasets[1].borderColor = colors.outgoing
  }

  constructor(props) {
    super(props);
    this.data = {
      labels:'',
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
      <div>
        <Bar
          data={this.data}
          width={100}
          height={20}
          options={options}
        />
      </div>
    )
  }

}

function orderColors(names, selectedColors) {
  var alpha = "0.3"
  var ingoing = [],
    outgoing = [];
  for (var i = 0; i < names.length; i++) {
    ingoing.push(selectedColors[names[i]]);
    outgoing.push(selectedColors[names[i]].replace('rgb', 'rgba').replace(')', ',' + alpha + ')'));
  };
  return {
    ingoing: ingoing,
    outgoing: outgoing
  };
}
