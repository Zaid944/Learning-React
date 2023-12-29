import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
NavBar, Logo
Body
Restaurant Card
Img
Name of Res
Search
Card -> Restaurants
Footer
Links, Copyright, Address
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://image.freepik.com/free-vector/food-app-icon-logo_29069-50.jpg'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestautantCard = ({ resObj }) => {
  const { name, cuisine, stars, time } = resObj;
  return (
    <div
      className='res-card'
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className='res-logo'
        alt='food'
        src='https://tse3.mm.bing.net/th?id=OIP.p0KaOpfzw_8WAXPvNKhmhwHaHa&pid=Api&P=0&h=180'
      />
      <h3>{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{stars}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "Meghna Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    stars: "4.4 stars",
    time: "38 mins",
  },
  {
    id: 2,
    name: "Meghna Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    stars: "4.4 stars",
    time: "38 mins",
  },
  {
    id: 3,
    name: "Meghna Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    stars: "4.4 stars",
    time: "38 mins",
  },
  {
    id: 4,
    name: "Meghna Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    stars: "4.4 stars",
    time: "38 mins",
  },
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map((resItem) => {
          return <RestautantCard key={resItem.id} resObj={resItem} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
