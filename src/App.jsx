import "./scss/styles.scss";
import UserProvider from "./context/UserProvider";
import CompA from "./components/comp/CompA";

const App = () => {
  // codes

  return (
    <>
      <UserProvider>
        <CompA />
      </UserProvider>
    </>
  );
};

export default App;
