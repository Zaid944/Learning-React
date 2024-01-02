import { URL } from "../utils/constants";

const RestautantCard = ({ resObj }) => {
  const { info, analytics, cta } = resObj;
  return (
    <div
      className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'
    >
      <img
        className='rounded-lg'
        alt='food'
        src={URL + info.cloudinaryImageId}
      />
      <h3 className='font-bold py-2 text-lg'>{info.name}</h3>
      <p>{info.cuisines.join(",")}</p>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
};

export default RestautantCard;
