import { NavLink } from "react-router-dom";

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price, product_id } = gadget

    return (
        <div className="card bg-base-100 shadow-xl">

            <figure className="w-[280px] h-full mx-auto">
                <img src={product_image} />
            </figure>

            <div className="card-body">

                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}K</p>

                <div className="card-actions justify-start">
                    <NavLink
                        to={`/details/${product_id}`}>
                        <button
                            className="btn btn-outline btn-primary rounded-full">
                            View Details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Gadget;