import React from 'react';
import { Link } from 'react-router-dom';
import { CollectionIcon, GiftIcon, UserGroupIcon } from '@heroicons/react/solid'
import useAuth from '../../../Hooks/useAuth';

const SideBar = () => {

const {admin} = useAuth();
console.log("admin",admin);

    return (
        <div>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div className="min-h-screen flex flex-row bg-gray-100">
                <div className="flex flex-col w-56 bg-white border-r-2 shadow-xl overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                <span className="text-sm font-medium">Home</span>
                            </Link>
                        </li>
                        {
                            admin &&  <div>
                                <li>
                            <Link to="/dashboard/manage-products" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><CollectionIcon className="w-5 h-5" /></span>
                                <span className="text-sm font-medium">Mannage Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manage-orders" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><GiftIcon className="w-5 h-5" /></span>
                                <span className="text-sm font-medium">Manage Orders</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manage-roles" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><UserGroupIcon className="w-5 h-5" /></span>
                                <span className="text-sm font-medium">Manage Roles</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                            </div>
                        }
                        {
                         admin || <div>
                               <li>
                            <Link to="/dashboard/my-orders" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><GiftIcon className="w-5 h-5" /></span>
                                <span className="text-sm font-medium">My orders</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/payment" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><GiftIcon className="w-5 h-5" /></span>
                                <span className="text-sm font-medium">Payment</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                         </div>
                        }

                        <li>
                            <Link to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                                <span className="text-sm font-medium">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;