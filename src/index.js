import React from "react";
import ReactDOM from "react-dom";

var fName = "Monica";
var lName = "Santos";
var number = "7";

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p> Your lucky number is {number}.</p>
  </div>,
  document.getElementById("root")
);
