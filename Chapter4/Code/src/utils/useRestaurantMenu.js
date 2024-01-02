import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


//this is not functional component because JSX is not returned in this
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
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

  return resInfo;
};

export default useRestaurantMenu;
