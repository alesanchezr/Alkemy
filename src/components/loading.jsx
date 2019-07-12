import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Loading = props => (
    <div className="spinContainer">
        <FontAwesomeIcon
            className="spin"
            icon="spinner"
            size={props.size}
            spin
            pulse
        />
    </div>
);

Loading.propTypes = {
    size: PropTypes.string,
};

export default Loading;
