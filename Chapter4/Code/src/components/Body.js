import RestautantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
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

  // after our component renders
  // render the component->api call->render
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

  if(onlineStatus===false){
    return <h1>Looks like you are offline</h1>
  }
  //conditional rendering
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
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
          className='filter-btn'
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurants.map((resItem) => {
          return (
            <Link key={resItem.info.id} to={"/restaurant/" + resItem.info.id}>
              <RestautantCard resObj={resItem} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
