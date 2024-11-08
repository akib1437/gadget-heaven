import { MdDeleteOutline } from "react-icons/md";

const Cart = ({ cart, handleRemoveCart }) => {
    const { product_title, product_image, price, product_id, description } = cart

    return (
        <div className="w-4/5 border-2 mb-3 mx-auto bg-base-100 shadow-xl flex flex-col md:flex-row gap-8 p-4 rounded-3xl">

            <figure>
                <img className="w-52"
                    src={product_image} />
            </figure>

            <div className="flex w-full justify-between items-center">

                <div>
                    <h2 className="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}K</p>
                </div>

                <div onClick={() => handleRemoveCart(product_id)} className='px-8'>
                    <button className='text-2xl btn'><MdDeleteOutline /></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;