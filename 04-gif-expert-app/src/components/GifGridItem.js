import React from 'react';

export function GifGridItem({title, url}) {

    console.log(title, url);

    return (
        <div>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}