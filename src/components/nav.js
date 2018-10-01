// Nav.js
import React, { Component }from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Main from './pages/main/main-page'
import ContactUs from './pages/contact/contact-us-page'
import Design from './pages/design/design-page'
import User from './pages/user/user-page'
import Engineering from './pages/engineering/engineering-page'
import Marketing from './pages/marketing/marketing-page'
import Orchestration from './pages/orchestration/orchestration-page'

require('./nav.css');
export default class CustomNav extends Component {


  render () {
    return (
      <Navbar default collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src="mpress-logo-05.png" className="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/engineering" to="/engineering">
                ENGINEERING
              </NavItem>

              <NavItem eventKey={2} componentClass={Link} href="/marketing" to="/marketing">
                MARKETING
              </NavItem>

              <NavItem eventKey={3} componentClass={Link} href="/design" to="/design">
                DESIGN
              </NavItem>

              <NavItem eventKey={4} componentClass={Link} href="/orchestration" to="/orchestration">
                ORCHESTRATION
              </NavItem>

              <NavItem eventKey={5} componentClass={Link} href="/contact" to="/contact">
                CONTACT US
              </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      );
  }
}