// Custom Select Dropdown for ReactJS
// Created by: Jonathan Ferragut
// Inspired by the original html/css only version by Aoyue Design
// Codepen: https://codepen.io/Aoyue/pen/rLExYX

import React, { useState } from "react"
import PropTypes from 'prop-types'
import {
    Label, Input
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class CustomSelect extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        selectedOption: '',
        closed: true
      }
    }

    componentDidMount(){
        this.props.default && this.selectDefault()
    }

    handleSelection = (label,state) => {
        this.setState({
            selectedOption: label,
            closed: state
        })
    }

    selectDefault = ()=>{
        this.setState({
            selectedOption: this.props.options[0],
            closed: true,
        })
    }
    // Build Individual options from this.props.options array

    // Individual Option Objects:
    // label (string) - text for option 

    buildOptions = () => {
        return this.props.options.map(
            (item, index) => {
              return (
                  <Label
                      className={"option"+" "+"option-"+index}
                      key={index}
                      onClick={() => this.handleSelection(item.label,true)}
                  >
                      <Input type="radio" name="option" value={item.label} />
                      <span className="title animated fadeIn">
                          {item.label || "Option"}
                      </span>
                  </Label>
              )
            }
        )
    }

    render(){

      return (
          <div
              {...this.props}
              className={
                  this.props.selectlabel.length > 0
                      ? "d-flex align-items-center justify-content-end mr-5"
                      : "d-flex align-items-center justify-content-center"
              }
          >
              {this.props.selectlabel.length > 0 ? (
                  <Label for="custom-select" className="mr-3 my-auto">
                      {this.props.selectlabel}
                  </Label>
              ) : null}
              <div name="custom-select" className="select animated zoomIn">
                  <Input
                      type="radio"
                      name="option"
                      className={
                          this.props.classes +
                          (this.state.closed ? " closed" : "")
                      }
                      onClick={() =>
                          this.handleSelection(
                              this.state.selection,
                              !this.state.closed
                          )
                      }
                  />
                  <FontAwesomeIcon
                      icon="arrow-down"
                      size="sm"
                      color={this.props.arrowcolor}
                      className="toggle icon select-icon down"
                      onClick={() =>
                          this.handleSelection(this.state.selection, false)
                      }
                  />
                  <FontAwesomeIcon
                      icon="arrow-up"
                      size="sm"
                      color={this.props.arrowcolor}
                      className="toggle icon select-icon up"
                      onClick={() =>
                          this.handleSelection(this.state.selection, true)
                      }
                  />
                  <span
                      className="placeholder"
                      onClick={() =>
                          this.handleSelection(
                              this.state.selection,
                              !this.state.closed
                          )
                      }
                  >
                      {this.props.placeholder}
                  </span>

                  {this.buildOptions()}
              </div>
          </div>
      )
    }
}


CustomSelect.propTypes = {
    arrowcolor: PropTypes.string, // Color of the select (up and down) arrows
    classes: PropTypes.string, // Additional classes to add to select
    selectlabel: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    default: PropTypes.bool
}