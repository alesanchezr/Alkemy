import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import alkemyLogo from '../assets/images/alkemy_logo.png'

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  // Navbar Toggler Function
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // Functions for Dropdown menu
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  renderMenuLinks() {
    return this.props.menuArray.map(item=>{
      if(!item.drop){
        return(
          <NavItem className="ml-4 my-auto" key={item.id}>
            <Link to={item.url} className="text-white">{item.name}</Link>
          </NavItem>
        );
      }else{
        return(
          <Dropdown className="ml-4 my-auto" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle} key={item.id}>
            <DropdownToggle tag="p" className="text-white my-auto" caret>{item.name}</DropdownToggle>
            <DropdownMenu tag="ul" style={{background: 'rgba(8,11,13,.70)'}}>
            {
              item.submenu.map(subitem=>{
                return(
                  <DropdownItem tag="li" toggle={this.state.toggle} key={subitem.id}>
                    <Link to={subitem.url} className="text-white">{subitem.name}</Link>
                  </DropdownItem>
                );
              })
            }
            </DropdownMenu>
          </Dropdown>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed='top' expand="md">
          <NavbarBrand to="/" className="mr-auto">
            <img src={alkemyLogo} alt="Alkemy, Inc." style={{maxHeight:'100px',margin:'auto'}} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <p>Call Us Today! 877-4ALKEMY (425-5369)</p>
            <Nav className="ml-auto" navbar>
              {this.renderMenuLinks()}
              <Button className="ml-4">Reserve Appointment</Button>
            </Nav>

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

ReactNavbar.propTypes = {
  menuArray: PropTypes.array
}
