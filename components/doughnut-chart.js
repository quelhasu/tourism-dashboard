import {Doughnut} from 'react-chartjs-2';



export default class DoughnutChart extends React.Component {


  constructor(props) {
    super(props);
    this.data = {
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

    this.selectedColors = props.colors
    this.chartData(props);
  }

  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })
  
    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['value']
    })
  
    const colors = orderColors(this.data.labels, this.selectedColors)
  
    this.data.datasets[0].backgroundColor = colors
    this.data.datasets[0].hoverBackgroundColor = colors
  }

  render() {
    return (
      <div className="doughnut-chart">
        <Doughnut height={120} data={this.data} />
      </div>
    )
  }

}

function orderColors(names, selectedColors) {
  var array = [];
  for (var i = 0; i < names.length; i++) {
    array.push(selectedColors[names[i]]);
  };
  return array;
}