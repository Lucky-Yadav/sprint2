import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutpage } from "../redux/Login/action";

export const Data = () => {
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);

  const [page, setpage] = useState(1);

  const isAuth = useSelector((state) => state.login.isAuth);

  const dispatch = useDispatch();

  const handlesearch = () => {
    const requestparam2 = {
      method: "get",
      url: "https://api.github.com/search/users",
      params: {
        q: query,
        page: page,
        per_page: 5,
      },
    };
    axios(requestparam2)
      .then((Response) => setData(Response.data.items))
      .catch((err) => console.log("err"));
  };

  useEffect(() => {
    handlesearch();
  }, [page]);

  if (!isAuth) {
    return <Redirect to="/login" path />;
  }

  const handlelogout = () => {
    dispatch(logoutpage());
  };

  return (
    <div>
      <button onClick={handlelogout}>LOGOUT</button>
      Search:
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
        placeholder="search"
      />
      <button onClick={handlesearch}>ADD</button>
      <div>
        {data &&
          data.map((el) => {
            return <div>{el.login}</div>;
          })}
      </div>
      <br />
      <button disabled={page === 1} onClick={() => setpage(page - 1)}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setpage(page + 1)}>Next</button>
    </div>
  );
};
