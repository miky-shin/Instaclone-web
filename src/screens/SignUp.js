import { useMutation } from "@apollo/client";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import FormError from "../components/auth/FormError";
import Seperator from "../components/auth/Seperator";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import routes from "../routes";
import Input from "../components/auth/input";

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
const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return error;
    }
    history.push(routes.home, {
      message: "Account created. Please log in.",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
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
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            ref={register({ required: "First Name is required." })}
            name="firstName"
            type="text"
            placeholder="First Name"
            hasError={Boolean(errors?.firstName?.message)}
          />
          <FormError message={errors?.firstName?.message} />
          <Input
            ref={register({})}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <Input
            ref={register({ required: "Email is required." })}
            name="email"
            type="text"
            placeholder="Email"
            hasError={Boolean(errors?.email?.message)}
          />
          <FormError message={errors?.email?.message} />
          <Input
            ref={register({ required: "Username is required." })}
            name="username"
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            ref={register({ required: "Password is required." })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
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
