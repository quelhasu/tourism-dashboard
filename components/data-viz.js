import React from 'react'
import { SaveAs } from "../utils/helpers"
import html2canvas from 'html2canvas';

/**
 * Create a DataViz block
 * @class DataViz
 * 
 * @prop {String} title - Title of the component
 * @prop {String} [second] - Second text
 * @prop {String} style - Style for border-left 
 * @prop {String} id - Title of the menu
 * @prop {React.Component} children - Personalized content
 * 
 * @extends React.Component<Props>
 */
export default class DataViz extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   * Process to save div to image
   * @param {Object} event - Object that called the function
   * 
   */
  screenshotDiv = (event) => {
    console.log(event);
    let current = event.currentTarget
    while (!current.className.includes('data-viz')) current = current.parentNode
    let filename = `${current.id}.png`
    html2canvas(current).then(function (canvas) {
      SaveAs(canvas.toDataURL(), filename);
    });
  }

  render() {
    return (
      <div id={this.props.id} className={`col data-viz`} style={this.props.style}>
        <div className="row">
          <div className="col">
            <h6 className="text-uppercase text-left">{this.props.title}</h6>
            <p className="text-uppercase mb-4 text-muted text-small text-left">{this.props.second}</p>
          </div>
          <div className="col-md-2 ml-auto  text-right"><i onClick={this.screenshotDiv} class="fas fa-download download"></i></div>
        </div>
        <div className="row">
          <div className="col">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}