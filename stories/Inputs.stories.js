import React from 'react';
import Inputs from '../comps/Inputs';

export default {
  title: 'Example/Inputs',
  component: Inputs
};

export const EmailInputs = () => <Inputs 
text1="EMAIL"
text2="joe@gmail.com"
/>;
export const PasswordInputs = () => <Inputs 
text1="PASSWORD"
text2="............."
/>;

export const ConfirmPasswordInputs = () => <Inputs
text1="CONFIRM PASSWORD"
text2="............."
/>;

export const DefaultInputs = () => <Inputs/>;