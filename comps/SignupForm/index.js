import React from 'react';
import styled, {css} from 'styled-components';

import { SignupButton } from '../../stories/MoreButtons.stories';
import { EmailInputs, PasswordInputs, ConfirmPasswordInputs } from '../../stories/Inputs.stories';


const FormOutterBox = styled.div`
  max-width: 390px;
  max-height: 515px;
`;
const FormInnerBox = styled.div`
  max-width: 390px;
  max-height: 515px;
`;
const InputStyle = styled.div`
  margin: 30px 0;
`;

const SignupForm = ({ }) => {
  return <FormOutterBox>
    <h1>Signup for an account</h1>
    <FormInnerBox>
      <InputStyle><EmailInputs /></InputStyle>
      <InputStyle><PasswordInputs /></InputStyle>
      <InputStyle><ConfirmPasswordInputs /></InputStyle>
      <InputStyle><SignupButton /></InputStyle>
    </FormInnerBox>
  </FormOutterBox>
}

SignupForm.defaultProps = {
  color:"white",
  marginTop:"5px"
}

export default SignupForm;