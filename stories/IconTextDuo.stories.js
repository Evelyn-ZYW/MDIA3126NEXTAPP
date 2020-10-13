import React from 'react';
import IconTextDuo from '../comps/IconTextDuo';

export default {
  title: 'Example/IconTextDuo',
  component: IconTextDuo
};

export const LogoDuo = () => <IconTextDuo
  src="/message.png"
  text="Logo"
  color="#3D5AF1"
/>;

export const HomeDuo = () => <IconTextDuo
  src="/home.png"
  text="Menu 1"
  color="#3D5AF1"
/>;

export const QuestionDuo = () => <IconTextDuo
  src="/question.png"
  text="Menu 2"
/>;
