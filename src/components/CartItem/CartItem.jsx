import { MdDelete } from "react-icons/md";
import { getFromCart } from "../../utility/cartAndWishlist";

const CartItem = ({ cartItem, updateCartList }) => {
    const { product_id, product_title, product_image, price, description} = cartItem

    const removeFromCart = (productId) => {
        const cart = getFromCart()
        const updatedCart = cart.filter(id => id !== productId); 
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateCartList();

    };
    return (



        <div className="border-2 rounded-2xl mt-5 px-4 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center">
                <div>
                    <img className="w-52" src={product_image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p>{description}</p>
                    <p className="font-semibold">Price: ${price}</p>
                </div>
            </div>
            <div className="text-3xl text-red-400">
                <button onClick={()=>removeFromCart(product_id)}><MdDelete></MdDelete></button>

            </div>


        </div>

    );
};

export default CartItem;