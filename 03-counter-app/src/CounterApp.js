import React, {useState} from "react";
import PropTypes from 'prop-types'
import {Fragment} from "react";

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    };

    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </Fragment>
    );
};

CounterApp.prototypes = {
    value: PropTypes.number
}

export default CounterApp;

// https://es.reactjs.org/docs/events.html