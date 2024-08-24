import React from "react";
import ReactDOM from "react-dom/client";

//react element

const heading=React.createElement(
        "div",
        {id:"heading"},
        "Namaste Manya " 
);
   console.log(heading);

   //jsx- html like syntax
   const jsxHeading= <h1 id="heading"> Namaste React Using JSX</h1>;
   console.log(jsxHeading);

   const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);