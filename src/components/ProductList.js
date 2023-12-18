// src/App.js
import React from 'react';
import Product from './Product';
import './css/Product.css';

const products = [
    {
        id: 1,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/LM/XN/VR/3027728/yamaha-yzf-r15-bike-500x500.jpg',
    },
    {
        id: 2,
        image: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/bikelisting/pulsar/pulsarns125.png',
    },
    {
        id: 3,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/LM/XN/VR/3027728/yamaha-yzf-r15-bike-500x500.jpg',
    },
    {
        id: 4,
        image: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fbike-images%2Fbig%2Ftvs%2Fronin%2Ftvs-ronin.jpg%3Fv%3D10&w=3840&q=75',
    },
    {
        id: 5,
        image: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/bikes/bikelisting/pulsar/pulsarns125.png',
    },
    {
        id: 6,
        image: 'https://staticimg.amarujala.com/assets/images/2021/11/01/tvs-raider_1635749775.jpeg?w=414',
    },
    
];

function ProductList() {
    return (
        <div className="container">
            <h1>choose your product task completed </h1>
            <div className="product-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
