import { useRef, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { FcOk } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({ cartList, updateCartList }) => {
    const cartItems = cartList
    const totalPrice = cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0);


    
    const handleSortByPrice = () => {
        const sorted = [...cartList].sort((a, b) => b.price - a.price);
        
    };
    

    const handlePurchase = () => {
        localStorage.removeItem('cart');
        updateCartList();
        if (buttonRef.current && cartItems.length > 0) {
            buttonRef.current.click();
        }
        if (cartItems.length === 0) {
            toast.error('No Product added in cart', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });

        }


    }
    const buttonRef = useRef(null)

    return (
        <div>

            <div className="flex items-center justify-between mt-9 max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold">Cart</h2>
                <div className="flex items-center gap-5">
                    <h2 className="text-xl font-semibold">Total Price: ${totalPrice}</h2>
                    <button onClick={handleSortByPrice} className="btn btn-outline text-purple-600">Sort By Price</button>
                    <button onClick={handlePurchase} disabled={totalPrice===0} className="btn bg-purple-600 text-white disabled:bg-slate-300">Purchase</button>

                </div>
            </div>

            {
                cartItems.map(cartItem => <CartItem key={cartItem.product_id} cartItem={cartItem} updateCartList={updateCartList}></CartItem>)
            }

            <button ref={buttonRef} className="btn hidden" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center">
                    <div className="text-9xl">
                        <FcOk></FcOk>
                    </div>
                    <h3 className="font-bold text-lg">Purchase Successful!</h3>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />



        </div>


    );
};

export default Cart;