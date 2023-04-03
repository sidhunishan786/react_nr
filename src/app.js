import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header"
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import Footer from "./components/Footer";

const Applayout=()=>{
  return (
    <>

    <Header/>
    <Body/>
    <Footer/>
    
    </>

  );
}


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);
