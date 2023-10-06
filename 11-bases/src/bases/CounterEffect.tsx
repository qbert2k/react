import {useEffect, useState} from 'react';

const MAX_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        if (counter < MAX_COUNT) {
            setCounter(prev => prev + 1);
        }
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