export default class DiffTable extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.var} evolution</h3>
        <table style={{fontSize: 'small'}} className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              {Object.keys(this.props.evolution).map((value) => {
                return (<th key={`head-${value}`}>{value}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {[this.props.year, this.props.year - 1, 'diff'].map(rowVar => {
              return (
                <tr key={`body-tr-${rowVar}`}>
                  <th key={`body-th-${rowVar}`}scope="row">{rowVar}</th>
                  {Object.keys(this.props.evolution).map((year) => {
                    var value = this.props.evolution[year][rowVar][this.props.var];
                    if (rowVar == 'diff') {
                      value = value > 0 ? `+${value}%` : `${value}%`
                      return (<td key={`body-td-${value}-${year}`} style={{ fontWeight: "bold" }}>{value}</td>)
                    }
                    else return (<td key={`body-td-${value}-${year}`}>{value}</td>)
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

}
