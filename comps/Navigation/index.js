import React from 'react';
import styled, { css } from 'styled-components';

import { LogoDuo, HomeDuo, QuestionDuo } from '../../stories/IconTextDuo.stories';


const NavOutterBox = styled.div`
  background: #F2F4FB;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);
  max-width: 1451px;
  max-height: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const NavInnerOne = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  max-height: 78px;
  div {
    display: flex;
    flex-direction: row;
    margin: 0 10px;
  }
`;
const NavInnerTwo = styled.div`
  display: flex;
  position: relative;
  left: 800px;
  div {
    display: flex;
    flex-direction: row;
    margin: 0 20px;
    img {
      max-width: 20px;
    }
  }
`;

const NavInnerThree = styled.div`
  display: flex;
  position: relative;
  left: 850px;
  div {
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    img {
      max-width: 35px;
    }
  }
`;


const Navigation = ({ }) => {

  return <NavOutterBox>
    <NavInnerOne>
      <LogoDuo />
      <HomeDuo />
      <QuestionDuo />
    </NavInnerOne>
    <NavInnerTwo>
      <div><img src="/search.png" /></div>
      <div><img src="/alert.png" /></div>
    </NavInnerTwo>
    <NavInnerThree>
      <div><img src="/avatar.png" /></div>
    </NavInnerThree>
  </NavOutterBox>
}

Navigation.defaultProps = {
  color: "white",
  marginTop: "5px"
}

export default Navigation;