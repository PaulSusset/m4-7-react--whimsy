import React from "react";
import styled from "styled-components";
import Particle from "../Particle";

const ConfettiPiece = ({ angle, distance, color, initPos, initDistance }) => {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

  const angleInRads = angle => convertDegreesToRadians(angle);
  const x = Math.cos(angleInRads(angle)) * distance;
  const y = Math.sin(angleInRads(angle)) * distance;
  const initX = Math.cos(angleInRads(initPos)) * initDistance;
  const initY = Math.cos(angleInRads(initPos)) * initDistance;
  return (
    <CenteredWithinParent>
      <Particle x={x} y={y} initX={initX} initY={initY}>
        <Confetti style={{ backgroundColor: color }} />
      </Particle>
    </CenteredWithinParent>
  );
};

const Confetti = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
const CenteredWithinParent = styled.div`
  position: absolute;
  z-index: 3;
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export default ConfettiPiece;
