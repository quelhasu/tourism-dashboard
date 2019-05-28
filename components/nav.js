import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavItem } from "reactstrap";
import { PascalCase } from "../utils/helpers";


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github', icon: 'fab fa-github-alt' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const menu = [
  { href: '/stats', label: 'Stats', icon: '' },
  { href: '/international/2016', label: 'International', icon: '' },
  { href: '/national/2016', label: 'National', icon: '' },
  { href: '/clustering/2016/2/gironde', label: 'Clustering', icon: '' }
].map(link => {
  link.key = `menu-link-${link.href}-${link.label}`
  return link
})

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: '' };
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
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png" className="navbar-logo" />
              Tourism
            </a>
          </Link>
          <Nav className="mr-auto" navbar>
            {menu.map(({ key, href, label, icon }) => (
              <NavItem key={key} className={`${PascalCase(browserUrlMatch) == label ? 'active' : ''} `}>
                <Link prefetch key={`link-${key}`} href={href}>
                  <a className={`${PascalCase(browserUrlMatch) == label ? 'active' : ''} nav-link`}
                    onClick={this.selectLink.bind(this, label)} >
                    {label} <i className={icon}></i>
                  </a>
                </Link>
              </NavItem>
            ))}
          </Nav>
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

export default Navi
