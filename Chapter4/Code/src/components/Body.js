import RestautantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { setUserInfo, loggedInUser } = useContext(UserContext);
  //whenever we are typing searchText whole body is re-rendered
  //Local State Variable(JS Fn)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //Normal JS Variable
  //   let listOfRestaurantsJS = [
  //     {
  //       id: 3,
  //       name: "Meghna Foods",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       stars: "3.8",
  //       time: "38 mins",
  //     },
  //     {
  //       id: 5,
  //       name: "My Restaurant",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       stars: "5",
  //       time: "100 mins",
  //     },
  //   ];
  const RestaurantCardPromoted = withPromotedLabel(RestautantCard);
  // after our component renders
  // render the component->api call->render
  console.log(filteredRestaurants);
  useEffect(() => {
    fetchData();
    console.log("Use effect called");
  }, []);
  //whenever state  updates react starts a reconciliation cycle
  async function fetchData() {
    //data -> promise
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6888691&lng=77.1567848&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    // console.log(jsonData);
    console.log(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // Optional Chaining
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  console.log("rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  //conditional rendering
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter flex'>
        <div className='search m-4 p-4'>
          <input
            type='text'
            className='border border-solid border-black'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className='px-4 py-2 bg-green-100 m-4 rounded-lg'
            onClick={() => {
              //Filter the restaurant
              //search text
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className='m-4 p-4 flex items-center'>
          <button
            className='px-4 py-2 bg-gray-100 m-4 rounded-lg'
            onClick={() => {
              console.log("button-clicked");
              //filter logic
              const filteredList = filteredRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
              // console.log(listOfRestaurants);
            }}
            onMouseOver={() => {
              console.log("Mouse-Over");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className='m-4 p-4 flex items-center'>
          <label>UserName</label>
          <input
            type='text'
            className='border border-blue-600'
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className='res-container flex flex-wrap'>
        {filteredRestaurants.map((resItem) => {
          return (
            <Link key={resItem.info.id} to={"/restaurant/" + resItem.info.id}>
              {/*if restaurant is promoted then make it promoted*/}
              {resItem.info.avgRating < 4 ? (
                <RestaurantCardPromoted resObj={resItem} />
              ) : (
                <RestautantCard resObj={resItem} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
