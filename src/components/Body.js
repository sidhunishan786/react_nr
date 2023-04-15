import RestaurantCard from "./RestaurantCard";
import { useState,useEffect ,useContext} from "react";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";

import { filterdata } from "../utils/Helper";

import useOnline from "../utils/useOnline";

const Body=()=>{
  const [listOfallRes,setlistOfallRes]=useState([]);
  const [listOfFiltRes,setlistOfFiltRes]=useState([]);
  const [searchText,setSearchText]=useState("");
  const {user,setUser}=useContext(UserContext);



  useEffect(()=>{
    //API call
    getRestaurants();

  },[]);

  async function getRestaurants() {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7512305&lng=76.7583714&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
     
    setlistOfallRes(json?.data?.cards[2]?.data?.data?.cards);  
    setlistOfFiltRes(json?.data?.cards[2]?.data?.data?.cards);  
    
  }
  // if reslist is empty =>shimmer ui
  // if reslist not empty render data
  const offline=useOnline();
  if(!offline){
    return (<h1>!!!!!!!!!!!!!!!!!!!please check your internet connection</h1>);
  }
  if(listOfFiltRes.length===0 && listOfallRes.length===0){
    return <Shimmer/>;
  }

    return (
        <>
        <input className="border-8 focus:bg-green-300" placeholder="name" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }
        }>
        </input>
        <button 
        data-testid="search-btn"
        className="p-5 m-5 bg-purple-500 border-2 border-opacity-100 text-slate-100 rounded-lg  hover:bg-lime-700" onClick={()=>{
          const fil_res_list=filterdata(searchText,listOfallRes);
    
          setlistOfFiltRes(fil_res_list);
        }}>search</button>

        <div id="filter"> <button onClick={()=>{
            //filter logic here 
               const filteredList=listOfallRes.filter(res=>
                res.data.avgRating>4);
                setlistOfFiltRes(filteredList);
                
            

        }} id="filter-btn"> Top rated Restaurants</button> </div>

        <input className="border-2 border-red-500" value={user.name} onChange={(e)=>setUser({name:e.target.value})}>

        </input>
        
      
    <div className="flex flex-wrap p-5 justify-between bg-purple-700" data-testid="res-list">
    {        
          (listOfFiltRes?.length===0)?(<h1>NO restaurant found!!!!!!!!!!!!</h1>): listOfFiltRes.map((res)=>{
        return (<Link to={"/restaurant/"+res.data.id} key={res.data.id}><RestaurantCard key={res.data.id} resData={res}/> </Link> )
      })
    }
    
  
    
  </div>

  </>
    );
  }
export default Body;  