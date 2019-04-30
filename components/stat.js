import React from 'react'

export default class Stat extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let addValue = this.props.addValue;
    let addValueFa = addValue >= 0 ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>

    return (
      <div className="col-md  data-viz " style={{ background: this.props.background }}>
        <div className="row statistics">
          <div className="col-md-2 text-left">
            <i className={`${this.props.fa} center-item`}></i>
          </div>

          {addValue ? (
            <div className="additional-value ">
              <span>
                <i className={`fas fa-caret-${addValue >= 0 ? 'up' : 'down'} `} style={{fontSize:'1vw'}}/>
              </span>
              {addValue}%
            </div>
          ) : ''}
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