import {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

const MAX_COUNT = 10;

export const useCounter = ({maxCount = 1}) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);

    const timeline = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount));
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;

        timeline.current
            .to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
            .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
            .pause();
    }, []);

    useEffect(() => {
        if (counter < maxCount) return;
        // console.log('%cMax value reached!', 'color: red; background-color: black;');
        timeline.current.play(0);

    }, [counter]);

    return {
        counter,
        elementToAnimate: elementToAnimate,
        handleClick
    };
}