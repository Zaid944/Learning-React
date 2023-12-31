import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log(params);
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    console.log(MENU_API + resId);
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  //if resInfo is not got then given undefined 
  if (resInfo === null || resInfo === undefined) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className='menu'>
      <h1>{name}</h1>
      <h3>{cuisines && cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <img />
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((itemCard) => {
            return (
              <li key={itemCard?.card?.info?.id}>
                {itemCard?.card?.info?.name} -{" "}
                {itemCard?.card?.info?.price / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
