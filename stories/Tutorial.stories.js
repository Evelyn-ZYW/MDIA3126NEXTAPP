import React from 'react';
import Tutorial from '../comps/Tutorial';

export default {
  title: 'Example/Tutorial',
  component: Tutorial
};

export const defaultTutorial = () => <Tutorial />;

export const myTutorial = () => <Tutorial
  text="Evelyn"
/>;