import React from 'react';
import HeroComp from '../comps/HeroComp';


export default {
  title: 'Example/HeroComp',
  component: HeroComp
};

export const HeroImageOne = () => <HeroComp 
src="hero1.png"
/>;

export const HeroImageTwo = () => <HeroComp 
src="hero2.png"
/>;