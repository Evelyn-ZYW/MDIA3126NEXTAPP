import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  min-width: 10px;
  min-height: 10px;
`;

const Content = ({ children}) => {
  return <Container>
    {children}
  </Container>
}

export default Content;