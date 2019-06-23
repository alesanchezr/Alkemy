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
        selectedOption: ''
      }
    }

    handleSelection = (label) => {
      this.setState({
        selectedOption: label
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
                      className="option"
                      key={index}
                      onClick={() => this.handleSelection(item.label)}
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
              className="d-flex align-items-center justify-content-end mr-5"
          >
              <Label for="custom-select" className="mr-3 my-auto">
                  {this.props.selectlabel}
              </Label>
              <div name="custom-select" className="select animated zoomIn">
                  <Input
                      type="radio"
                      name="option"
                      className={this.props.classes}
                  />
                  <FontAwesomeIcon
                      icon="arrow-down"
                      size="sm"
                      color={this.props.arrowcolor}
                      className="toggle icon select-icon down"
                  />
                  <FontAwesomeIcon
                      icon="arrow-up"
                      size="sm"
                      color={this.props.arrowcolor}
                      className="toggle icon select-icon up"
                  />
                  <span className="placeholder">{this.props.placeholder}</span>

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
}