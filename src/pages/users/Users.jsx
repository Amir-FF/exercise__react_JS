import { useLocation } from "react-router";

const Users = () => {
  // codes

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  console.log(useLocation());

  return (
    <>
      <h3>Users Page</h3>
      <h3>name: {query.get("name")}</h3>
      <h3>age: {query.get("age")}</h3>
    </>
  );
};

export default Users;
