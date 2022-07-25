import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Titile2 = styled.div`
  display: flex;
  background-color: #222222;
  width: 100%;
  height: 100px;
`;

const Titile3 = styled.div`
  margin-top: 16px;
  flex-basis: 20%;
  padding: 15px;
  font-size: 20px;
`;

function Navbar() {
  return (
    <div>
      <Titile2>
        <Titile3>
          <Link
            to={`/`}
          >
            Home
          </Link>

          <Link
            to={`/info`}
          >
            Information
          </Link>
        </Titile3>

        <Titile3>
          <Link
            to={`/login`}
          >
            Login
          </Link>
          <br />
        </Titile3>
      </Titile2>
    </div>
  );
}

export { Navbar };
