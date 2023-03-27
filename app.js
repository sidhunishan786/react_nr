import React from "react";
import  ReactDOM from "react-dom/client";


const x={color : 'red',padding:'100px'};
const y=React.createElement("div",{},[React.createElement('h1',{style:x},"hello")]);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(y);