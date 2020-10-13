import React from 'react';
import styled, {css} from 'styled-components';


const InputsOutterBox = styled.div`
  max-width: 384px;
  max-height: 68px;
  margin-top:10px;
  margin-bottom:10px;
`;

const InputsOutterTxt = styled.div`
  padding: 5px 0;
`;
const InputsInnerBox = styled.div`
  max-width: 384px;
  max-height: 45px;
  background:${props=>props.background ? props.background : "#F2F4FB"};
  display: flex;
  border-radius: 5px;
  padding: 10px;
`;

const InputsInnerTxt = styled.div`

`;

const Inputs = ({ text1, text2 }) => {
  return <InputsOutterBox>
    <InputsOutterTxt>{text1}</InputsOutterTxt>
    <InputsInnerBox>
    <InputsInnerTxt>{text2}</InputsInnerTxt>
    </InputsInnerBox>
  </InputsOutterBox>
}
Inputs.defaultProps = {
  text1:"Label",
  text2:"input some info here..."
}

export default Inputs;