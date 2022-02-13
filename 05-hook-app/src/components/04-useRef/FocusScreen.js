import React, {useRef} from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleCLick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>

            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"/>

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleCLick}>
                Focus
            </button>
        </div>
    );
}