import React from 'react';
import styled, {css} from 'styled-components';
// const Icon = require('../stories/assets/icon.png');

import { MyDivider } from '../../stories/Divider.stories';
import { GoogleButton, LoginButton, SignupButton } from '../../stories/MoreButtons.stories';
import { EmailInputs, PasswordInputs } from '../../stories/Inputs.stories';


const FormOutterBox = styled.div`
  max-width: 390px;
  max-height: 515px;
`;
const FormInnerBox = styled.div`
  max-width: 390px;
  max-height: 515px;
`;

const HyperLink = styled.div`
  max-width: 384px;
  max-height: 46px;
  color: #4285F4;
  position: relative;
  left: 255px;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const WelcomeForm = ({ }) => {
  return <FormOutterBox>
    <h1>Welcome Back!</h1>
    <FormInnerBox>
      <GoogleButton />
      <MyDivider />
      <EmailInputs />
      <PasswordInputs />
      <HyperLink>Forgot password?</HyperLink>
      <LoginButton />
      <SignupButton />
    </FormInnerBox>
  </FormOutterBox>
}

WelcomeForm.defaultProps = {
  color:"white",
  marginTop:"5px"
}

export default WelcomeForm;