import RestautantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable(JS Fn)
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
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

  console.log("rendered");
  return (
    <div className='body'>
      <div className='filter'>
        <button
          onClick={() => {
            console.log("button-clicked");
            //filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.stars > 4
            );
            setListOfRestaurants(filteredList);
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
        {listOfRestaurants.map((resItem) => {
          return <RestautantCard key={resItem.id} resObj={resItem} />;
        })}
      </div>
    </div>
  );
};
export default Body;
