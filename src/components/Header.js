import { useState } from "react";
import { LOGO_URL,RES_LOGO_s } from "../utils/constants";

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
        <img id="logo" src={RES_LOGO_s}></img>
        
     <ul id="navg">
      <li>home</li>
      <li>contact</li>
      <li>about</li>
      
      </ul>  

      <img id="user" src={LOGO_URL}/>

      {login?<button id="login" onClick={()=> setlogin(false)}>login</button>: <button id="logout" onClick={()=>setlogin(true)}>logout</button>}
  
    </div>
    
    </>
  
    );
  }

  export default Header;