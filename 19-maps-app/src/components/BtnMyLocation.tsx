import {useContext} from "react";
import {MapContext, PlacesContext} from "../context";

export const BtnMyLocation = () => {
    const {map, isMapReady} = useContext(MapContext);
    const {userLocation} = useContext(PlacesContext);
    const onClickHandler = () => {
        if (!isMapReady) throw new Error('The map is not ready');
        if (!userLocation) throw new Error('There is not user location');

        map?.flyTo({
            zoom: 18,
            center: userLocation
        });
    };

    return (
        <button className="btn btn-primary"
                onClick={onClickHandler}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    zIndex: 999
                }}>
            My Location
        </button>
    );
}