import React from "react";
import styled from "styled-components";
import googleImage from "../../assets/googlee.png";

const LoginWrapper = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  height: 75%;
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Or = styled.div`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: bold;
`;

const Line = styled.div`
  width: 0.5px;
  height: 70%;
  background-color: lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`;

const LoginButton = styled.div`
  width: 150px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
  &.google {
    background-color: #fe6d6d;
  }
  &.facebook {
    background-color: #507cc0;
  }
  &.github {
    background-color: black;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 200px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 200px;
  background-color: rgba(128, 0, 128, 0.671);
  color: white;
  font-weight: bold;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
`;

const LoginTitle = styled.h1`
  position: absolute;
  top: 150px;
  color: lightgray;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <LoginWrapper>
      <LoginTitle>Login Into App</LoginTitle>
      <Wrapper>
        <Left>
          <LoginButton className="google" onClick={google}>
            <Icon src={googleImage} alt="" />
            Google
          </LoginButton>
        </Left>
        <Center>
          <Line />
          <Or>OR</Or>
        </Center>
        <Right>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Password" />
          <SubmitButton>Login</SubmitButton>
        </Right>
      </Wrapper>
    </LoginWrapper>
  );
};

export default Login;
