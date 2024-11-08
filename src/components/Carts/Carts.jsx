import Cart from "../Cart/Cart";

const Carts = ({ cartProducts, handleRemoveCart }) => {
    return (
        <div className='py-5'>
            {
                cartProducts.map((cart, index) =>
                    <Cart key={index}
                        cart={cart}
                        handleRemoveCart={handleRemoveCart}></Cart>)
            }
        </div>
    );
};

export default Carts;