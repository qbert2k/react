import {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

const MAX_COUNT = 10;

export const useCounter = () => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAX_COUNT));
    }

    useEffect(() => {
        if (counter < 10) return;

        console.log('%cMax value reached!', 'color: red; background-color: black;');

        const timeline = gsap.timeline();
        timeline
            .to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});
    }, [counter]);

    return {
        counter,
        counterElement,
        handleClick
    };
}