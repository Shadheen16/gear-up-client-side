import React, { useContext } from 'react';
import "./DisplayProducts.css"
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import axios from 'axios';
import { ProductContext } from '../../../../Provider/ProductProvider';

const DisplayProducts = (props) => {
    const {products, setProducts} = useContext(ProductContext)


    const handleDelete = async (id) => {
        console.log(id)
        window.confirm("Are you sure");
        await axios.delete(`https://mysterious-fjord-26460.herokuapp.com/products/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert("Deleted Successfully")
                    const updatedProducts = products.filter((product)=>{
                        return product._id!==id
                    })
                    setProducts(updatedProducts)
                }
            })

    }
    return (
        <div className="mr-5">
            {
                products.map(product => <div
                    key={product._id}
                    className="md:flex  bg-gray-50 py-3 px-4  space-x-2 mb-4 shadow-md sm:space-x-2"
                >
                    <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-5 devide-y-2 devide-solid devide-gray-500 ">
                        <img className="h-md w-md" src={product.image_url} alt="" />
                        <p1>Title: {product.title}</p1>
                        <p1>Quantity: {product.quantity}</p1>
                        <p1>Price: {product.price}</p1>
                    </div>
                    <div className="md:grid border-l-2 border-dashed px-4 space-x-3 md:space-x-0 my-auto space-y-3 ">
                        <button className="h-6 w-6 p-1 rounded full bg-red-500 text-white"><TrashIcon onClick={() => handleDelete(product._id)}></TrashIcon></button>
                        <button className="h-6 w-6 p-1 rounded full bg-gray-600 text-white"><PencilIcon ></PencilIcon></button>
                    </div>
                </div>

                )
            }

        </div>
    );
};

export default DisplayProducts;