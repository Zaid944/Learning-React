import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
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
  const onlineStatus = useOnlineStatus();
  //don't render
  //   let btnName = "Login";

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  console.log("render");
  return (
    <div className='flex justify-between shadow-lg m-2 bg-pink-100 h-[200px] sm:bg-yellow-50 lg:bg-green-50'>
      <div className='logo-container'>
        <img className='w-56 h-[200px]' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            Online Status : {onlineStatus ? "online" : "offline"}
          </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>Cart</li>
          <button
            className='login'
            onClick={() => {
              if (btnNameReact === "Login") setBtnNameReact("Logout");
              else setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
