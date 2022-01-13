import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo}) => {


    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre> {JSON.stringify(saludo, null, 3)} </pre>*/}
            <p>Mi primera aplicacion</p>
        </>
    );
}

PrimeraApp.prototypes = {
    saludo: PropTypes.string.isRequired
};

export default PrimeraApp;