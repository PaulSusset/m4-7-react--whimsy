import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <PopHolder style={{ width: size, height: size, background: color }} />;
};
const pop = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`;
const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const PopHolder = styled.div`
  display: block;
  border-radius: 50%;
  position: absolute;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${pop} 300ms ease-in forwards, ${fade} 500ms forwards;
  }
`;
export default PoppingCircle;
