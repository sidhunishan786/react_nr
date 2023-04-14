import { useState } from "react";
import { LOGO_URL,RES_LOGO_s } from "../utils/constants";

import { Link, useSearchParams } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";


function checklogin() {

  return true;  
}

const Header=()=>{
  const [searchText,setSearchText]=useState();
  const [login,setlogin]=useState(checklogin());

  const {user}=useContext(UserContext);
  const cartItems=useSelector(store=> store.cart.items);



    return (
      <>
      
      <div className="flex space-y-7 justify-between bg-lime-400 shadow-inner sm:bg-blue-600">
        <a href="/"><img className="h-28 px-2 py-2" id="logo" src={RES_LOGO_s}></img></a>
        
        
     <ul className="flex py-10 ">
     <li className="px-10"><Link to="/">home</Link></li>
     <li className="px-10"><Link to="/contact">contact</Link></li>
     <li className="px-10"><Link to="/about">about</Link></li>
      <li className="px-10"><Link to="/instamart">instamart</Link></li>
      <li className="px-10"><Link to="/cart">cart-{cartItems.length}items</Link></li>
      </ul>  

      <img className="h-20" id="user" src={LOGO_URL}/>
      <h1 className="border border-red-500 text-green-600 h-8 bg-purple-500">
        {user.name}
        </h1>
      {login?<button id="login" onClick={()=> setlogin(false)}>login</button>: <button id="logout" onClick={()=>setlogin(true)}>logout</button>}
  
    </div>
    
    </>
  
    );
  }

  export default Header;