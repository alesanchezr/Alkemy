import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Loading from './loading.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Collapse,
  NavbarToggler,
  Navbar,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap"

import alkemyLogo from '../assets/images/alkemy_logo.png'


export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      isOpen: false,
      dropdownOpen: false,
      loading: true,
      mobileMenuClasses: "d-block d-lg-none mobileMenu",
      togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider",
      icon: ['far','calendar-alt']
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleAppointmentModal = this.toggleAppointmentModal.bind(this);
    this.toggle = this.toggle.bind(this);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.handleButtonHover = this.handleButtonHover.bind(this);

    this.iframe = React.createRef();
  }

  handleButtonHover = (e) => {
    if(e.type==="mouseover"){
      this.setState({
        icon: ['far','calendar-plus']
      });
    }else{
      this.setState({
        icon: ['far','calendar-alt']
      });
    }
  }

  // Appointment Modal Window Toggler
  toggleAppointmentModal() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      loading: prevState.modal?true:prevState.loading
    }))

    setTimeout(()=>{
      if(this.state.modal){
        document.documentElement.classList.add('no-overflow')
        document.body.style.removeProperty('padding-right')
      }else{
        document.documentElement.classList.remove('no-overflow')
      }
    },300)

  }

  // Navbar Toggler Function
  toggleMobileMenu(prevState) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))

    if(this.state.isOpen){
      this.setState({
        mobileMenuClasses: "d-block d-lg-none mobileMenu open",
        togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider is-active"
      })
      document.body.classList.add('open')
    }else{
      this.setState({
        mobileMenuClasses: "d-block d-lg-none mobileMenu",
        togglerClasses: "mr-2 d-lg-none hamburger hamburger--slider"
      })
    }
  }

  // Functions for Dropdown menu
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onMouseEnter = () => {
    this.setState({dropdownOpen: true})
  }

  onMouseLeave = () => {
    this.setState({dropdownOpen: false})
  }

  renderMenuLinks = () => {
    return this.props.menuArray.map(item=>{
      if(!item.drop){
        return(
          <NavItem className="ml-4 my-auto" key={item.id}>
            <Link to={item.url} className="text-white">{item.name}</Link>
          </NavItem>
        );
      }else{
        return(
          <Dropdown
            className="ml-4 my-auto"
            onMouseOver={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle} key={item.id}>
            <DropdownToggle tag="p" className="text-white my-auto" caret>{item.name}</DropdownToggle>
            <DropdownMenu tag="ul" className='dropMenu' style={{background: 'rgba(8,11,13,.70)'}}>
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

  renderMobileLinks = () => {
    return this.props.menuArray.map(item=>{
      if(item.drop){
        return(
          <div key={item.id}>
            <NavItem className="text-center font-weight-bold siteTitle">
              <p className="text-white">{item.name}</p>
            </NavItem>
            <ul className="mobileSubMenu list-unstyled mx-auto text-center mb-5">
              {
                item.submenu.map(subitem=>{
                  return(
                    <NavItem key={subitem.id}>
                      <Link to={subitem.url} className="text-white">{subitem.name}</Link>
                    </NavItem>
                  )
                })
              }
            </ul>
          </div>
        )
      }else{
        return(
          <NavItem className="mx-auto font-weight-bold" key={item.id}>
            <Link to={item.url} className="text-white">{item.name}</Link>
          </NavItem>
        )
      }
    })
  }

  render() {
    return (
      <>
        <Navbar fixed='top' expand="lg" dark>
          <Link to="/" className="navbar-brand mr-lg-auto">
              <img className="my-auto" src={alkemyLogo} alt="Alkemy, Inc." />
          </Link>
          <NavbarToggler
            onClickCapture={this.toggleMobileMenu}
            className={this.state.togglerClasses}
            >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </NavbarToggler>
          <Collapse className="d-none d-lg-block" navbar>
            <Nav className="ml-auto" navbar>
              {this.renderMenuLinks()}
              <Button
                outline
                color="light"
                onMouseOver={this.handleButtonHover}
                onMouseOut={this.handleButtonHover}
                onClick={this.toggleAppointmentModal}
                className="ml-4 align-middle"
                >
                <FontAwesomeIcon icon={this.state.icon} color="white" size="lg" className="mr-2"/>
                Reserve Appointment
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
        <div className={this.state.mobileMenuClasses} >

          <Nav className="mx-auto" navbar>
            {this.renderMobileLinks()}
            <Button
              outline
              color="light"
              className="mx-auto align-middle my-4"
              >
              <FontAwesomeIcon icon={this.state.icon} color="white" size="lg" className="mr-2"/>
              Reserve Appointment
            </Button>
          </Nav>
        </div>
        <Modal
          size={'lg'}
          className="bookingModal"
          isOpen={this.state.modal}
          toggle={this.toggleAppointmentModal}>
          <ModalHeader toggle={this.toggleAppointmentModal}>Reserve an Appointment</ModalHeader>
          <ModalBody className="p-0 m-0">
            {
              this.state.loading
              ? (<Loading size='4x'/>)
              : null
            }
            <iframe
              title='booking'
              ref={this.iframe}
              onLoad={e=>this.setState({loading: false})}
              seamless
              className="mb-0 bookingFrame"
              src="https://squareup.com/appointments/buyer/widget/0dddc8a7-089f-45bc-870f-8a603a6dd412/GYDNKWG11FCR7"
              />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

ReactNavbar.propTypes = {
  menuArray: PropTypes.array
}
