import { useReducer } from "react";
import UserContext from "./UserContext";
import reducer from "./countReducer";

const initialState = { name: "", count: 0 };

const UserProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState.count);

  return (
    <>
      <UserContext.Provider value={{ count, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
