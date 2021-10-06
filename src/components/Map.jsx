import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%",
    };

    const defaultCenter = {
        lat: data.lat || 0, lng: data.lng || 0
    };

    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    )
}

export default Map
