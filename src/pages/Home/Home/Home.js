import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import NewArrival from '../components/NewArrival/NewArrival';

const Home = () => {
    return (
        <div id="home" className="text-[#181B23]">
           <header>
               <Navbar/>
               <Banner/>
           </header>
           <main>
               <section id="our_products">
                   <Products/>
               </section>
               <section id="newArrival" className="mx-10 md:mx-20 mb-10">
                   <NewArrival/>
               </section>
           </main>
           <Footer/>
        </div>
    );
};

export default Home;