import React, {useState} from "react";

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        // setCategories(["HunterXHunter", ...categories] );
        setCategories(cats => [...cats, 'HunterXHunter']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
};

// https://es.reactjs.org/docs/faq-structure.html
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76