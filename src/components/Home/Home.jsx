import React, { useState } from 'react';
import banner from '../../assets/banner.jpg'
import Products from '../Products/Products';


const Home = () => {
    const [productType, setProductType] = useState("")

    const buttonClasses = (type) =>
        `btn ${
            productType === type
                ? "bg-purple-600 text-white" 
                : "bg-gray-200 text-gray-800" 
        }`;
    return (
        <div className=''> 
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 min-h-[700px] rounded-3xl">
                <div className="text-center mx-auto">
                    <div className="max-w-6xl mx-auto pt-10">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 max-w-3xl mx-auto">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto -mt-96'>
                <img className='rounded-3xl' src={banner} alt="" />
            </div>

            <div className='mt-10'>
                <h2 className='text-center font-bold text-4xl'>Explore Cutting-Edge Gadgets</h2>
                
                <div className='flex mt-8'>
                    <div className='w-1/4 flex flex-col gap-5 p-4'>
                        {/* Buttons */}
                        <button onClick={()=> setProductType("")} className={buttonClasses("")}>All Products</button>

                        <button onClick={()=> setProductType("Smartphones")} className={buttonClasses("Smartphones")}>Smartphones</button>

                        <button onClick={()=> setProductType("Smartwatches")} className={buttonClasses("Smartwatches")}>Smartwatches</button>

                        <button onClick={()=> setProductType("Headphones")} className={buttonClasses("Headphones")}>Headphones</button>

                        <button onClick={()=> setProductType("Monitors")} className={buttonClasses("Monitors")}>Monitors</button>
                    </div>
                    <div className='w-3/4'>
                    <Products productType={productType}></Products>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;