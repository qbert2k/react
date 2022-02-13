import React from 'react';

export const Small = React.memo(({value}) => {

    console.log('Me volvi a llamar :(');
    // http?

    return (
        <small>{value}</small>
    );
})