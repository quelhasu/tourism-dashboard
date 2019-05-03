
/**
 * Create a table component with 2 rows and 'differential' row
 * @class DiffTable
 * 
 * @prop {Object[]} evolution - Evolution values to display
 * @prop {String} year - Year evolution value
 * @prop {String} var - Variable to reach in object
 * 
 * @extends React.Component<Props>
 */
export default class DiffTable extends React.Component {


  constructor(props) {
    super(props);

    
  }
  
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              {Object.keys(this.props.evolution).map((value, i) => {
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
                      return (
                      <td 
                        key={`body-td-${value}-${year}`} 
                        style={{ fontWeight: "bold", color: (value >= 0 ? '#10ac84	' : '#ee5253') }}>
                        {value > 0 ? `+${value}%` : `${value}%`}
                      </td>)
                    }
                    else return (<td key={`body-td-${value}-${year}`}>{value + "%"}</td>)
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
