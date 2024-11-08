import Wish from "../Wish/Wish";

const Wishes = ({ wishProducts, handleRemoveWishProducts }) => {
    return (
        <div className='py-5'>
            {
                wishProducts.map((wish, index) =>
                    <Wish key={index}
                        wish={wish}
                        handleRemoveWishProducts={handleRemoveWishProducts}></Wish>)
            }
        </div>
    );
};

export default Wishes;