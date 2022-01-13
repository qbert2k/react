import React, {useState} from "react";
import PropTypes from 'prop-types'
import {Fragment} from "react";

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(0);

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    };

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
        </Fragment>
    );
};

CounterApp.prototypes = {
    value: PropTypes.number
}

export default CounterApp;

// https://es.reactjs.org/docs/events.html