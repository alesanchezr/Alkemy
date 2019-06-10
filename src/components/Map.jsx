import React from 'react'
import { graphql } from 'gatsby'
import { Col, Row } from 'reactstrap'
import GoogleMapReact from 'google-map-react'


const MapComponent = ({ text }) => <div>{text}</div>;


const Map = ({data}) => {
  return(
    <>
      <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyDUZpO1zjvq2K06tUOFMGILQJj7LfmF9pY` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <MapComponent
            lat={-34.397}
            lng={150.644}
            text="My Marker"
          />
        </GoogleMapReact>
      <div id="map" class="col-12">
        <div id="map_canvas">{initMap}</div>
      </div>
    </>
  )
}

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
}

function initMap(){
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 13,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap, {data}){
    var address =  data.site.siteMetadata.address;
    var city = data.site.siteMetadata.city;
    var state = data.site.siteMetadata.state;
    var zip = data.site.siteMetadata.zip;
    var searchAddress = address+','+city+','+state+' '+zip;
    geocoder.geocode({'address': searchAddress}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
          title: searchAddress
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

export const query = graphql`
{
  query MapDataQuery {
    site {
      siteMetadata {
        company
        address
        city
        state
        zip
        phone
        phoneDial
      }
    }
  }
}
`;

export default Map
