import { useState } from "react";
// React makes a single object and keeps all states in it
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    //API CALL and if Dependency array empty -> once
    const timer = setInterval(() => {
      console.log("Use Effect");
    }, 1000);

    //when component is unmounting
    return () => {
      clearInterval(timer);
    };

  }, []);

  async function getUserInfo() {}

  return (
    <div className='user-card'>
      <h1>
        Count = {count}, {count2}
      </h1>
      <h2>Name : {name}</h2>
      <h3>Location : Delhi</h3>
      <h3>Contact : zaid25akhter</h3>
    </div>
  );
};
export default User;
