import { URL } from "../utils/constants";

const RestautantCard = ({ resObj }) => {
  const { info, analytics, cta } = resObj;
  return (
    <div
      className='res-card'
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className='res-logo' alt='food' src={URL+info.cloudinaryImageId} />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(",")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
};

export default RestautantCard;
