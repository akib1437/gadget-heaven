
const DashboardDetails = ({products}) => {
    const { product_title, product_image, price } = products
    console.log(products);
    return (
        <div className="card bg-base-100 shadow-xl">

            <figure className="w-4/5 mx-auto">
                <img src={product_image} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}K</p>
            </div>
        </div>
    );
};

export default DashboardDetails;