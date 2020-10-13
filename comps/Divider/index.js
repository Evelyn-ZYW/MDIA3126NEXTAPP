import React from 'react';
import styled, { css } from 'styled-components';

const DividerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 384px;
  margin-top: 20px;
`;

const DividerLine = styled.div`
  width: 169.91px;
  max-height:-0px;
  border-top: 1.5px solid #C6C6C6;
`;

const DividerText = styled.span`
  text-align: center;
  padding: 5px 10px 7px 10px;
  color: #C6C6C6;
`;

const Divider = ({ color }) => {
  return <DividerBox>
    <DividerLine></DividerLine>
    <DividerText color={color}>or</DividerText>
    <DividerLine></DividerLine>
  </DividerBox>
}


export default Divider;