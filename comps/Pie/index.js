import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;   
  max-width: 216px;
  max-height: 158px;
  border-radius: 10px;
  // background-color: ${props=>props.bgcolor ? props.bgcolor:"pink"};
`;

const Circle = styled.div`
  // max-width: 80.53px;
  // max-height: 80.53px;
  // border-radius: 50%;
  // background-color: #F5F5F5;
`;
const Stroke = styled.div`
    transform: rotate(-2deg);
    position: relative;
    bottom: 35px;
    right: 22px;
`;

const ImageBox = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;   
  color: ${props=>props.color ? props.color:"#729CF0"};
`;
const PercentBox = styled.div`
position: relative;
bottom: 85px;

`;

const TextBox = styled.h3`
  position: relative;
  bottom: 20px;
`;

const Pie = ({ text1, text2 }) =>{
  return <Container>
      <ImageBox>
      <Circle><img src="/circle.png"/></Circle>
      <Stroke><img src="/stroke.png"/></Stroke>
      <PercentBox>{text1}</PercentBox>
      </ImageBox>
      <TextBox>{text2}</TextBox>
  </Container>
}

Pie.defaultProps = {
  text1: "2.28%",
  text2: "Text",
}

export default Pie;