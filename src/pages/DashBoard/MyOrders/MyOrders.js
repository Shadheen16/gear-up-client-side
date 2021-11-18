import { BadgeCheckIcon, XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {user} = useAuth();
    console.log("here is my order", myOrders);

    // get orders by eemail

    useEffect(() => {
     axios.post('https://mysterious-fjord-26460.herokuapp.com/my-orders', user)
    .then(res=> {
        console.log('my order', res.data)
        setMyOrders(res.data)});
    },[]);

    return (
        <div>
                  {/* orders summary table */}
                  <div>
              {
                  myOrders.length?  <div className="container sm:px-10 text-gray-600 mt-10 shadow-xl">
                    <table className="text-center w-full ">
                        <thead className="bg-gray-100 rounded-lg last-child:rounded-b-xl  flex text-clr-primary w-full">
                            <tr className="flex w-full border-b-2 mb-4">
                                <th className="p-4"># Sl</th>
                                <th className="p-4 w-1/4">Product</th>
                                <th className="p-4 w-1/4">Customer Name</th>
                                <th className="p-4 w-1/4">Customer E-mail</th>
                                <th className="p-4 w-1/4">Customer Phone</th>
                                <th className="p-4 w-1/4">Status</th>
                                <th className="p-4 w-1/4">Action</th>
                            </tr>
                        </thead>
                        {/* <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! --> */}
                        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll scrollbar-hide w-full h-[50vh]">
                            {

                                myOrders.map(myOrder => <tr
                                    key={MyOrders._id}
                                    className="flex w-full border-b-2 text-center">
                                    <td className="p-4">{myOrders.indexOf(myOrder) + 1}</td>
                                    <td className="p-4 w-1/4">{myOrder.product_name}</td>
                                    <td className="p-4 w-1/4">{myOrder.name}</td>
                                    <td className="p-4 w-1/4">{myOrder.email}</td>
                                    <td className="p-4 w-1/4">{myOrder.phone}</td>
                                    <td className="p-4 w-1/4">{myOrder.status}</td>
                                    <td className="p-4 w-1/4 space-y-2">
                                        <BadgeCheckIcon id="approved" className="h-6 w-6 mx-auto text-gray-300 cursor-pointer hover:scale-110 transform transition-all duration-300 hover:text-gray-500 ease-out"></BadgeCheckIcon>
                                        <XCircleIcon id="cancel" className="h-6 w-6 mx-auto text-gray-300 hover:text-gray-500 cursor-pointer hover:scale-110 transform transition-all duration-300 ease-out"></XCircleIcon>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> : <h1>You Have No orders</h1>
              }
            </div>
        </div>
    );
};

export default MyOrders;