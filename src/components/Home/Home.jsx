import { Outlet, useLoaderData } from "react-router-dom";

import Banner from "../Banner/Banner";
import Category from "../Gadgets/Category";
import { useEffect } from "react";

const Home = () => {
    const categories = useLoaderData()

    useEffect(() => {
        document.title = 'Home - Gadget Heaven';
    }, []);

    return (
        <div className="rounded-3xl">
            <Banner></Banner>

            <div className="flex justify-center">
                <h1 className="text-3xl font-bold my-6">Explore Cutting-Edge Gadgets</h1>
            </div>

            <div className="flex gap-5 w-10/12 mx-auto">

                <div className="shadow-lg w-3/12 h-fit rounded-3xl">
                    {
                        categories.map(category => <Category key = {category.id} category={category}></Category>)
                    }
                </div>

                <div className="w-9/12 rounded-3xl">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Home;