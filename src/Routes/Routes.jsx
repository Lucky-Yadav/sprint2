import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import { Home } from "./Home";
import { Info } from "./Info";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "./PrivateRoute";

function Routes() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute exact path="/info">
          <Info />
        </PrivateRoute>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route>
          <h3>ERROR 404 PAGE NOT FOUND</h3>
        </Route>
      </Switch>
    </div>
  );
}

export { Routes };
