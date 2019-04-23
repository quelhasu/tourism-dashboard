import React from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const filterBtnStyle = {
  marginBottom: '1rem',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)'
}

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
            <button className="btn btn-outline-dark" style={filterBtnStyle} onClick={this.toggle}>
              <i class="fas fa-filter"></i>
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