import { Helmet } from "react-helmet-async";


const StoreLocations = () => {
    return (
        <div>
            <Helmet>
                <title>Store Locations - Gadget Heaven</title>
            </Helmet>
            <div className="text-white mx-auto bg-gradient-to-b from-purple-600 to-purple-700 py-8 text-center rounded-2xl">
                <h2 className="text-3xl font-bold">Store Locations</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="py-3 px-3 border-2 rounded-xl mt-6">
                <h2 className="text-2xl font-bold">Panthapath Branch</h2>
                <p>Bashundhara Shopping, House#12/a, Shop-23, Dhaka</p>
            </div>

            <div className="py-3 px-3 border-2 rounded-xl mt-6">
                <h2 className="text-2xl font-bold">Dhanmondi Branch</h2>
                <p>Shaptak Square, House#12/a, Dhanmondi 27, Dhaka</p>
            </div>

            <div className="py-3 px-3 border-2 rounded-xl mt-6">
                <h2 className="text-2xl font-bold">Gulshan Branch</h2>
                <p>House#121/a, Gulshan 2, Dhaka</p>
            </div>
            
        </div>
    );
};

export default StoreLocations;