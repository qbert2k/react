import React from "react";
import ReactDOM from "react-dom/client";
import {MapsApp} from "./MapsApp";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoicWJlcnQyayIsImEiOiJjajU2d2JpOGMwdGk4MnFyMHYyb203YmJ0In0.NFxFL1P8GCDSCmBP1oZQlA';

if (!navigator.geolocation) {
    alert('The browser has not Geolocation features');
    throw new Error('The browser has not Geolocation features');
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <MapsApp/>
    </React.StrictMode>
);