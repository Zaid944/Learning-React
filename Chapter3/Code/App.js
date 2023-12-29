import React from "react";
import ReactDOM from "react-dom/client";

// React Element(object) => when we render(HTML Element)
const heading = React.createElement("h1", { id: "heading" }, "Hello I'm here");

const elem = <span>React Element</span>;

const reactElement = <h1>Hello {elem}</h1>;

const Title = () => {
  return (
    <>
      {reactElement}
      <h1 tabIndex='4' className='head'>
        Hello World
      </h1>
    </>
  );
};

// const data = api.getData();

//React Component
// Class based Components, Functional Components
// Functional Component -> function returning JSX
const HeadingComponent = () => {
  return (
    <div id='container'>
      {/* {data} */}
      <Title />
      {Title()}
      <h1>Hello Functional Component</h1>
    </div>
  );
};

// console.log(jsxHeading);
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
//this will replace everything in div id = "root"

// JSX != HTML in Javascript -> Javascript Syntax for making react easier
// JS engine understands es6 not JSX
// JSX transpiled before it reaches the JS engine
// PARCEL -> transpiling the JSX(Babel)

// JSX    ->     React.createElement   ->   React Element-JS Object       ->          HTML Element(render)
//     (babble)                     (React)                         (JS Engine,HTML)
//Component Composition
