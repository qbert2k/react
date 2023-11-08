import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {products} from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage2 = () => {

    return (
        <div>
            <h1>Shopping Store 2</h1>
            <hr/>

            <ProductCard key={product.id}
                         product={product}
                         className="bg-dark"
                         initialValues={{
                             count: 4,
                             maxCount: 10
                         }}>
                <ProductImage className="custom-image" style={{boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'}}/>
                <ProductTitle className="text-white text-bold"/>
                <ProductButtons className="custom-buttons"/>
            </ProductCard>
        </div>
    );
}