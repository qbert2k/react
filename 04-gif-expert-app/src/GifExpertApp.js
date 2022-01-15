import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    );
};

// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76