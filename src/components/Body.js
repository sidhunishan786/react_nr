import RestaurantCard from "./RestaurantCard";

import { useState } from "react";


import reslist from "../utils/mockData";
const Body=()=>{
    console.log(reslist.length);
    return (
        <>
        <div id="filter"> <button onClick={()=>{
            //filter logic here 
            
            reslist=reslist.filter(res=>
                res.data.avgRating>4);
            console.log(reslist.length);    

        }} id="filter-btn"> Top rated Restaurants</button> </div>
        
      
    <div id="restaurants">
    {
      reslist.map((res)=>{
        return <RestaurantCard key={res.data.id} resData={res}/>
      })
    }
    
  
    
  </div>

  </>
    );
  }
export default Body;  