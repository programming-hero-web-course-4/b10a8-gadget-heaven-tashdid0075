import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({ productType }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    let displayProducts = [...products]

    if (productType) {
        displayProducts = products.filter(product => product.category === productType)
    }


    return (

        <div>
            {
                displayProducts.length === 0 ? (
                    <div className='flex flex-col items-center font-bold mt-28'>
                        <h2 className='text-center text-3xl'>No Available Products</h2>
                        <p>Try different Category</p>
                    </div>
                ) : (<div className='md:grid grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        displayProducts.map(product => <Product key={product.product_id} product={product}></Product>)
                    }



                </div>)
            }
        </div>
    );
};

export default Products;