import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header"
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import About from "./components/About";

import Error from "./components/Error";
import Contact from "./components/Contact";

import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";



const Applayout=()=>{
  return (
    <>

    <Header/>
    <Outlet/>
    <Footer/>
    
    </>

  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Error/>, 
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }

    ]

  },
  
  
  
]);



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
