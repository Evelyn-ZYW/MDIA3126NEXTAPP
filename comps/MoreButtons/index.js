import React from 'react';
import styled, {css} from 'styled-components';



const ButtonsBox = styled.div`
  max-width: 384px;
  max-height: 46px;
  background:${props=>props.background ? props.background : "#000"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const ButtonsText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const ButtonsImg = styled.img`
  position: relative;
  left: 0;
`;

const MoreButtons = ({ color, background, src, text }) => {
  return <ButtonsBox background={background}>
    <ButtonsImg src={src}></ButtonsImg>
    <ButtonsText color={color}>{text}</ButtonsText>
  </ButtonsBox>
}
MoreButtons.defaultProps = {
  color:"white"
}

export default MoreButtons;