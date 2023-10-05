import {useState} from 'react';

interface Props {
    initialValue?: number
}

export const CounterBy = ({initialValue = 5}: Props) => {

    const [counter, setCounter] = useState({
        value: initialValue,
        clicks: 0
    });

    const handleClick = (val = 1) => {
        setCounter(prev => {
                return {
                    value: prev.value + val,
                    clicks: prev.clicks + 1
                };
            }
        )
    };


    return (
        <>
            <h1>Counter By: {counter.value}</h1>
            <h1>Clicks: {counter.clicks}</h1>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    );
}