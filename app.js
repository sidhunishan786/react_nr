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

const RestaurantCard=(props)=>{
  console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" src="https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1" /> 
      <h3>{props.name}</h3>
      <h4>{props.foodls}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.eta}</h4>
      
      
    </div>
  );
}






const Body=()=>{
  return (
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container">
        <RestaurantCard name="meghna foods" rating="5.6" eta="28min" foodls="north asian"/>
        
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
