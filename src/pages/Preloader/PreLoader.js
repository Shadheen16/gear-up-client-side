import React from 'react';
import preloaderGif from '../../Images/preloader/gearloading.gif'

const PreLoader = () => {
    return (
        <div  className="min-h-[100vh] w-full flex items-center">
                <img id="loader" className="mx-auto" src={preloaderGif} alt="" />

        </div>
    );
};

export default PreLoader;