import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Users from "./Users";
import Create from "./Create";
import User from "./User";

const Router = () => {
  // codes

  const [login] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={login ? <Users /> : <Navigate to="/" />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </>
  );
};

export default Router;
