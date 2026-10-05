import { useContext } from "react";
import CompB from "./CompB";
import UserContext from "../../context/UserContext";

const CompA = () => {
  const { count } = useContext(UserContext);

  return (
    <>
      <h2>CompA {count}</h2>

      <hr />

      <CompB />
    </>
  );
};

export default CompA;
