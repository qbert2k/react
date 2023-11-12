import {createContext, CSSProperties, JSX, ReactElement} from "react";
import {useProduct} from "../hooks/useProduct";
import {InitialValues, OnChangeArgs, Product, ProductContextProps} from "../interfaces/Interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[] | ((message: string) => JSX.Element);
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {

    const {counter, increaseBy} = useProduct({onChange, product, value, initialValues});

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}>
                {(typeof children === 'function') ? children('Hello World') : children}
            </div>
        </Provider>
    );
}