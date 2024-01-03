import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../.';

const product = {
    id: '1',
    title: 'Coffee Mug - Card'
};

const App = () => {
    return (
        <>
            <ProductCard product={product}
                         className="bg-dark text-white"
                         initialValues={{
                             count: 4,
                             maxCount: 10
                         }}>
                {
                    ({count, maxCount, isMaxCountReach, increaseBy, reset}) => (
                        <>
                            <ProductImage className="custom-image"
                                          style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {
                                (!isMaxCountReach && <button onClick={() => increaseBy(2)}>+2</button>)
                            }
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>
        </>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
