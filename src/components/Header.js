import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (
      <>
      
      <div id="header">
        <img id="logo" src={LOGO_URL}></img>
        <input id="search"></input>
     <ul id="navg">
      <li>home</li>
      <li>contact</li>
      <li>about</li>
      
      </ul>  
      <img id="user" src=""/>
  
    </div>
      
    </>
  
    );
  }

  export default Header;