import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLoaderData } from 'react-router-dom';


 export  const ProuctContext = createContext([])


const Roots = () => {


    const products = useLoaderData()
    console.log(products)

    return (
        <ProuctContext.Provider  value={products}>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </ProuctContext.Provider>
    );
};

export default Roots;