import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/solid';
import './Banner.css'
import bannerImage from '../../../../Images/banner/banner.jpg'
const Banner = () => {
    const handleClick = () => {
        window.scroll({
            top: 500, 
            left: 0, 
            behavior: 'smooth' 
           });
    }
    return (
        <div id="banner" className=" bg-red-300 min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[100vh]">
                {/* <img className="max-h-[300px] sm:max-h-[400px] md:max-h[600px] lg:max-h-[632px] xl:max-h-[screen] w-full" src={bannerImage} alt=""/> */}
            <h1>Lorem ipsum!</h1>
               
        </div>
    );
};

export default Banner;