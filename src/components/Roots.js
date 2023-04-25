import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


  const ProuctContext = createContext([])


const Roots = () => {


    return (
        <ProuctContext.Provider  value={[]}>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </ProuctContext.Provider>
    );
};

export default Roots;