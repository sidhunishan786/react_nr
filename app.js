import React from "react";
import  ReactDOM from "react-dom/client";

const Jsxheading=()=>(<h1 className="head" tabIndex={5}>this is jsx</h1>);

console.log(Jsxheading);
const HeadingComponent=()=>{
     return (<h1 className="headingreal">
          <Jsxheading/>
          this is my functional components</h1>)
};

const root=ReactDOM.createRoot(document.getElementById("root"));
//components in react
//class Based components OLD
//function Based components NEW

root.render(<HeadingComponent/>);


