import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(-1);
  const { resId } = useParams();
  //   console.log(params);
  // const data = useRestaurantMenu();
  const resInfo = useRestaurantMenu(resId);
  //if resInfo is not got then given undefined
  if (resInfo === null || resInfo === undefined) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines && cuisines.join(",")}</p>

      {categories.map((category, index) => {
        return (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              if (showIndex === index) setShowIndex(-1);
              else setShowIndex(index);
            }}
          />
        );
      })}

      {/* <h3>{costForTwoMessage}</h3>
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
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

// Restaurant should manage the collapse
