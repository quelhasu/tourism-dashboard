import { Bar } from 'react-chartjs-2';
import { selectedColors } from "../utils/colors";
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

var data = {
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
};

export default class GoingChart extends React.Component {


  constructor(props) {
    super(props);
    chartData(props);
  }

  render() {
    Object.keys(this.props.evolution).forEach((key, i) => {
      // console.log(this.props.evolution[key][this.props.year])
      // console.log(i, this.props.evolution[key])
      // if(i == 1) return props.evolution[year]['Ingoing']
    });
    return (
      <div>
        <Bar
          data={data}
          width={100}
          height={20}
          options={options}
        />
      </div>
    )
  }

}

function chartData(props) {
  data.labels = Object.keys(props.evolution).map(key => { return key })

  data.datasets[0].data = Object.keys(props.evolution).map(key => {
    return props.evolution[key][props.year]['Ingoing']
  })

  data.datasets[1].data = Object.keys(props.evolution).map(key => {
    return props.evolution[key][props.year]['Outgoing']
  })

  const colors = orderColors(data.labels)

  data.datasets[0].backgroundColor = colors.ingoing
  data.datasets[0].borderColor = colors.ingoing

  data.datasets[1].backgroundColor = colors.outgoing
  data.datasets[1].borderColor = colors.outgoing
}

function orderColors(names) {
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
