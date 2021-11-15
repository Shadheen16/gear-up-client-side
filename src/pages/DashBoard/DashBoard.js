import React from 'react';
import { Outlet } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import SideBar from './SideBar/SideBar'

const DashBoard = () => {
    const {admin, user} = useAuth();
    return (
        <div className="">
            <div className="tracking-wider flex">
                <aside className="w-0 opacity-0 sm:w-56 sm:opacity-100 transform transition-all duration-300 ease-in">
                    <SideBar />
                </aside>
                <main className="w-full text-center sm:ml-5">
                    <h1 className="my-5 text-4xl text-extra-bold font-rubik mx-auto border-b-2 pb-5">
                        Welcome {user.displayName}
                    </h1>
                    <Outlet />
                </main>
            </div>
        </div>

    );
};

export default DashBoard;