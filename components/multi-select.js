import Select from 'react-select';


/**
 * @name handleFunction
 * @function 
 * @param {String} newValue 
 */ 

/**
 * Create a Multi Select object component
 * @class MultiSelect
 * 
 * @prop {string} class - Class for component
 * @prop {Object[]} default - Default value to display
 * @prop {Object[]} options - Options to display
 * @prop {String} name - Default name of multi select
 * @prop {boolean} isClearable - Clear option of multi select
 * @prop {boolean} isMulti - Multi option of multi select
 * @prop {handleFunction} onChange - The type of statistic
 * 
 * @extends React.Component<Props>
 */


export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.class}>
        {/* <label className="col-md-1 col-form-label">Countries</label> */}
        <Select
          key={JSON.stringify(this.props.options)}
          defaultValue={this.props.default}
          isSearchable 
          isClearable={this.props.isClearable}
          isMulti={this.props.isMulti}
          name={this.props.name}
          closeMenuOnSelect={false}
          options={this.props.options}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Select.."
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}