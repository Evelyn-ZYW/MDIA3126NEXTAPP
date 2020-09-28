import React from 'react';
import Menu from '../comps/Menu';

export default {
  title: 'Example/Menu',
  component: Menu
};

export const BasicMenu = () => <Menu />;

export const ColorMenu = () => <Menu 
color="#3F3"
highlight={true}
/>;