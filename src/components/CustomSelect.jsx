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

const CustomSelect = (props)=> {
    // define state and setState
    const {selectedOption, setSelection} = useState('')
    // define spread for additional props that are passed such as onClick()
    const {...other} = props


    // Build Individual options from props.options array

    // Individual Option Objects:
    // icon (string) - name of option icon
    // size (string) - size of option icon
    // iconColor (string) - color of option icon
    // label (string) - text for option 

    const buildOptions = () => {
        return props.options.map(
            (item, index) => {
              const { icon, iconColor, iconSize, label} = item
              // TODO Create onClick Actions so that when item is clicked it is added to state via setSelection()
              return (
                  <Label
                      class="option"
                      key={index}
                  >
                      <Input
                          type="radio"
                          name={label}
                          value={label}
                      />
                      <span className="title animated fadeIn">
                          <FontAwesomeIcon
                              icon={icon}
                              size={
                                  iconSize ||
                                  "md"
                              }
                              color={
                                  iconColor ||
                                  "white"
                              }
                              className="icon select-icon"
                          />
                          {label ||
                              "Option"}
                      </span>
                  </Label>
              )
            }
        )
    }

    return (
        <span {...other}>
            <Label inline for="custom-select">
                {props.selectLabel}
            </Label>
            <div name="custom-select" className="select animated zoomIn">
                <Input type="radio" name="option" className={props.classes} />
                <FontAwesomeIcon
                    icon="arrow-down"
                    size="md"
                    color={props.arrowColor}
                    className="icon select-icon"
                />
                <FontAwesomeIcon
                    icon="arrow-up"
                    size="md"
                    color={props.arrowColor}
                    className="icon select-icon"
                />
                <span className="placeholder">{this.props.placeholder}</span>
                {buildOptions}
            </div>
        </span>
    )
}


CustomSelect.propTypes = {
    arrowColor: PropTypes.string, // Color of the select (up and down) arrows
    classes: PropTypes.string, // Additional classes to add to select
    selectLabel: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
}

export default CustomSelect