import React from 'react'
import { Spinner } from 'react-bootstrap';

/**
 * Create a Stat object component
 * @class Stat
 * 
 * @prop {string} background - Background color value
 * @prop {string} value - The value to display
 * @prop {string} [addValue=''] - Secondary value to display
 * @prop {string} type - The type of statistic
 * 
 * @extends React.Component<Props>
 */

export default class Stat extends React.Component {

  constructor(props) {
    super(props);
  }

  addValueProcess(val){
    return {'type': typeof val, 'value': val}
  }

  addValueRender(val){
    switch (val.type) {
      case 'number':
        return (
          <div className="additional-value ">
              <span>
                <i className={`fas fa-caret-${val.value >= 0 ? 'up' : 'down'} `} style={{ fontSize: '1vw' }} />
              </span>
              {val.value}%
            </div>
        )
        break;
      case 'string':
      if(!val.value.includes('rgb')){
      return (
        <div className="additional-value-image">
          <img  src={val.value}/>
        </div>
      )}
      break
      default:
        break;
    }
  }

  render() {
    let addValue = this.addValueProcess(this.props.addValue);
    let addValueFa = addValue >= 0 ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>

    return (
      <div className="col-md  data-viz " style={{ background: this.props.background }}>
        <div className="row statistics">
          <div className="col-md-2 text-left">
            <i className={`${this.props.fa} center-item`}></i>
          </div>
          {this.addValueRender(addValue)}
          {this.props.loading ? (<Spinner animation="grow" role="status" variant="light" />) : ''}
          <div className="col">
            <div className="row">
              <div className="col text-right font-weight-bold">
                <h5>{this.props.value}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col text-sm-right text-muted text-uppercase text-small">{this.props.type}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}