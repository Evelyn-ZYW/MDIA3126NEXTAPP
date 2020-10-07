import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;   
  max-width: 246px;
  max-height: 65px;
  border-radius: 10px;
  color: ${props=>props.color ? props.color:"#FFF"};
  background-color: ${props=>props.bgcolor ? props.bgcolor:"#AFCF6B"};
`;
const TextBox = styled.div`
  align-text: center;
  padding: 30px;
  // font-weight: 400;
`;

const Button = ({ bgcolor, text }) =>{
  return <Container bgcolor={bgcolor}>
  <TextBox>{text}</TextBox>
  </Container>
}

Button.defaultProps = {
  bgcolor: "#AFCF6B",
  text: "Button",
  color: "#FFF"
}
export default Button;