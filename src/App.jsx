import CompA from "./components/comp/CompA";
import UserProvider from "./context/UserProvider";
import "./scss/styles.scss";

const App = () => {
  // codes

  const preson = { name: "ali", age: "20" };

  return (
    <>
      <UserProvider value={preson}>
        <CompA />
      </UserProvider>
    </>
  );
};

export default App;
