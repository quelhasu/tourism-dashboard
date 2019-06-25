import React from 'react'
import { Collapse } from 'reactstrap';
import Link from 'next/link'
import { Nav } from 'react-bootstrap';
import NProgress from 'nprogress'
import { withTranslation } from '../i18n'

/**
 * Create a menu with personalized content
 * @class Menu
 * 
 * @prop {String} title - Title of page
 * @prop {String} description - Description of the page
 * @prop {String} year - Current year selected
 * @prop {String} baseUrl - Main page to redirect
 * @prop {String} endUrl - Params query for the baseUrl
 * @prop {React.Component} children - Personalized content
 * 
 * @extends React.Component<Props>
 */
class Menu extends React.Component {
  topYear = [
    { value: 2013, label: '2013' },
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' }
  ]

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  static async getInitialProps({req}){
    return {
      namespacesRequired: ['filter']
    }
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className="px-3">
        <div className="row">
          <div className="col-md-auto">
            <h2>{this.props.title}</h2>
            <p className="text-muted">{this.props.description}</p>
          </div>
          <div className="col-md-auto ml-auto">
            <button className="btn btn-outline-dark btn-filter" onClick={this.toggle}>
              <i className="fas fa-filter"></i><span className="ml-3">{this.props.t('filter')}</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Collapse isOpen={this.state.collapse}>
              <div>
                <div className="row">
                  <div className="col">
                    <Nav className="justify-content-center" defaultActiveKey={this.props.year}>
                      {this.topYear.map(({ value, label }) => (
                        <Nav.Item key={`nav-navitem-${label}`} >
                          <Nav.Link eventKey={`${label}`}
                            onClick={() => NProgress.start()}
                            key={`nav-navitem-link${label}`}
                            disabled={label == this.props.year}
                            href={`/${this.props.baseUrl}/${value}${this.props.endUrl ? `/${this.props.endUrl}` : ''}`}>
                            {label}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                </div>
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

export default withTranslation('filter')(Menu)