import React from 'react';
import WelcomeMsg from '../comps/WelcomeMsg';

export default {
  title: 'Example/WelcomeMsg',
  component: WelcomeMsg
};

export const defaultWelcomeMessage = () => <WelcomeMsg />;

export const myWelcomeMessage = () => <WelcomeMsg
  text="Evelyn"
/>;