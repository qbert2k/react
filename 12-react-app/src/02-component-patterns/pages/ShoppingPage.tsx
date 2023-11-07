import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import "../styles/custom-styles.css";
import {useShoppingCart} from "../hooks/useShoppingCart";
import {ProductInCart} from "../interfaces/Interfaces";
import {product3, product4, product5, product6, products} from "../data/products";

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

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
                    {
                        Object.entries(shoppingCart).map(([key, productInCart]: [string, ProductInCart]) => (
                            <ProductCard key={key}
                                         product={productInCart}
                                         className="bg-dark"
                                         style={{
                                             width: "100px"
                                         }}
                                         onChange={onProductCountChange}
                                         value={productInCart.count}>
                                <ProductImage className="custom-image"/>
                                <ProductButtons className="custom-buttons"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center"
                                                }}/>
                            </ProductCard>
                        ))
                    }
                </div>

                {
                    products.map(product => (
                        <ProductCard key={product.id}
                                     product={product}
                                     className="bg-dark"
                                     onChange={onProductCountChange}
                                     value={shoppingCart[product.id]?.count || 0}>
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

                {/*--------------------------------------------------------*/}

                <ProductCard product={product3}
                             className="bg-dark"
                             onChange={onProductCountChange}
                             value={shoppingCart[product3.id]?.count || 0}>
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'Cafecito Valdez'} className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product4}
                             className="bg-dark"
                             onChange={onProductCountChange}
                             value={shoppingCart[product4.id]?.count || 0}>
                    <ProductImage className="custom-image"
                                  style={{
                                      boxShadow: "10px 10px 10px rgba(150, 150, 150, 0.5)"
                                  }}/>
                    <ProductTitle className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product5}
                             onChange={onProductCountChange}
                             value={shoppingCart[product5.id]?.count || 0}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>

                <ProductCard product={product6}
                             style={{
                                 backgroundColor: '#70D1F8'
                             }}
                             onChange={onProductCountChange}
                             value={shoppingCart[product6.id]?.count || 0}>
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