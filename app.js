import React from "react";
import  ReactDOM from "react-dom/client";
const ob={'color':'red'};
// react element
const heading=React.createElement("h1",{'style':ob},"hello ");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);