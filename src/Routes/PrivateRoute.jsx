import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({
  children,
  path,
  exact = false,
  redirectpath = "/login",
  push = false,
}) {
  const isAuth = useSelector((state) => state.login.isAuth);
  return isAuth ? (
    <div>
      <Route path={path} exact={exact}>
        {children}
      </Route>
      )
    </div>
  ) : (
    <Redirect to={redirectpath} push={push} />
  );
}

export { PrivateRoute };
