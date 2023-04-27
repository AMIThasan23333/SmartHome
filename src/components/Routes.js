import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Roots from "./Roots";
import About from './About';
import ErrorPage from './ErrorPage';
import Shop from './Shop';
import Cart from './Cart';
import { myFunc, productCart } from "./CartProduct";

const router = createBrowserRouter([

    {
        path : '/',
        element : <Roots></Roots>,
        errorElement : <ErrorPage></ErrorPage>,
        loader : productCart,
        children : [

    { 

    path : '/',
    element : <Home></Home>
            
    }, 
    { 

        path : '/home',
        element : <Home></Home>
                
    }, 

    { 

        path : '/about',
        element : <About></About>
                
    }, 

    { 

        path : '/shop',
        element : <Shop></Shop>
                
    }, 

    
    { 

        path : '/cart',
        element : <Cart></Cart>
                
    }, 
       
             

        ]
    }, 


    
  ])


  export default router;
