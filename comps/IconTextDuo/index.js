import React from 'react';
import styled, { css } from 'styled-components';



const IconOutterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 5px;
  }
  img {
    max-width: 23px;
  }
`;

const SpannedText = styled.span`
  color: ${props=>props.color ? props.color : "black"};
`;


const IconTextDuo = ({ src, text, color}) => {
  return <IconOutterBox>
      <div><img src={src} /></div>
      <SpannedText color={color}>{text}</SpannedText>
  </IconOutterBox>
}

IconTextDuo.defaultProps = {
  maxWidth: "20px"
}

export default IconTextDuo;