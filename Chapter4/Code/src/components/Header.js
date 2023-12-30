import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  //at each render new variable is made
  const [btnNameReact, setBtnNameReact] = useState("Login");
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
