import React from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div >
        <div className="row">
          <div className="col-md-auto">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-md-auto">
            <button className="btn btn-outline-dark center-item" onClick={this.toggle}>
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Collapse isOpen={this.state.collapse}>
              <div>
                {this.props.children}
              </div>

            </Collapse>
          </div>
        </div>
        <style jsx>{`
      
    `}
        </style>
      </div>
    )
  }
}