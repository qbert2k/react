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

    const increaseBy = (value: number) => {
        if (isControlled.current) {
            return onChange!({count: value, product});
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy
    };
}