import React from 'react';
import styled, { css } from 'styled-components';

import { MyBanner } from '../../stories/Banner.stories';

const HeroBox = styled.div`
  max-width: 573px;
  max-height: 967px;
`;
const HeroImg = styled.img`
  max-width: 573px;
  max-height: 967px;
  display: block;
`;
const HeroBannerStyle = styled.div`
  position: relative;
  bottom: 300px;
  left: 120px;
`;

const HeroComp = ({ src }) => {
  return <HeroBox>
    <HeroImg src={src}></HeroImg>
    <HeroBannerStyle>
      <MyBanner />
    </HeroBannerStyle>

  </HeroBox>
}

HeroComp.defaultProps = {
}

export default HeroComp;