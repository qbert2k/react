import {useContext, useState} from "react";
import {MapContext, PlacesContext} from "../context";
import {LoadingPlaces} from "./";
import {Feature} from "../interfaces/places";

export const SearchResults = () => {

    const {places, isLoadingPlaces} = useContext(PlacesContext);
    const {map} = useContext(MapContext);

    const [activeId, setActiveId] = useState('');

    const onPlaceClickHandle = (place: Feature) => {
        const [lng, lat] = place.center;
        setActiveId(place.id);
        map?.flyTo({
            zoom: 14,
            center: [lng, lat]
        });
    };

    if (isLoadingPlaces) {
        return <LoadingPlaces/>;
    }

    if (places.length === 0) {
        return <></>;
    }

    return (
        <ul className="list-group mt-3">
            {
                places.map(
                    place => (
                        <li key={place.id}
                            className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active' : ''}`}
                            onClick={() => onPlaceClickHandle(place)}>
                            <h6>{place.text}</h6>
                            <p style={{
                                fontSize: '12px'
                            }}>
                                {place.place_name}
                            </p>
                            <button className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
                                Directions
                            </button>
                        </li>
                    )
                )
            }
        </ul>
    );
}