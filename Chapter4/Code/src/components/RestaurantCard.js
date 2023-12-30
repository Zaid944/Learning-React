import { URL } from "../utils/constants";

const RestautantCard = ({ resObj }) => {
  const { name, cuisine, stars, time } = resObj;
  return (
    <div
      className='res-card'
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className='res-logo'
        alt='food'
        src={URL}
      />
      <h3>{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{stars}</h4>
      <h4>{time}</h4>
    </div>
  );
};



export default RestautantCard