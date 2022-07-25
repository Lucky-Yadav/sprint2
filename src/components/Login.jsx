import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginruser } from "../redux/Login/action";

var obj1 = {
  password: "",
  username: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(obj1);

  const { password, username } = data;

  const isAuth = useSelector((state) => state.login.isAuth);

  const handelchange = (e) => {
    const { name, value } = e.target;
    let playload = {
      ...data,
      [name]: value,
    };
    setData(playload);
  };

  const handleLogin = () => {
    let payload = {
      password: password,
      username: username,
    };

    console.log(payload);
    dispatch(loginruser(payload));
    setData(obj1);
  };

  if (isAuth) {
    return <Navigate to="/" path />;
  }

  return (
    <div>
      <div
        style={{
          border: "2px solid gray",
          display: "grid",
          width: "40%",
          padding: "30px",
          marginLeft: "35%",
          height: "300px",
          marginTop: "30px",
          backgroundColor: "black",
        }}
      >
        <label>
          <p style={{ color: "white" }}> Username:</p>
          <input
            type="text"
            placeholder=" write ur username"
            onChange={handelchange}
            value={username}
            name="username"
            style={{ width: "250px", padding: "8px", textAlign: "center" }}
          />
        </label>
        <label>
          <p style={{ color: "white" }}> Password:</p>
          <input
            type="password"
            placeholder="xxxxx"
            onChange={handelchange}
            value={password}
            name="password"
            style={{ width: "250px", padding: "8px" }}
          />
        </label>
        <button
          onClick={handleLogin}
          style={{
            borderRadius: "10px",
            color: "red",
            width: "100px",
            height: "50px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
