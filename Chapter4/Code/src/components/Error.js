import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      oops something went wrong
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
