import { useDispatch } from "react-redux";
import { URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
//   console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
    //   {
    //     payload : "pizza"
    //   }
    //action(action.payload)
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className='p-2 m-2 flex border-gray-200 border-b-2 text-left justify-between'
          >
            <div className='w-9/12'>
              <div className='py-4'>
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div>
                <p className='text-xs'>{item?.card?.info?.description}</p>
              </div>
            </div>
            <div className='w-3/12'>
              <button
                className='p-2 mx-16 rounded-lg bg-black shadow-lg text-white  absolute'
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
              <img src={URL + item.card.info.imageId} className='w-56' />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
