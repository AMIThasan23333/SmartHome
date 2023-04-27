import React, { createContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';


 export  const ProuctContext = createContext([])

 export const CartContext =  createContext([])



const Roots = () => {


    const{products, initialCart} = useLoaderData()
    const [cart , setCart] = useState(initialCart)

    

    return (
        <ProuctContext.Provider  value={products}>
                 <CartContext.Provider  value={[cart , setCart]}>

                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>

                 </CartContext.Provider>
            
        </ProuctContext.Provider>
    );
};

export default Roots;