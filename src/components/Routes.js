import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Roots from "./Roots";
import About from './About';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([

    {
        path : '/',
        element : <Roots></Roots>,
        errorElement : <ErrorPage></ErrorPage>,
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
       
             

        ]
    }, 


    
  ])


  export default router;
