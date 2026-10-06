import { NavLink } from "react-router";
// import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      {/* <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/users">Users</Link>
      </p> */}

      <p>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
        >
          Home
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
        >
          Users
        </NavLink>
      </p>
    </>
  );
};

export default Header;
