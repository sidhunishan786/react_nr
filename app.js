import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
  return (
    
    <div id="header">
      <img id="logo" src="https://cdn.vectorstock.com/i/1000x1000/13/80/organic-food-restaurant-logo-vector-17131380.webp"></img>
      <input id="search"></input>
   <ul id="navg">
    <li>home</li>
    <li>contact</li>
    <li>about</li>
    
    </ul>  
    <img id="user" src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"/>

  </div>
    


  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header/>);
