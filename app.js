import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
  return (
    <div className="header">
      <div> 
        <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Delicious-food-yummy-logo-by-yahyaanasatokillah-580x387.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
          
        </ul>

      </div>
    </div>
  );
}

const RestaurantCard=(name,rating,eta,foodlist)=>{
  return (
    <div className="res-card">
      <img className="res-logo" src="https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1" /> 
      <h3>{name}</h3>
      <h4>{foodlist}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
      
      
    </div>
  );
}
const resname=['foodpoint','isa','rest','hehe','chd','foodpoint','isa','rest','hehe','chd'];
const rating=['1','2','3','4','5','1','2','3','4','5'];
const eta=['12','14','34','345','23','12','14','34','345','23'];
const foodls=['asian','north'];

function helparray(i) {
  return (
    <div>
      {RestaurantCard(resname[i],rating[i],eta[i],foodls)}
    </div>

  );
}

const  mainfun=()=>{
  const ls=[];
  for (let index = 0; index < resname.length; index++) {
    console.log(helparray(index));
    ls.push(helparray(index));
    
  }
  return (
    <div className="res-container">
      {ls}
    </div>
  );

}


const Body=()=>{
  return (
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container1">
        {
        mainfun()                 

        }
        
      </div>
    </div>

  );
}

const Applayout=()=>{
  // header 
  // body
  //footer 
  return (
    <div className="app">
      <Header/>
      <Body/>

    </div>
  );

}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);
