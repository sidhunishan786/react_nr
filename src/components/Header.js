import { useState } from "react";
import { LOGO_URL,RES_LOGO_s } from "../utils/constants";


const Header=()=>{
  const [searchText,setSearchText]=useState();
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
  
    </div>
    
    </>
  
    );
  }

  export default Header;