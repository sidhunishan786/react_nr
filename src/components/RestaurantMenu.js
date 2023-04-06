import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";

const RestaurantMenu=()=>{
    const params=useParams();
    
    const {resid}= params;


    const [restaurant,setRestaurant] =useState({});

    

    async function getRestaurantInfo(){

        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.749519850835757&lng=76.75947166979313&restaurantId="+resid+"&submitAction=ENTER");
        const json=await data.json();
        console.log(json.data);
        setRestaurant((json.data));
        

    }
    useEffect(()=>{
        getRestaurantInfo();

    },[]);

    return restaurant.cards? (
        <div>
            <h1>Res id:{resid}</h1>
            <h2>res name{restaurant.cards[0].card.card.info.name}</h2>
            <h2>city {restaurant.cards[0].card.card.info.city}</h2>
            <h2>res area : {restaurant.cards[0].card.card.info.locality}</h2>
            <h2>res cost for 2: {restaurant.cards[0].card.card.info.costForTwo}</h2>
            <h2>res avgrating : {restaurant.cards[0].card.card.info.avgRating}</h2>
            <img src={`${CDN_URL}${restaurant.cards[0].card.card.info.cloudinaryImageId}`}></img>
        </div>
    ):<h1>Loading   </h1>;
}

export default RestaurantMenu;