import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_title, product_image, price, product_id } = product
    return (
        <div className="card bg-base-100 max-w-96 shadow-xl">
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
                    <Link to={`/products/${product_id}`}>
                        <button className="btn btn-outline">View Details</button>

                    </Link>
                
                </div>
            </div>
        </div>
    );
};

export default Product;