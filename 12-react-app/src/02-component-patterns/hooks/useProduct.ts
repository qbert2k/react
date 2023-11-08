import {useEffect, useRef, useState} from "react";
import {InitialValues, OnChangeArgs, Product} from "../interfaces/Interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isControlled = useRef(!!onChange);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({count: value, product});
        }

        if (value > 0 && initialValues?.maxCount == counter) return ;

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
        if (!isMounted.current) return;

        setCounter(value);
    }, [value]);

    // useEffect(() => {
    //     isMounted.current = true;
    // }, []);

    return {
        counter,
        increaseBy
    };
}