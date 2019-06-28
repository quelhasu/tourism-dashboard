import React from 'react'
import Link from 'next/link'
import { i18n, withTranslation } from '../i18n'
import { Navbar, Nav, NavItem } from "reactstrap";
import { PascalCase } from "../utils/helpers";


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github', icon: 'fab fa-github-alt' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const menu = [
  // { href: '/stats', label: 'Stats', icon: '' },
  { href: '/international/2018', label: 'International', icon: '' },
  { href: '/national/2018', label: 'National', icon: '' },
  { href: '/regional/2018', label: 'Regional', icon: '' },
  { href: '/destination/2018/1/2.5', label: 'Destination', icon: '' },
  // { href: '/divers/2018', label: 'Divers', icon: '' }
].map(link => {
  link.key = `menu-link-${link.href}-${link.label}`
  return link
})

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      disableTrans: false
    };
  }

  static async getInitialProps() {
    return {
      namespacesRequired: ['nav'],
    }
  }

  changeLanguage = (e) => {
    e.preventDefault();
    this.setState({ disableTrans: true })
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
    setTimeout(() => this.setState({ disableTrans: false }), 3000);
  }

  selectLink = (e) => {
    this.setState({
      selected: e
    })
  }

  render() {
    let browserUrl = this.props.current.asPath.match(/[a-zA-Z]+/g)
    let browserUrlMatch = browserUrl ? browserUrl[0] : "Default"
    return (
      <div>
        <Navbar className="navbar" bg="light" fixed="top" light expand="md">
          <Link href="/">
            <a className="navbar-brand">
              <img src="https://images.emojiterra.com/google/android-pie/512px/1f686.png" className="navbar-logo" />
              <span>Neo4Tourism</span>
            </a>
          </Link>
          <Nav className="mr-auto" navbar>
            {menu.map(({ key, as, href, label, icon }) => (
              <NavItem key={key} className={`${PascalCase(browserUrlMatch) == label ? 'active' : ''} `}>
                <Link prefetch key={`link-${key}`} href={href} as={as}>
                  <a className={`${PascalCase(browserUrlMatch) == label ? 'active' : ''} nav-link`}
                    onClick={this.selectLink.bind(this, label)} >
                    {label} <i className={icon}></i>
                  </a>
                </Link>
              </NavItem>
            ))}
          </Nav>
          <button
            className="btn btn-outline-secondary btn-sm"
            type='button'
            onClick={this.changeLanguage}
            disabled={this.state.disableTrans}>
            EN/FR
          </button>
        </Navbar>

        <style jsx>{`
      :global(body) {
        margin: 0;
        // font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        //   Helvetica, sans-serif;
        // font-family: "Montserrat", sans-serif;
        padding: 0;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        // padding: 16px 5px;
        margin: 0;
      }
      li {
        display: flex;
        padding: 0 16px 0 0;
        margin: 0;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 14px;
      }
    `}</style>

      </div>
    )
  }
}

export default withTranslation('nav')(Navi)
