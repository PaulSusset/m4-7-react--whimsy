import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Particle = ({ children, x, y, initX, initY }) => {
  const style = useSpring({
    transform: `translate(${x}px, ${y}px) scale(0)`,
    from: {
      transform: `translate(${initX}px, ${initY}px) scale(1.2)`
    },
    config: {
      tension: 150,
      friction: 15,
      duration: 5000
    }
  });
  return <StyledParticle style={style}>{children}</StyledParticle>;
};
const StyledParticle = styled(animated.div)`
  z-index: 4;
`;

export default Particle;
