import React, { useContext } from 'react';
import { ProductContext } from '../../Provider/ProductProvider';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import Product from './Product/Product';

const Products = () => {
    const {products, setProducts} = useContext(ProductContext);
    console.log(products);
    return (
        <div className="py-10">
            <SectionHeader
            headerText="OUR PRODUCTS"
            addClass="text-clr-primary"
            ></SectionHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 md:px-20 gap-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product = {product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;