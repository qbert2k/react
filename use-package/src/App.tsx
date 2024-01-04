import './App.css';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from 'jrb-product-card';
import {Product} from "jrb-product-card/dist/interfaces/Interfaces";

const product: Product = {
    id: '1',
    title: 'Coffe Mug',
    img: './coffee-mug.png'
}

function App() {
    return (
        <div className="App App-header">

            <ProductCard
                product={product}
                initialValues={{
                    count: 6,
                    maxCount: 10
                }}>
                {
                    () => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
                }
            </ProductCard>

        </div>
    );
}

export default App;
