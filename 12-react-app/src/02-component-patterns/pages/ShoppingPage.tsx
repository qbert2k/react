import {useState} from "react";
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {Product} from "../interfaces/Interfaces";
import "../styles/custom-styles.css";

const product1: Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};

const product2: Product = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
};

const product3: Product = {...product1, id: '3'};
const product4: Product = {...product1, id: '4'};
const product5: Product = {...product1, id: '5'};
const product6: Product = {...product1, id: '6'};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {
            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            };
        });
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/*--------------------------------------------------------*/}

                <div className="shopping-cart">
                    <ProductCard product={product1}
                                 className="bg-dark"
                                 style={{
                                     width: "100px"
                                 }}
                                 onChange={onProductCountChange}>
                        <ProductCard.Image className="custom-image"/>
                        <ProductCard.Buttons className="custom-buttons"/>
                    </ProductCard>
                    <ProductCard product={product2}
                                 className="bg-dark"
                                 style={{
                                     width: "100px"
                                 }}
                                 onChange={onProductCountChange}>
                        <ProductCard.Image className="custom-image"/>
                        <ProductCard.Buttons className="custom-buttons"/>
                    </ProductCard>
                </div>

                {
                    products.map(product => (
                        <ProductCard key={product.id}
                                     product={product}
                                     className="bg-dark"
                                     onChange={onProductCountChange}>
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

                {/*--------------------------------------------------------*/}

                <ProductCard product={product3}
                             className="bg-dark"
                             onChange={onProductCountChange}>
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product4}
                             className="bg-dark"
                             onChange={onProductCountChange}>
                    <ProductImage className="custom-image"
                                  style={{
                                      boxShadow: "10px 10px 10px rgba(150, 150, 150, 0.5)"
                                  }}/>
                    <ProductTitle className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product5}
                             onChange={onProductCountChange}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>

                <ProductCard product={product6}
                             style={{
                                 backgroundColor: '#70D1F8'
                             }}
                             onChange={onProductCountChange}>
                    <ProductImage style={{
                        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)"
                    }}/>
                    <ProductTitle style={{
                        fontWeight: "bold"
                    }}/>
                    <ProductButtons style={{
                        display: "flex",
                        justifyContent: "end"
                    }}/>
                </ProductCard>
            </div>

            <hr/>
            <div>
                <pre>
                    {JSON.stringify(shoppingCart, null, 5)}
                </pre>
            </div>
        </div>
    );
}