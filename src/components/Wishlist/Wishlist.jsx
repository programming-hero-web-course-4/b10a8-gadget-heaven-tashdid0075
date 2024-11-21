import WishlistItem from "../WishlishItem/WishlistItem";

const Wishlist = ({wishList, updateWishlist}) => {
    
    return (
        <div className="mt-3">
            <h2 className="text-xl font-semibold">Wishlist</h2>

            {
                wishList.map(wishlistItem =><WishlistItem key={wishlistItem.product_id} updateWishlist={updateWishlist} wishlistItem = {wishlistItem}></WishlistItem>)
            }

        </div>
    );
};

export default Wishlist;