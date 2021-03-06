import React from "react";
import PropTypes from "prop-types";

class ScrollWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temp: this.props.didViewCountUp };
    }

    componentDidMount() {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", this.handleScroll);
        }
    }

    handleScroll = event => {
        if (this.props.onWindowScroll) this.props.onWindowScroll(event);
    };

    render() {
        return this.props.children;
    }
}

export default ScrollWrapper;

ScrollWrapper.propTypes = {
    location: PropTypes.object,
    children: PropTypes.any,
    onWindowScroll: PropTypes.func,
    didViewCountUp: PropTypes.bool,
};
