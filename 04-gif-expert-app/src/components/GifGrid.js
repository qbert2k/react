import React from "react";

export const GifGrid = ({category}) => {

    const getGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=DXGF5aEdYUiPebwCAF7ILESVrmeXHI0M`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });

        console.log(gifs);
    }

    getGif();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    );
}