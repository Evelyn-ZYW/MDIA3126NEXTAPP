import React from 'react';
import MoreButtons from '../comps/MoreButtons';

export default {
  title: 'Example/MoreButtons',
  component: MoreButtons
};

export const GoogleButton = () => <MoreButtons 
src="/google.png"
background="#4285F4"
text="Login with Google"
/>;

export const LoginButton = () => <MoreButtons 
background="#3D6FF1"
text="Login"
/>;

export const SignupButton = () => <MoreButtons 
background="#D79B9B"
text="Signup"
/>;

export const NextButton = () => <MoreButtons 
background="#495678"
text="Next"
/>;




