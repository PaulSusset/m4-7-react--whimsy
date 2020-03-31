import React from "react";
import styled from "styled-components";
import PoppingCircle from "../PoppingCircle";
import Heart from "./Heart";
import ScaleIn from "../ScaleIn";
import ConfettiPiece from "../ConfettiPiece";
import { range } from "../../utils";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked &&
        range(Math.ceil(Math.random() * 8) + 10).map(i => (
          <ConfettiPiece
            key={i}
            angle={360 * (Math.floor(Math.random() * 20) / 12)}
            distance={Math.floor(Math.random() * 15) + 15}
            color={PARTICLE_COLORS[Math.floor(Math.random() * 5)]}
            initPos={360 * (Math.floor(Math.random() * 12) / 12)}
            initDistance={Math.floor(Math.random() * 6)}
          />
        ))}
      {isLiked ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLiked}></Heart>
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLiked}></Heart>
      )}

      {isLiked && <PoppingCircle color="#E790F7" size={size} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
