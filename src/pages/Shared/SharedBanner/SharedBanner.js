import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './SharedBanner.css'

const SharedBanner = ({bannerText}) => {
    return (
        <div id="sharedBanner" className=" min-h-[55vh] sm:min-h-[60vh] md:min-h-[70vh]">
            <div className="absolute top-[40%] w-full text-center">
                <h1 className="text-white mt-10 text-[36px] md:text-[48px] lg:text-[64px]">
                        {bannerText}
                </h1>
            </div>
              
        </div>
    );
};

export default SharedBanner;