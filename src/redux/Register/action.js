import axios from "axios";
import { FAILUARE_REQ, REGISTER_REQ, SUCCESS_REQ } from "./actiontype";

export const registerreq = (payload) => {
  return {
    type: REGISTER_REQ,
    payload,
  };
};

export const sucessreq = (payload) => {
  return {
    type: SUCCESS_REQ,
    payload,
  };
};

export const failurereq = (payload) => {
  return {
    type: FAILUARE_REQ,
    payload,
  };
};

export const registeruser = (payload) => (dispatch) => {
  console.log(payload, "after register");
  dispatch(registerreq());
  const requestParam = {
    method: "post",
    url: "https://masai-api-mocker.herokuapp.com/auth/register",
    header: {
      "Content-Type": "Application/json",
    },
    data: payload,
  };
  axios(requestParam)
    .then(
      (response) => console.log(response),
      dispatch(sucessreq("REGISTER SUCESSSS"))
    )
    .catch((err) => dispatch(failurereq("Register Failure")));
};
