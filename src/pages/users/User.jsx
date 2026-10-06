import { useParams } from "react-router";

const User = () => {
  // codes
  const { id } = useParams();

  return (
    <>
      <h3>Page User: {id} </h3>
    </>
  );
};

export default User;
