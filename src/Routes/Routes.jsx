import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import { Home } from "./Home";
// import { Info } from "./Info";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "./PrivateRoute";

function Routs() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <PrivateRoute exact path="/">
          {/* <Info /> */}
        </PrivateRoute>
        <Route path="/login" element={<Login />} />

        <Route>
          <h3>ERROR 404 PAGE NOT FOUND</h3>
        </Route>
      </Routes>
    </div>
  );
}

export { Routs };
