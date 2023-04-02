import { CDN_URL } from "../utils/constants";


const RestaurantCard=(props)=>{
    const {resData}=props;
  
    return (
      
      <div id="rescard"> 
  
      <img id="reslogo" src={CDN_URL+resData.data.cloudinaryImageId}/>
      <h5 >{resData.data.name}</h5>
      <h5>{resData.data.avgRating}</h5>
      <h5 > ₹{resData.data.costForTwo/100} is cost for two </h5>
  
      <h5 >{resData.data.cuisines}</h5>
  
  
      </div>
    )
  
  }

  export default RestaurantCard;