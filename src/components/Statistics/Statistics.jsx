import { useEffect } from "react";

const Statistics = () => {
    useEffect(() => {
        document.title = 'Statistics - Gadget Heaven';
    }, []);

    return (
        <div>
            <div className="hero bg-purple-700 pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Statistics</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;