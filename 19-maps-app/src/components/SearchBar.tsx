import {ChangeEvent, useRef} from "react";

export const SearchBar = () => {
    const debounceRef = useRef<NodeJS.Timeout>();
    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            // TODO: Query

            console.log('Debounced value: ', event.target.value);
        }, 350);
    };

    return (
        <div className="search-container">
            <input type="text"
                   className="form-control"
                   placeholder="Find a place..."
                   onChange={onQueryChanged}/>
        </div>
    );
};