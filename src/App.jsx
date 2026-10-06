import { BrowserRouter, Route, Routes } from "react-router";
import "./scss/styles.scss";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import NotFound from "./pages/NotFound";
import Router from "./pages/users/Router";

const App = () => {
  // codes

  return (
    <>
      <BrowserRouter basename="github">
        <Header />
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/users/*" element={<Router />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
