import React from 'react';
import styled, {css} from 'styled-components';
import {NextButton} from '../../stories/MoreButtons.stories';

const TutorialBox = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
background: #A1A6C5;
border-radius: 5px;
width: 529px;
height: 264.83px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const CloseButton = styled.div`
  position: relative;
  right: -500px;
  bottom: -15px;
`;
const TutorialContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props=>props.color ? props.color : "#000"}
`;
const CornerButton = styled.div`
  max-width: 130px;
  max-height: 40px;
  padding: 10px 10px;
  position: relative;
  right: -370px;
`;
const Triangle = styled.div`
  position: absolute;
  bottom: -20px;
  right: 40px;
`;
const PageNumber = styled.div`
  position: absolute;
  bottom: 45px;
`;
const Tutorial = ({ }) => {
  return <TutorialBox>
    <CloseButton><img src="/close.png" /></CloseButton>
    <TutorialContent color="white">
      <img src="wave.png" />
      <h1>Welcome to my App!</h1>
      <span>We're excited to help you</span>
      <PageNumber>1/4</PageNumber>
    </TutorialContent>

    <CornerButton><NextButton/></CornerButton>
    <Triangle><img src="triangle.png" /></Triangle>

  </TutorialBox>
}

Tutorial.defaultProps = {
}

export default Tutorial;