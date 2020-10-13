import React from 'react';
import styled, { css } from 'styled-components';


const BannerBox = styled.div` 
  position: relative;
  max-width: 478px;
  max-height: 170px;
  background: rgba(255, 255, 255, 0.88);
`;

const HeaderBox = styled.h1`
  display: flex;
  padding: 30px 30px 0px 30px;
`;
const ContentBox = styled.div`
  color: #3D5AF1;
  padding: 0px 0px 30px 30px;
`;


const Banner = ({ text1, text2 }) => {
  return <BannerBox>

    <HeaderBox>
      <div>{text1}</div>
    </HeaderBox>
    <ContentBox>{text2}</ContentBox>

  </BannerBox>
}

Banner.defaultProps = {
  text1: "Hack your way to learning 🎉",
  text2: "Start your free account today.",
  src: "none"
}

export default Banner;