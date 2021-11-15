import React from 'react';
import AddProducts from './AddProducts/AddProducts';
import DisplayProducts from './DisplayProducts/DisplayProducts';

const ManageProducts = () => {
    return (
        <div className="w-full  text-center">
            <div className="mx-auto">
                 <AddProducts/>
            </div>

            <div>
                <DisplayProducts/>
            </div>
        </div>
    );
};

export default ManageProducts;