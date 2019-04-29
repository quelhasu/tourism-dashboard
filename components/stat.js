import React from 'react'

export default class Stat extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let addValue = this.props.addValue;
    return (
      <div className="col-md  data-viz " style={{background:this.props.background }}>
        <div className="row statistics">
          <div className="col-md-2 text-left">
            <i className={`${this.props.fa} center-item`}></i>
          </div>
          <div className="col-md-2 additional-value">
          {addValue ? ((addValue >= 0 ? "+" : "-")+addValue+'%') : '' }
          </div>
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