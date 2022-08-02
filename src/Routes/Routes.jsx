import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "./PrivateRoute";

function Routs() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <PrivateRoute path="/">
          
        </PrivateRoute> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export { Routs };
