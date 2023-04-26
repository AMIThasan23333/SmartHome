import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Roots from "./Roots";
import About from './About';
import ErrorPage from './ErrorPage';
import Shop from './Shop';
import Cart from './Cart';

const router = createBrowserRouter([

    {
        path : '/',
        element : <Roots></Roots>,
        errorElement : <ErrorPage></ErrorPage>,
        loader : () => fetch("products.json"),
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
