import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { lazy } from "react";
import Header from "./components/Header"
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";
import About from "./components/About";
import { Suspense } from "react";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import "../index.css"
import RestaurantMenu from "./components/RestaurantMenu";
//import Instamart from "./components/Instamart";
const Instamart=lazy(()=>{return import("./components/Instamart.js")});
//ondemand loading 
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
        element:<About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: "/restaurant/:resid",
        element:<RestaurantMenu/>,
      },
      {
        path: "/instamart",
        element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense> ,
      }


    ]

  },
    
]);



const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);
