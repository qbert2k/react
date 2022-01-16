import React from "react";
import {GifGridItem} from "./GifGridItem";
import {getGifs} from "../helpers/getGifs";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {loading} = useFetchGifs();

    // const [images, setImages] = useState([]);
    //
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {loading? 'Cargando...': 'Data cargada'}
            {/*<div className="card-grid">*/}
            {/*    {*/}
            {/*        images.map((img) => {*/}
            {/*            return (*/}
            {/*                <GifGridItem*/}
            {/*                    key={img.id}*/}
            {/*                    {...img}/>*/}
            {/*            );*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    );
}