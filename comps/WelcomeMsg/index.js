import React from 'react';
import styled, {css} from 'styled-components';

const WelcomeBox = styled.div`
  max-width: 185px;
  max-height: 74px;
`;

const WelcomeStyle = styled.div`
  margin: 30px 0;
`;

const WelcomeMsg = ({text }) => {
  return <WelcomeBox>
    <h1>Welcome</h1>
      <WelcomeStyle>
        Hi <span>{text}</span>, lets get started!
      </WelcomeStyle>
  </WelcomeBox>
}

WelcomeMsg.defaultProps = {
 text: "USER"
}

export default WelcomeMsg;