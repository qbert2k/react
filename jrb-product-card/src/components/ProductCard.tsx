import React, {createContext, CSSProperties, JSX, ReactElement} from "react";
import {useProduct} from "../hooks/useProduct";
import {InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps} from "../interfaces/Interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] | ((args: ProductCardHandlers) => JSX.Element);
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {

    const {counter, maxCount, isMaxCountReach, increaseBy, reset} = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}>
                {(typeof children === 'function') ?
                    children({
                        count: counter,
                        isMaxCountReach,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) : children}
            </div>
        </Provider>
    );
}