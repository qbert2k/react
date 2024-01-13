import React from 'react';
import ReactDOM from 'react-dom/client';
import {MapsApp} from "./MapsApp";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

if (!navigator.geolocation) {
    alert('The browser has not Geolocation features');
    throw new Error('The browser has not Geolocation features');
}

root.render(
    <React.StrictMode>
        <MapsApp/>
    </React.StrictMode>
);