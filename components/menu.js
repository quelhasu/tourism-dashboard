import React from 'react'
import { Collapse } from 'reactstrap';

/**
 * Create a menu with personalized content
 * @class Menu
 * 
 * @prop {String} title - Title of the menu
 * @prop {React.Component} children - Personalized content
 * 
 * @extends React.Component<Props>
 */
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
      <div  className="px-2">
        <div className="row">
          <div className="col-md-auto">
            <h2>{this.props.title}</h2>
            <p className="text-muted">{this.props.description}</p>
          </div>
          <div className="col-md-auto ml-auto">
            <button className="btn btn-outline-dark btn-filter" onClick={this.toggle}>
              <i className="fas fa-filter"></i><span className="ml-3">Filter</span>
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