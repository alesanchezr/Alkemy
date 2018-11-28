import React from "react";
import PropTypes from "prop-types";
import {WOW} from 'wowjs/dist/wow.js';

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp: this.props.didViewCountUp};
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
    if(typeof(window) !== 'undefined') {
      const wow = new WOW({
        live: false,
      })
      wow.init()
    }
  }

  handleScroll = (event)=> {
    if (this.props.onWindowScroll) this.props.onWindowScroll(event);
  }

	render() {
		return this.props.children;
	}
}

export default ScrollWrapper;

ScrollWrapper.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any,
  onWindowScroll: PropTypes.func
};
