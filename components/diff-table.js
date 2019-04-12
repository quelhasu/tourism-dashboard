export default class DiffTable extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>{this.props.var} evolution</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              {Object.keys(this.props.evolution).map((value) => {
                return (<th>{value}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {[this.props.year, this.props.year - 1, 'diff'].map(rowVar => {
              return (
                <tr>
                  <th scope="row">{rowVar}</th>
                  {Object.keys(this.props.evolution).map((year) => {
                    var value = this.props.evolution[year][rowVar][this.props.var];
                    if (rowVar == 'diff') {
                      value = value > 0 ? `+${value}%` : `${value}%`
                      return (<td style={{ fontWeight: "bold" }}>{value}</td>)
                    }
                    else return (<td >{value}</td>)
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
