import React from 'react';

const Product = ({ product }) => {
    const { product_title, product_image, price } = product
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;