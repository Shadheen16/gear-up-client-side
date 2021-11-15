import React from 'react';
import './NewArrival.css'

const NewArrival = () => {
    return (
        <div className="sm:grid grid-cols-2 space-x-5 text-white text-center">
            <div className="w-full shadow-sm min-h-[50vh] border p-5 cursor-pointer newArrival ">
                <p className="font-bold text-lg">
                    NEW ARRIVALS
                </p>
                <h1 className="tracking-widest text-3xl font-extrabold mt-2 mb-5 ">
                    GOOD HELP AND GUARD
                </h1>
                <p className="font-rubik">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse. Provident sit odio aliquam repellendus excepturi aut. Minima consequuntur culpa, alias ipsa est impedit voluptatum optio modi eaque praesentium asperiores!
                </p>
            </div >
            <div className="w-full shadow-sm min-[h-50vh] border p-5 cusrsor pointer topTen">
                <p className="font-bold text-lg">
                    BESTSELLER PRODUCT
                </p>
                <h1 className="tracking-widest text-3xl font-extrabold mt-2 mb-5 ">
                    TOP TEN PRODUCTS OF THE WEEK
                </h1>
                <p className="font-rubik">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse. Provident sit odio aliquam repellendus excepturi aut. Minima consequuntur culpa, alias ipsa est impedit voluptatum optio modi eaque praesentium asperiores!
                </p>
            </div>
        </div>
    );
};

export default NewArrival;