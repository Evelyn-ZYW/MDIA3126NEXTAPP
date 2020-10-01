import React from 'react';
import IconTextDuo from '../comps/IconTextDuo';

const MessagesIcon = require('../comps/Images/message.png');
const HomeIcon = require('../comps/Images/home.png');
const QuestionIcon = require('../comps/Images/question.png');


export default {
  title: 'Example/IconTextDuo',
  component: IconTextDuo
};

export const LogoDuo = () => <IconTextDuo
  src={MessagesIcon}
  text="Logo"
  color="#3D5AF1"
/>;

export const HomeDuo = () => <IconTextDuo
  src={HomeIcon}
  text="Menu 1"
  color="#3D5AF1"
/>;

export const QuestionDuo = () => <IconTextDuo
  src={QuestionIcon}
  text="Menu 2"
/>;
