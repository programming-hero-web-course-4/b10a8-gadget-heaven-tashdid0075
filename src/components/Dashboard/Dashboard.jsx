import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getFromCart } from "../../utility/cartAndWishlist";


const Dashboard = () => {
    const [cart, setCart] = useState(true)
    const allProducts = useLoaderData()

    const[cartList, setCartList] = useState([])
    const[wishList, setWishList] = useState([])


    useEffect(()=>{
        const cartContentsId = getFromCart();

        const cartProducts = allProducts.filter(product => cartContentsId.includes(product.product_id)  )


        setCartList(cartProducts)
    }, [])
    return (
        <div>
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 py-8 text-center rounded-2xl">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="mt-3 space-x-2">
            <button onClick={() => setCart(true)} className="btn rounded-2xl btn-outline text-white">Cart</button>
            <button onClick={()=>setCart(false)} className="btn rounded-2xl btn-outline text-white">Wishlist</button>
            </div>
        </div>
        {
            cart ? (
                <Cart cartList={cartList}></Cart>
            ):(
                <Wishlist wishList={wishList}></Wishlist>
            )
        }


        </div>
    );
};

export default Dashboard;