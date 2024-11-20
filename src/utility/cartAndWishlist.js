

const getFromCart = () =>{
    const cartItemsStr = localStorage.getItem('cart')

    if(cartItemsStr){
        const cartItems = JSON.parse(cartItemsStr)
        return cartItems
    }
    return []

}

const addToCart = (id) =>{
    const cartItems = getFromCart();

    if(cartItems.includes(id)){
        console.log("Ada;");
        return
    }

    cartItems.push(id)
    const cartItemsStr = JSON.stringify(cartItems);
    localStorage.setItem('cart', cartItemsStr)

}



const getFromWishlist = () =>{
    const wishlistItemsStr = localStorage.getItem('wishlist')

    if(wishlistItemsStr){
        const wishlistItems = JSON.parse(wishlistItemsStr)
        return wishlistItems
    }
    return []

}

const addToWishlist = (id) =>{
    const wishlistItems = getFromWishlist();

    if(wishlistItems.includes(id)){
        console.log("Ada;");
        return
    }

    wishlistItems.push(id)
    const wishlistItemsStr = JSON.stringify(wishlistItems);
    localStorage.setItem('wishlist', wishlistItemsStr)

}

export{addToCart, addToWishlist, getFromCart, getFromWishlist}
