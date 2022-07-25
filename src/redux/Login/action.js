import axios from "axios";
import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_PAGE,
} from "./actiontype";

export const loginregister = (payload) => {
  return {
    type: LOGIN_REQ,
    payload,
  };
};

export const sucessLoginreq = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const failureLoginreq = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const logoutpage = () => {
  return {
    type: LOGOUT_PAGE,
  };
};

export const loginruser = (payload) => (dispatch) => {
  dispatch(loginregister());

  axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/login`, payload, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .then((response) => {
      let pay = {
        token: response.data.token,
        username: payload.username,
      };
      console.log(response.data.token);
      dispatch(sucessLoginreq(pay));
    })
    .catch((err) => dispatch(failureLoginreq("LOGIN Failure")));
};
