import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600  bg-clr-nav font-rubik">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link to="/" className="flex \  items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white p-2 bg-clr-secondary rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-3 text-xl text-white"><Logo/></span>
                        </Link>
                        <p className="mt-2 text-sm text-white">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="  text-white tracking-widest text-md mb-3">Menu</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/dashboard" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">DashBoard</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Login</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Blogs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="  text-white tracking-widest text-md mb-3">Menu</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/dashboard" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">DashBoard</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Login</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Blogs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="  text-white tracking-widest text-md mb-3">Menu</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/dashboard" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">DashBoard</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Login</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Blogs</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="  text-white tracking-widest text-md mb-3">Menu</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/dashboard" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">DashBoard</Link>
                                </li>
                                <li>
                                    <Link to="/register" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Login</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-white hover:text-clr-secondary hover:translate-x-1 transform translate-all duration-150 ease-out" href="#">Blogs</Link>
                                </li>
                            </nav>
                        </div>
                     
                    </div>
                </div>
                <div className="bg-clr-nav border-t">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left">© 2022 Arif Arman —
                            <Link to="/" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Geary</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link to="/" className="text-gray-200">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="ml-3 text-gray-200">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="ml-3 text-gray-200">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="ml-3 text-gray-200">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;