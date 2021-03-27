import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/input";
import Seperator from "../components/auth/Seperator";
import routes from "../routes";

const FacebookLogin = styled.div`
  color: #385285;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 700;
  }
`;
function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const onUsernameChange = (event) => {
    setUsernameError("");
    setUsername(event.target.value);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      setUsernameError("empty");
    }
    if (username.length < 10) {
      setUsernameError("too short");
    }
  };
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form onSubmit={HandleSubmit}>
          {usernameError}
          <Input
            onChange={onUsernameChange}
            value={username}
            type="text"
            placeholder="Username"
          />
          <Input type="password" placeholder="Password" />
          <Button
            type="submit"
            value="Log in"
            disabled={username === "" && username.length < 10}
          />
        </form>
        <Seperator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta=" Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}
export default Login;
