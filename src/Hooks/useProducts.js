import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get('https://stark-bayou-55220.herokuapp.com/products')
        .then(res => setProducts(res.data))
    } ,[])

     
        return {
            products,
            setProducts
        };
}

export default useProducts;