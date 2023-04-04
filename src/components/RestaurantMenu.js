import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const params=useParams();
    
    const {resid}= params;

    const [restaurant,setRestaurant] =useState({});

    useEffect(()=>{
        getRestaurantInfo();


    },[]);

    async function getRestaurantInfo(){
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.749519850835757&lng=76.75947166979313&restaurantId="+resid);
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data);


    }

    return (
        <div>
            <h1>Res id:{resid}</h1>
            <h2>{restaurant.name}</h2>
            

        </div>
    );
}

export default RestaurantMenu;