import { toast } from "react-toastify";

const getStoredCart = () => {
    const storedData = localStorage.getItem('CartContainer')
    if (storedData) {
        const storedCart = JSON.parse(storedData)
        return storedCart;
    }
    else {
        return [];
    }
}


const addCart = (gadget) => {

    const CartContainer = getStoredCart()

    const isExist = CartContainer.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Already Added to Cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
        })
    }
    else {

        CartContainer.push(gadget)
        localStorage.setItem('CartContainer', JSON.stringify(CartContainer))
        toast.success('Added to cart successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
        })
    }
}
const removeCart = (id) => {
    const carts = getStoredCart()
    const remaining = carts.filter(CartContainer => CartContainer.product_id !== id)
    localStorage.setItem('CartContainer', JSON.stringify(remaining))
}

const removeAllCart = () => {
    localStorage.removeItem('CartContainer')
}

const getStoredWish = () => {
    const storedWishData = localStorage.getItem('wish')
    if (storedWishData) {
        const storedWish = JSON.parse(storedWishData)
        return storedWish;

    }
    else {
        return [];
    }
}

const addWish = (gadget) => {
    console.log(gadget);

    const wish = getStoredWish()

    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) {
        toast.error('Already Added to Wish', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
        })
    }
    else {
        wish.push(gadget)
        localStorage.setItem('wish', JSON.stringify(wish))
        toast.success('Added to wishlist successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
        })
    }
}
const removeWish = (id) => {
    const wishes = getStoredWish()
    const remaining = wishes.filter(CartContainer => CartContainer.product_id !== id)
    localStorage.setItem('wish', JSON.stringify(remaining))
}
const removeAllWish = () => {
    localStorage.removeItem('wish')
}
export { getStoredCart, addCart, removeCart, addWish, getStoredWish, removeWish, removeAllCart, removeAllWish }