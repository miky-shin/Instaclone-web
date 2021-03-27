import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/input";
import Seperator from "../components/auth/Seperator";
import { FatLink } from "../components/shared/shared";
import routes from "../routes";

const Subsitile = styled(FatLink)`
  font-size: 17px;
  text-align: center;
  margin: 15px 0px 15px 0px;
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
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <Subsitile>
          Sign up to see photos and videos from your frieds.
        </Subsitile>

        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
        <Seperator />
        <form>
          <Input type="text" placeholder="Mobile Number or Email" />
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Sign up" />
        </form>
        <Description2>
          <span>
            By signing up, you agree to our <FatLink>Terms</FatLink>, Data{" "}
            <FatLink>Policy</FatLink> and <FatLink>Cookies Policy</FatLink>.
          </span>
        </Description2>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}

export default SignUp;
