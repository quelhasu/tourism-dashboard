import { HorizontalBar } from 'react-chartjs-2';

export default class HorizontalBarChart extends React.Component {

  chartData = (props) => {
    this.data.labels = Object.keys(props.evolution).map(key => { return key })
  
    this.data.datasets[0].data = Object.keys(props.evolution).map(key => {
      return props.evolution[key][props.year]['value']
    })
  
    const colors = orderColors(this.data.labels, this.selectedColors)
  
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
          borderWidth: 2,
        }
      ]
    }
    this.options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          position: 'bottom',
        }],
        yAxes:[{
          position: 'right',
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
    return (
      <div>
        <HorizontalBar
          data={this.data}
          width={100}
          height={45}
          options={this.options}
        />
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
