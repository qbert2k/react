import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'en',
        access_token: 'pk.eyJ1IjoicWJlcnQyayIsImEiOiJjajU2d2JpOGMwdGk4MnFyMHYyb203YmJ0In0.NFxFL1P8GCDSCmBP1oZQlA'
    }
});

export default searchApi;