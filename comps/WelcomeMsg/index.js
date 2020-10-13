import React from 'react';
import styled, {css} from 'styled-components';

const WelcomeBox = styled.div`
  max-width: 185px;
  max-height: 74px;
`;

const WelcomeStyle = styled.div`
  margin: 30px 0;
`;
const UserStyle = styled.span`
  font-weight: bold;
`;

const WelcomeMsg = ({text }) => {
  return <WelcomeBox>
    <h1>Welcome</h1>
      <WelcomeStyle>
        Hi <UserStyle>{text}</UserStyle>, lets get started!
      </WelcomeStyle>
  </WelcomeBox>
}

WelcomeMsg.defaultProps = {
 text: "USER"
}

export default WelcomeMsg;