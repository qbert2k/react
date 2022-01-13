import PropTypes from 'prop-types'
import {Fragment} from "react";

const CounterApp = ({value}) => {
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
        </Fragment>
    );
};

CounterApp.prototypes = {
    value: PropTypes.number
}

export default CounterApp;