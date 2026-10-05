import { useContext } from "react";
import UserContext from "../../context/UserContext";

const CompB = () => {
  const presonContext = useContext(UserContext);

  return (
    <>
      <h1>
        name: {presonContext.name} age: {presonContext.age}
      </h1>
    </>
  );
};

export default CompB;
