import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const EventMap = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDX0hOGbm825zdN4-YI3MNvXfJKFQMtBLA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: (
      <div
        style={{
          paddingTop: '10px',
          margin: '0 auto',
          height: '400px',
          width: '60%'
        }}
      />
    ),
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(() => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 39.740243, lng: -104.99151 }}
    style={{
      border: '2px solid #aaa'
    }}
  >
    <Marker position={{ lat: 39.740243, lng: -104.9915 }} />
    <Marker position={{ lat: 37.7749, lng: -122.419 }} />
    <Marker position={{ lat: 40.7128, lng: -74.00609915 }} />
  </GoogleMap>
));

export default EventMap;
