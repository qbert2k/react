import React, {useEffect, useState} from 'react';

export const Message = () => {

    const [cords, setCords] = useState({x: 0, y: 0});
    const {x, y} = cords;

    useEffect(() => {

        const mouseMove = (e) => {
            const cords = {x: e.x, y: e.y};
            setCords(cords);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <>
            <h3>Eres genial!</h3>
            <p>
                x: {x} y: {y}
            </p>
        </>
    )
}