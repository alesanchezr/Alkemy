import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap"
import alkemyLogo from '../assets/images/alkemy_logo.png'

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark fixed expand="md">
          <NavbarBrand to="/" className="mr-auto">
            <img src={alkemyLogo} style={{maxHeight:'10vh',margin:'auto'}} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem className="mr-4">
                <Link to="/page-2/">Page 2</Link>
              </NavItem>
              <NavItem>
                <Link to="https://github.com/mpolinowski/gatsby-reactstrap" target="_blank">Github Repository</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
