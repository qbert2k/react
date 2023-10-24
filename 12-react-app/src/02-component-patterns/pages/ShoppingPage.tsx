import {useState} from "react";
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import {Product} from "../interfaces/Interfaces";
import '../styles/custom-styles.css';

const product1: Product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

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
                                 }}>
                        <ProductCard.Image className="custom-image"/>
                        <ProductCard.Buttons className="custom-buttons"/>
                    </ProductCard>
                    <ProductCard product={product2}
                                 className="bg-dark"
                                 style={{
                                     width: "100px"
                                 }}>
                        <ProductCard.Image className="custom-image"/>
                        <ProductCard.Buttons className="custom-buttons"/>
                    </ProductCard>
                </div>

                {
                    products.map(product => (
                        <ProductCard product={product}
                                     className="bg-dark">
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

                {/*--------------------------------------------------------*/}

                <ProductCard product={product1}
                             className="bg-dark">
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product1}
                             className="bg-dark">
                    <ProductImage className="custom-image"
                                  style={{
                                      boxShadow: "10px 10px 10px rgba(150, 150, 150, 0.5)"
                                  }}/>
                    <ProductTitle className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product1}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>

                <ProductCard product={product1}
                             style={{
                                 backgroundColor: '#70D1F8'
                             }}>
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
        </div>
    );
}