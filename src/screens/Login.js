import { useState } from "react";
import styled, { css } from "styled-components";
import { isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => (props.setpotato ? "palevioletred" : "bisque")};
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${(props) =>
    props.setpotato
      ? css`
          font-size: 49px;
        `
      : css`
          text-decoration: underline;
        `}
`;

const Container = styled.div`
  background-color: tomato;
`;

const TogglePotato = styled.button`
  color: red;
`;

function Login() {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current);
  return (
    <Container>
      <Title setpotato={potato}>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
      <TogglePotato onClick={togglePotato}>Toggle Potato</TogglePotato>
    </Container>
  );
}
export default Login;
