import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  renderMarker = (map, maps) => {
    new maps.Marker({
      map: map,
      position: new maps.LatLng(59.95, 30.33),
      label: 'Seven Technology',
      title:'Jobs'
    });
    new maps.Marker({
      map: map,
      position: new maps.LatLng(80.63, 30.33),
      label: 'Visionx',
      title:'Jobs'
    });
    new maps.Marker({
      map: map,
      position: new maps.LatLng(35.21, 30.33),
      label: 'IBM',
      title:'Jobs'
    });
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: ''}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarker(map, maps)}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapView;
