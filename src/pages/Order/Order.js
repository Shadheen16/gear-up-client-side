import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import Footer from '../Shared/Footer/Footer';
import PreLoader from '../Preloader/PreLoader';



const Order = () => {
    const { productId } = useParams();
    console.log(productId)
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    const { register, handleSubmit, control, reset } = useForm();

    //get single product 
    useEffect(() => {
        axios.get(`https://mysterious-fjord-26460.herokuapp.com/products/${productId}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })
    }, [productId]);

    console.log("order:" + productId);

    // order form submit handller
    const onSubmit = (data) => {
        data.product_name = product.title;
        data.product_id = product._id;
        axios.post('https://mysterious-fjord-26460.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert('order successfull');
                    reset();
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="">
            {
                loading ? <PreLoader/> : <div>
                       <Navbar />
            <SharedBanner
                bannerText="Item Details"
            />
            <main className="md:flex mt-10 px-10 md:px-20">
                {/* left */}
                <div className="text-left mb-10 sm:grid grid-cols-2 space-x-5">
                    <div>
                        
                        <div className="max-w-md py-5 rounded-lg overflow-hidden">
                            <img className="w-full rounded-lg" src={product.image_url} alt="" />
                        </div>
                    </div>
                    <div>
                    <h2 className="my-2 text-2xl font-bold">
                            {product.title}
                        </h2>
                        <p className="mb-5">
                            <span className="text-red-500">$ {product.price}</span> /per piece
                        </p>
                        <p>
                            {product.description}
                        </p>
                    </div>


                </div>
                {/* right */}
                <div className="md:ml-5">
                    <h2 className="font-bold text-[5vh] mb-5 ">
                        ORDER NOW
                    </h2>
                    <form className="grid space-y-4 max-w-lg mx-auto mb-10" onSubmit={handleSubmit(onSubmit)}>
                        <div><input className="py-2 px-4 border" placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 50 })} /></div>
                        <div><input className="py-2 px-4 border" placeholder="E-mail" defaultValue={user.email} {...register("email", { required: true, })} /></div>
                        <div><input className="py-2 px-4 border" placeholder="Phone" type="number" {...register("phone", { required: true, min: 10 })} /></div>
                        <div><input className="py-2 px-4 border" placeholder="quantity" {...register("quntity", { required: true, pattern: /^[1-9]/ })} /></div>
                        <div><input type="textarea" className="inline-block h-16 py-2 px-4 border" placeholder="message" {...register("message", {})} /></div>
                        <div>
                            <Controller
                                name="order"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => <input className="py-2 px-4 border bg-gray-100 hover:text-white rounded-full hover:bg-clr-secondary" type="submit" value="confirm order" />}
                            />
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
                </div>
            }
        </div>
    );
};

export default Order;