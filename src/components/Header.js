import { useState } from "react";
import { LOGO_URL,RES_LOGO_s } from "../utils/constants";

import { Link } from "react-router-dom";


function checklogin() {

  return true;  
}

const Header=()=>{
  const [searchText,setSearchText]=useState();
  const [login,setlogin]=useState(checklogin());


    return (
      <>
      
      <div className="flex space-y-7 justify-between bg-lime-400 shadow-inner sm:bg-blue-600">
        <a href="/"><img className="h-28 px-2 py-2" id="logo" src={RES_LOGO_s}></img></a>
        
        
     <ul className="flex py-10 ">
     <li className="px-10"><Link to="/">home</Link></li>
     <li className="px-10"><Link to="/contact">contact</Link></li>
     <li className="px-10"><Link to="/about">about</Link></li>
      <li className="px-10"><Link to="/instamart">instamart</Link></li>
      </ul>  

      <img className="h-20" id="user" src={LOGO_URL}/>

      {login?<button id="login" onClick={()=> setlogin(false)}>login</button>: <button id="logout" onClick={()=>setlogin(true)}>logout</button>}
  
    </div>
    
    </>
  
    );
  }

  export default Header;