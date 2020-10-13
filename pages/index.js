import React from 'react';

import WelcomeForm from "../comps/WelcomeForm";
import { HeroImageOne, HeroImageTwo } from "../stories/HeroComp.stories.js";
import SignupForm from "../comps/SignupForm";
import Navigation from "../comps/Navigation";
import MoreButtons from "../comps/MoreButtons";
import WelcomeMsg from "../comps/WelcomeMsg";
import Tutorial from "../comps/Tutorial";
import Content from "../comps/Content";


export default function Home() {
  return <div className="app">

    <div className="home1">
      <div className="hero">
        <HeroImageOne />
        <div className="form1"><WelcomeForm /></div>
      </div>
    </div>

    <div className="home2">
      <div className="form2"><SignupForm /></div>
      <div className="hero2"><HeroImageTwo /></div>
    </div>

    <div className="home3">
      <div className="nav"><Navigation /></div>
      <div>
        <div className="left">
          <div><MoreButtons background="#3D6FF1" color="FFF" text="Start Creating"/></div>
        </div>
        <div className="right">
          <div className="msg"><WelcomeMsg /></div>
          <div>Nothing Here yet</div>
          <div className="tutor"><Tutorial /></div>
        </div>
      </div>


    </div>

  </div>



}