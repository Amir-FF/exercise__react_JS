import { useNavigate } from "react-router";

const Home = () => {
  // codes
  const navigate = useNavigate();
  const redirectToUsersPage = () => {
    navigate("/users", { state: { name: "ali", age: 32 } });
  };

  return (
    <>
      <h3>Home Page</h3>
      <button
        onClick={redirectToUsersPage}
        type="button"
        className="btn btn-success"
      >
        Users
      </button>
    </>
  );
};

export default Home;
