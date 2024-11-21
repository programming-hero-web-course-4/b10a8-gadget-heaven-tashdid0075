import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart, addToWishlist, getFromWishlist } from "../../utility/cartAndWishlist";

const WishlistItem = ({wishlistItem, updateWishlist}) => {
    const { product_id,product_title, product_image, price, description} = wishlistItem
    const handleAddToCart = (id) =>{
        addToCart(id)

    }

    const removeFromWishlist = (productId) => {
        const wishlist =getFromWishlist()
        const updatedWishlist = wishlist.filter(id => id !== productId); 
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        updateWishlist()

    };

    return (
        <div className="border-2 rounded-3xl mt-4 py-2">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center">
                <div>
                    <img className="w-52" src={product_image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-semibold">Price: ${price}</p>
                    <button onClick={()=>handleAddToCart(product_id)} className="btn bg-purple-600 text-white">Add To Cart <FaShoppingCart /></button>
                </div>
            </div>
            <div className="text-3xl text-red-400">
                <button onClick={()=>removeFromWishlist(product_id)}><MdDelete></MdDelete></button>

            </div>


        </div>
            
        </div>
    );
};

export default WishlistItem;