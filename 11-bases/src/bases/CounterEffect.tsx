import {useEffect, useState} from 'react';

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAX_COUNT));
    }

    useEffect(() => {
        if (counter < 10) return;

        console.log('%cMax value reached!', 'color: red; background-color: black;');
    }, [counter]);

    return (
        <>
            <h1>
                Counter Effect: {counter}
            </h1>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    );
}