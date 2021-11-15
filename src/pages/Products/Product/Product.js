import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button'

const Product = (props) => {
    const product = props.product;
    console.log("From product card", product)
    const { _id, image_url, price, title} = product;
    return (
        <div className="mx-auto mb-5 text-left bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
            <img className="w-full" src={image_url} alt="" />
            <div className="px-6 py-4">
                <div className="mb-2">{title}</div>
                <p className="text-clr-secondary text-base mt-5">
                   <span>$</span>{price}
                </p>
            </div>
            <div className="px-6 pt-4 pb-5">
                <Link to={`/products/${_id}`}>
                    <Button
                        btnText="show detail"
                    ></Button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Product;