import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

const Button = styled.button`
    margin-top: -20%;
    width: 50%;
    height: 40px;
    background-color: var(--primary-color);
    font-family: var(--primary-font);
    font-size: 20px;
    border-radius: 12px;
    box-shadow: .5px 1px 5px #888888;
    color: white;
    border: none;
`;

export default LoginButton;