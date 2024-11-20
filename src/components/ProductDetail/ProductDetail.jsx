import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addToCart, addToWishlist } from "../../utility/cartAndWishlist";

const ProductDetail = () => {
    const { product_id } = useParams()

    const data = useLoaderData()

    const product = data.find(product => product.product_id === product_id)

    const { product_title, product_image, price, specification, description, availability, rating} = product

    const handleAddToCart = (id) =>{
        addToCart(id)

    }

    const handleWishlist = (id) =>{
        addToWishlist(id)


    }

    
    return (
        <div>
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 pt-8 text-center min-h-[480px] rounded-xl">
                <h2 className="font-bold text-3xl">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>
            <div className="card lg:card-side shadow-xl max-w-6xl mx-auto flex justify-evenly -mt-[370px] bg-slate-50">
                <figure>
                    <img
                        className="w-[430px] h-[500px]"
                        src={product_image}
                        alt="Album" />
                </figure>
                <div className="mt-8">
                    <h2 className="card-title">{product_title}</h2>
                    <p className="font-bold mt-2">Price: ${price}</p>

                    {
                        availability ? (<div className="bg-lime-200 px-2 py-1 w-24 text-center rounded-3xl mt-2"><p>In Stock</p></div>):
                        (<div className="bg-red-200 px-2 py-1 w-32 text-center rounded-3xl mt-2"><p>Out of Stock</p></div>)
                    }
                    
                    <p className="mt-3">{description}</p>

                    <h3 className="font-bold my-2">Specifications:</h3>
                    <ul>
                        {
                            specification.map((feature, i) => <li key={i}>{feature}</li>)
                        }
                    </ul>
                    <h3 className="mt-3 font-bold">Rating: {rating}</h3>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions flex items-center">
                        <button onClick={()=>handleAddToCart(product_id)} className="btn bg-purple-600 text-white">Add To Cart <FaShoppingCart /></button>
                        <button onClick={()=>handleWishlist(product_id)} className="rounded-full p-2 border-2 hover:bg-red-100"><CiHeart /></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;