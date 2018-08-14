import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'

class PoiMarker extends Component {
  render () {
    return (
      <Marker
        key={this.props.id}
        name={this.props.name}
        position={this.props.location}
        >
        <InfoWindow onClick={this.props.handleMarkerClick}>
        <p>{this.props.name}</p>
      </InfoWindow>
      </Marker>
    )
  }
}

export default PoiMarker
