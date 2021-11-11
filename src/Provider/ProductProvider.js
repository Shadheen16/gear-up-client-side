import React, { createContext } from 'react';
import useProducts from '../Hooks/useProducts';


export const ProductContext = createContext();


const ProductProvider = ({children}) => {
   const productContext = useProducts();
    return (
       <ProductContext.Provider value={productContext}>
           {children}
       </ProductContext.Provider>
    );
};

export default ProductProvider;