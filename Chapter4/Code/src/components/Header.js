import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  //at each render new variable is made
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array then useEffect on every render
  // if dependency array is not present then everytime it will execute after each render
  // if the dependency array === empty then useEffect is called on only initial render and just oncee
  // if dependency array = [..] then useEffect will be called everytime the element in depArray is changed
  useEffect(() => {
    console.log("Use Effect called");
  }, [btnNameReact]);

  //don't render
  //   let btnName = "Login";
  console.log("render");
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              if (btnNameReact === "Login") setBtnNameReact("Logout");
              else setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
