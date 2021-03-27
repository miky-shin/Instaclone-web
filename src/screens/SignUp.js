// eslint-disable-next-line
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import styled from "styled-components";
// eslint-disable-next-line

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;
const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 10px 40px;
  margin-bottom: 10px;
  form {
    width: 100%;
    display: grid;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 7.5px 0px;
  font-weight: 600;
  width: 100%;
`;

const BottomBox = styled(WhiteBox)`
  padding: 27px 0px;
  text-align: center;
  a {
    font-weight: 200;
    color: ${(props) => props.theme.accent};
  }
`;

const Separator = styled.div`
  margin: 15px 0px 15px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

const Description = styled.div`
  margin: 15px 0px 15px 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;

  span {
    margin: 0px 0px;
    font-weight: 900;
    font-size: 17px;
    color: #8e8e8e;
  }
`;
const Description2 = styled.div`
  margin: 15px 0px 15px 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  span {
    margin: 0px 0px;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 7.5px 0px;
  font-weight: 800;
  width: 100%;
  margin-bottom: 10px;
  span {
    margin-left: 7px;
  }
`;

function SignUp() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <Description>
            <span>Sign up to see photos and videos from your frieds.</span>
          </Description>

          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
          <Separator>
            <div></div>
            <span>Or</span>
            <div></div>
          </Separator>
          <form>
            <Input type="text" placeholder="Mobile Number or Email" />
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Sign up" />
          </form>
          <Description2>
            <span>
              By signing up, you agree to our Terms, Data Policy and Cookies
              Policy.
            </span>
          </Description2>
        </TopBox>

        <BottomBox>
          <span> Have an account? </span>
          <Link to="/log-in">Log in</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
