import RestaurantCard from "./RestaurantCard";

import { useState } from "react";







import reslist from "../utils/mockData";
const Body=()=>{
  const [listOfRes,setlistOfRes]=useState(reslist)

  
    return (
        <>
       
        <div id="filter"> <button onClick={()=>{
            //filter logic here 
            console.log(listOfRes.length);
           

            const filteredList=listOfRes.filter(res=>
                res.data.avgRating>4);
                setlistOfRes(filteredList);
            
                console.log(listOfRes.length);
                

        }} id="filter-btn"> Top rated Restaurants</button> </div>
        
      
    <div id="restaurants">
    {
      listOfRes.map((res)=>{
        return <RestaurantCard key={res.data.id} resData={res}/>
      })
    }
    
  
    
  </div>

  </>
    );
  }
export default Body;  