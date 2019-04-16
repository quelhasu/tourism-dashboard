import React from 'react'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const navbarLogoStyle = {
  height: 35,
  marginRight: 10,
  marginTop: -5
}

const navbarStyle = {
  borderBottom: "0.5px solid #d1d1d1",
  backgroundColor: "#FFF!important",
  padding: "1rem 2.5rem",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2)"
}

const headerStyle = {
  marginBottom: 30
};


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github', icon: 'fab fa-github-alt' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const menu = [
  { href: '/stats', label: 'Stats', icon:''},
  { href: '/national', label: 'National', icon: '' },
  { href: '#', label: 'International', icon: '' },
  { href: '#', label: 'Grouping', icon: '' }
].map(link => {
  link.key = `menu-link-${link.href}-${link.label}`
  return link
})

const Navi = () => (
  <div style={headerStyle}>
    <Navbar style={navbarStyle} fixed="top" color="light" light expand="md">
      <Link href="/">
        <a className="navbar-brand">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/airplane_2708.png" style={navbarLogoStyle} />
          Tourism
        </a>
      </Link>
      <Nav className="mr-auto" navbar>
        {menu.map(({ key, href, label, icon }) => (
          <NavItem>
            <Link href={href}><a className="nav-link">{label} <i className={icon}></i></a></Link>
          </NavItem>
        ))}
      </Nav>
    </Navbar>

    <style jsx>{`
      :global(body) {
        margin: 0;
        // font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        //   Helvetica, sans-serif;
        font-family: "Montserrat", sans-serif;
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

export default Navi
