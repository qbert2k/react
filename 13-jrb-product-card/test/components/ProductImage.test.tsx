import renderer from "react-test-renderer";
import {ProductCard, ProductImage} from "../../src";
import * as React from "react";
import {product2} from "../data/products";

describe('Product Image', () => {

    test('should render the component', () => {
        const wrapper = renderer.create(
            <ProductImage img='test.png'/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('should render the component with the product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
