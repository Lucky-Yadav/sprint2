import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registeruser } from "../redux/Register/action";

var obj1 = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(obj1);

  const { name, email, password, username, mobile, description } = data;

  const handelchange = (e) => {
    const { name, value } = e.target;
    let playload = {
      ...data,
      [name]: value,
    };
    setData(playload);
  };

  const handleregister = () => {
    let payload = {
      name: name,
      email: email,
      password: password,
      username: username,
      mobile: mobile,
      description: description,
    };

    console.log(payload);

    dispatch(registeruser(payload));
    setData(obj1);
  };

  return (
    <div>
      <div
        style={{
          border: "2px solid red",
          width: "20%",
          padding: "20px",
          marginLeft: "42%",
          background: "black",
        }}
      >
        <label>
          <input
            type="text"
            placeholder="write name"
            onChange={handelchange}
            value={name}
            name="name"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />

        <label>
          <input
            type="text"
            placeholder="masai@xcpi.com"
            onChange={handelchange}
            value={email}
            name="email"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="text"
            placeholder="xxxxx"
            onChange={handelchange}
            value={password}
            name="password"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="text"
            placeholder=" write ur username"
            onChange={handelchange}
            value={username}
            name="username"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="text"
            placeholder="99933xxxx"
            onChange={handelchange}
            value={mobile}
            name="mobile"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="text"
            placeholder="about you"
            onChange={handelchange}
            value={description}
            name="description"
            style={{ width: "200px", padding: "8px" }}
          />
        </label>
        <br />
        <br />
        <button
          onClick={handleregister}
          style={{
            borderRadius: "10px",
            color: "red",
            width: "100px",
            height: "50px",
          }}
        >
          <Link to="/login">REGISTER</Link>
        </button>
      </div>
    </div>
  );
};

export default Register;
