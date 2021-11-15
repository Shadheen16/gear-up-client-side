import React from 'react';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';

const Allproducts = () => {
    return (
        <div>
            <header>
                <Navbar/>
                <SharedBanner
                bannerText="Our Collection"
                />
            </header>
            <Products/>
            <Footer/>
        </div>
    );
};

export default Allproducts;