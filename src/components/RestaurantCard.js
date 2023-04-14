import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

import { useContext } from "react";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {user}=useContext(UserContext)
  
    return (
      
      <div className="w-52 p-3 m-3 shadow-lg bg-pink-500"> 
  
      <img id="reslogo" src={CDN_URL+resData.data.cloudinaryImageId}/>
      <h5 className="font-bold text-xl">{resData.data.name}</h5>
      <h5>{resData.data.avgRating}</h5>
      <h5 > ₹{resData.data.costForTwo/100} is cost for two </h5>
  
      <h5 >{resData.data.cuisines}</h5>
      <span className="border-8 border-rose-300">{user.name}</span>
      </div>
    )
  
  }

  export default RestaurantCard;