import UserContext from "../utils/UserContext";
import { URL } from "../utils/constants";
import { useContext } from "react";
const RestautantCard = ({ resObj }) => {
  const { info, analytics, cta } = resObj;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <img
        className='rounded-lg'
        alt='food'
        src={URL + info.cloudinaryImageId}
      />
      <h3 className='font-bold py-2 text-lg'>{info.name}</h3>
      <p>{info.cuisines.join(",")}</p>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

//Higher Order Component
// input -> Restaurant Card
// output -> Restaurant Card (Promoted)

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestautantCard;
