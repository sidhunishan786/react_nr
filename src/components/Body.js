import RestaurantCard from "./RestaurantCard";

import reslist from "../utils/mockData";
const Body=()=>{
    return (
      
    <div id="restaurants">
    {
      reslist.map((res)=>{
        return <RestaurantCard key={res.data.id} resData={res}/>
      })
    }
  
    
  </div>
    );
  }
export default Body;  