import PropTypes from 'prop-types'
import {Fragment} from "react";

const CounterApp = ({value}) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log(e);
    };

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {value} </h2>

            <button onClick={handleAdd}>+1</button>
        </Fragment>
    );
};

CounterApp.prototypes = {
    value: PropTypes.number
}

export default CounterApp;

// https://es.reactjs.org/docs/events.html