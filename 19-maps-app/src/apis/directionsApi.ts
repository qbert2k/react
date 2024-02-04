import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        language: 'en',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoicWJlcnQyayIsImEiOiJjajU2d2JpOGMwdGk4MnFyMHYyb203YmJ0In0.NFxFL1P8GCDSCmBP1oZQlA'
    }
});

export default directionsApi;