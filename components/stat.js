import React from 'react'

export default class Stat extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md  data-viz">
        <div className="row">
          <div className="col text-left">
            <i className={`${this.props.fa} center-item`}></i>
          </div>
          <div className="col">
            <div className="row">
              <div className="col text-right font-weight-bold">
                <h3>{this.props.value}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col text-sm-right text-muted text-uppercase small">{this.props.type}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}