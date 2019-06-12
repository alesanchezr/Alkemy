import React from 'react'
import { Col, Row } from 'reactstrap'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class ContactMap extends React.Component {
  constructor(){
    super(props);
    this.mapCanvas = React.createRef()
  }

  render(){
    return(
        <Map
          className="position-relative"
          google={this.props.google}
          zoom={13}
          ref={this.mapCanvas}
          initialCenter={{
           lat: 26.2870334,
           lng: -80.2432831
          }}
        />
    )
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey
  }
))(ContactMap)
