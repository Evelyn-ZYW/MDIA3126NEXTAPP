import React from 'react';

import WelcomeForm from "../comps/WelcomeForm";
import {HeroImageOne} from "../stories/HeroComp.stories.js";
import SignupForm from "../comps/SignupForm";
import Navigation from "../comps/Navigation";
import MoreButtons from "../comps/MoreButtons";
import WelcomeMsg from "../comps/WelcomeMsg";
import Tutorial from "../comps/Tutorial";
import Content from "../comps/Content";


export default function Home() {
  return <div className="home">
    <div className="hero">
      <HeroImageOne/>
    </div>
    <div className="form">
      <WelcomeForm />
    </div>
  </div>
}