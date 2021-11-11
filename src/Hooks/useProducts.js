import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
    const [products, setproducts] = useState([]);

    useEffect(() =>{
        axios.get('https://stark-bayou-55220.herokuapp.com/services')
        .then(res => setproducts(res.data))
    } ,[])

     
        return {
            products,
            setproducts
        };
}

export default useProducts;