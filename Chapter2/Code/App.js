// this import not in normal js

import React from "react";
import ReactDOM from "react-dom/client";

/*
nested structure

<div id = "parent">
  <div id = "child1">
    <h1>I'm h1 tag</h1>
  </div>
  <div id = "child2">
    <h1>I'm h1 tag</h1>
  </div>
</div>

*/

// {} -> for attributes
// "Hello World From React -> children prop"
// heading -> is an object
// ReactElement(Object) => HTML(Browser Understands)
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is me"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

// JSX
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World From React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// parent inside the root tag
// replace anything in <div id = "root">
