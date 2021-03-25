// eslint-disable-next-line
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// eslint-disable-next-line
import styled, { css } from "styled-components";
// eslint-disable-next-line
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 10px 40px;
  form {
    margin-top: 35px;
    width: 100%;
    display: grid;
    justify-items: flex-end;
    flex-direction: column;
    align-items: center;
    input {  
      width: 100%;
      border-radius: 3px;
      padding: 15px 7px;
      background-color: #fafafa;
      border: 0.5px solid rgb(219, 219, 219);
      margin-top: 5px;
      box-sizing: border-box;
      &:last-child{
         margin-top: 12px;
         background-color: #0095f6;
         color: white;
         text-align: center;
         padding: 5px 0px;

      }
    }
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 10px 0px;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x"/>
          </div>
          <h1>Instagram</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
          </form>
          <span>Or</span>
          <span>Log in with Facebook</span>
        </TopBox>
        <BottomBox>
          <span> Don't have an account? </span> <a href="#">Sign up</a>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}
export default Login;
