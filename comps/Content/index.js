import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props=>props.bgcolor ? props.bgcolor:"#DEFECD"};
  min-width: 10px;
  min-height: 10px;
  background-image: ${props=>props.bgimage ? props.bgimage:"none"};
`;

const Content = ({children, bgcolor, bgimage}) =>{
  return <Container bgcolor={bgcolor} bgimage={bgimage}>
    {children}
  </Container>
}

Content.defaultProps = {
  bgcolor: "DEFECD",
  bgimage: "none",
  children: "Welcome to my app"
}
export default Content;