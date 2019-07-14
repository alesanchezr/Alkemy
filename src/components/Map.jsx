import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import PropTypes from "prop-types";

export class ContactMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    onMarkerClick(props, marker) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });
    }

    render() {
        const google = this.props.google;

        if (!google) {
            return <div>Loading...</div>;
        }

        return (
            <StaticQuery
                query={graphql`
                    query MapQueryData {
                        site {
                            siteMetadata {
                                title
                                description
                                author
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
                `}
                render={data => (
                    <Map
                        className="googleMap"
                        google={google}
                        zoom={13}
                        initialCenter={{
                            lat: 26.2870334,
                            lng: -80.2432831,
                        }}
                    >
                        <Marker
                            onClick={this.onMarkerClick}
                            icon={{
                                url: "../assets/images/favicons/favicon-96x96.png",
                                anchor: new google.maps.Point(32, 32),
                                scaledSize: new google.maps.Size(64, 64),
                            }}
                            name={"Alkemy, Inc."}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                        >
                            <div>
                                <h3>{data.site.siteMetadata.company}</h3>
                                <address>
                                    {data.site.siteMetadata.address}
                                    <br />
                                    {data.site.siteMetadata.city},{" "}
                                    {data.site.siteMetadata.state}{" "}
                                    {data.site.siteMetadata.zip}
                                    <br />
                                    {data.site.siteMetadata.phone}
                                </address>
                            </div>
                        </InfoWindow>
                    </Map>
                )}
            />
        );
    }
}

ContactMap.propTypes = {
    google: PropTypes.object,
};

export default GoogleApiWrapper(() => ({
    //
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
}))(ContactMap);
