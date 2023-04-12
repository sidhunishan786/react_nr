import { Outlet } from "react-router-dom";
import ProfileFunctionalcomponent from "./Profile";
import Profile from "./ProfileClass";
const About=()=>{
    return (
        <div>
       
            <h1>About us </h1>
            <p> this is nishan singh lesson 07 finding  </p>
            <Profile name={"nishan-class"}/>
            <ProfileFunctionalcomponent/>
  
        </div>

    )
}

export default About;