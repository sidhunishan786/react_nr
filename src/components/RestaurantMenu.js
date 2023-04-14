import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu=()=>{
    const params=useParams();
    
    const {resid}= params;
    const restaurant=useRestaurant(resid);
    const dispatch=useDispatch();

    const handleAddItem=(e)=>{
    
        dispatch(addItem(e));
    }
    const lisofi=['apple','banana','carrot','orange','pine','pepsi'];

    return restaurant.cards? (
        
        <div>
            <h1>Res id:{resid}</h1>
            <div>
                

            </div>
            <h2>res name{restaurant.cards[0].card.card.info.name}</h2>
            <h2>city {restaurant.cards[0].card.card.info.city}</h2>
            <h2>res area : {restaurant.cards[0].card.card.info.locality}</h2>
            <h2>res cost for 2: {restaurant.cards[0].card.card.info.costForTwo}</h2>
            <h2>res avgrating : {restaurant.cards[0].card.card.info.avgRating}</h2>
            <img src={`${CDN_URL}${restaurant.cards[0].card.card.info.cloudinaryImageId}`}></img>
           {lisofi.map((e)=><button className="px-4 bg-green-400 m-7" onClick={()=>handleAddItem(e)}>{e}</button>)}
            
        </div>
    ):<h1>Loading   </h1>;
}

export default RestaurantMenu;