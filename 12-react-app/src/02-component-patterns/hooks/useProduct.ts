import {useState} from "react";
import {OnChangeArgs, Product} from "../interfaces/Interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({onChange, product}: useProductArgs) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    }

    return {
        counter,
        increaseBy
    };
}