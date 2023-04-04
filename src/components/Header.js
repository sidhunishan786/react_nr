import { useState } from "react";
import { LOGO_URL,RES_LOGO_s } from "../utils/constants";

import { Link } from "react-router-dom";


function checklogin() {
  // is logged in function 
  return true;  
}

const Header=()=>{
  const [searchText,setSearchText]=useState();
  const [login,setlogin]=useState(checklogin());


    return (
      <>
      
      <div id="header">
        <a href="/"><img id="logo" src={RES_LOGO_s}></img></a>
        
        
     <ul id="navg">
     <li><Link to="/">home</Link></li>
     <li><Link to="/contact">contact</Link></li>
     <li><Link to="/about">about</Link></li>
      
      </ul>  

      <img id="user" src={LOGO_URL}/>

      {login?<button id="login" onClick={()=> setlogin(false)}>login</button>: <button id="logout" onClick={()=>setlogin(true)}>logout</button>}
  
    </div>
    
    </>
  
    );
  }

  export default Header;