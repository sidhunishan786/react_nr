import React from "react";
import ReactDOM from "react-dom/client";

const Jsxheading = () => (
  <h1 className="head" tabIndex={5}>
    this is jsx
  </h1>
);
const number = 1000;
console.log(Jsxheading);
const HeadingComponent = () => {
  return (
    <h1 className="headingreal">
      {number}
      this is my functional components
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
//components in react
//class Based components OLD
//function Based components NEW

root.render(<HeadingComponent />);
root2.render(Jsxheading());
