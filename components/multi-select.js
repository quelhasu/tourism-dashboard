import Select from 'react-select';

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
          name="countries"
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