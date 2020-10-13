import React from 'react';
import styled, {css} from 'styled-components';
// const Icon = require('../Images/icon.png');


const ButtonsBox = styled.div`
  position: relative;  
  max-width: 384px;
  max-height: 46px;
  background:${props=>props.background ? props.background : "#000"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ButtonsText = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ButtonsImg = styled.img`
  position: relative;
  right:28%;
  max-height: 32px;
  background: #FFF;
  margin: 5px;
`;

const MoreButtons = ({ color, background, src, text }) => {
  return <ButtonsBox background={background}>
    <ButtonsImg src={src}></ButtonsImg>
    <ButtonsText color={color}>{text}</ButtonsText>
  </ButtonsBox>
}
MoreButtons.defaultProps = {
  color:"white",
}

export default MoreButtons;