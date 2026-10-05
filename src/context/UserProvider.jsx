import UserContext from "./UserContext";

const UserProvider = ({ value, children }) => {
  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
