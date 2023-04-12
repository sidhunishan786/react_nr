import { useState } from "react";
import { useEffect } from "react";
const useRestaurant=(resid)=>{
    const [restaurant,setRestaurant]=useState({});

    //get data from API

    

    async function getRestaurantInfo(){

        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.749519850835757&lng=76.75947166979313&restaurantId="+resid+"&submitAction=ENTER");
        const json=await data.json();
        console.log(json.data);
        setRestaurant((json.data));
        
    }

    useEffect(()=>{
        getRestaurantInfo();

    },[]);

    
    //return restaurant data

    return restaurant;

};

export default useRestaurant;