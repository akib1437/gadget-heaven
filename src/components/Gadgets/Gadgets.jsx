import Gadget from "./Gadget";
import { useLoaderData } from "react-router-dom";

const Gadgets = () => {
    const gadgets = useLoaderData();

    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                {
                    gadgets.map(gadget =>
                        <Gadget key={gadget.id}
                            gadget={gadget}></Gadget>)
                }
            </div>
        </>
    );
};

export default Gadgets;