import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getFromCart, getFromWishlist } from "../../utility/cartAndWishlist";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {
    const [cart, setCart] = useState(true)
    const allProducts = useLoaderData()

    const [cartList, setCartList] = useState([])
    const [wishList, setWishList] = useState([])

    const updateCartList = () => {
        const cartContentsId = getFromCart()
        const cartProducts = allProducts.filter(product =>
            cartContentsId.includes(product.product_id)
        );
        setCartList(cartProducts);
    };

    const updateWishlist = () => {
        const wishListContentsId = getFromWishlist()
        const wishProducts = allProducts.filter(product =>
            wishListContentsId.includes(product.product_id)
        );
        setWishList(wishProducts);
    };


    useEffect(() => {
        updateCartList()
    }, [])

    useEffect(() => {
        updateWishlist()
    }, [])


    const handleCart = () => {
        setCart(true);
        updateCartList();
    };

    const handleWishlist = () => {
        setCart(false);
        updateWishlist();
    };
    return (
        <div>
            <Helmet>
                <title>Dashboard - Gadget Heaven</title>
            </Helmet>
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 py-8 text-center rounded-2xl">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-3 space-x-2">
                    <button onClick={handleCart} className={`btn rounded-2xl btn-outline ${cart ? "bg-white text-purple-800" : "text-white"}`}>Cart</button>
                    <button onClick={handleWishlist} className={`btn rounded-2xl btn-outline ${!cart ? "bg-white text-purple-800" : "text-white"}`}>Wishlist</button>
                </div>
            </div>
            {
                cart ? (
                    <Cart updateCartList={updateCartList} cartList={cartList}></Cart>
                ) : (
                    <Wishlist updateWishlist={updateWishlist} wishList={wishList}></Wishlist>
                )
            }


        </div>
    );
};

export default Dashboard;