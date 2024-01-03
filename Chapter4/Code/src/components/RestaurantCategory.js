import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  //   const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setShowIndex();
    //   setVisible((prevVisible) => !prevVisible);
  };
  return (
    <div>
      {/* Accordion Header */}
      <div className='cursor-pointer w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4'>
        <div className='flex justify-between' onClick={handleClick}>
          <span className='font-bold text-lg'>
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
