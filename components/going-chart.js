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

const selectedColors = {
  "Aquitaine": 'rgb(181, 46, 58)',
  "Midi-Pyrénées": 'rgb(240, 140, 60)',
  "Poitou-Charentes": 'rgb(255, 99, 132)',
  "Île-de-France": 'rgb(255, 205, 86)',
  "Languedoc-Roussillon": 'rgb(220, 59, 59)',
  "Provence-Alpes-Côte d'Azur": 'rgb(241, 175, 65)',
  "Pays de la Loire": 'rgb(177, 193, 78)',
  "Centre": 'rgb(210, 210, 210)',
  "Rhône-Alpes": 'rgb(59, 52, 96)',
  "Bretagne": 'rgb(13, 32, 98)',
  "Limousin": 'rgb(61, 138, 63)'
};

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
