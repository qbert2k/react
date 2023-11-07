import {Product} from "../interfaces/Interfaces";

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

export const product3: Product = {...product1, id: '3'};
export const product4: Product = {...product1, id: '4'};
export const product5: Product = {...product1, id: '5'};
export const product6: Product = {...product1, id: '6'};

export const products: Product[] = [product1, product2];