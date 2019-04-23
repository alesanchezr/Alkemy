import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Loading = (props) => (
    <div className="spinContainer">
      <FontAwesomeIcon
        className="spin"
        icon="spinner"
        size={props.size}
        spin
        pulse
        />
    </div>
)

export default Loading;
