import React from 'react';
import '../02-useEffect/effects.css';
import {useFetch} from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state);

    return (
        <div>
            <h1>Multiple custom Hooks!!!</h1>
        </div>
    );
}