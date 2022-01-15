import React from 'react';

export function GifGridItem({title, url}) {

    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}