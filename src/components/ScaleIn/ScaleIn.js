import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)"
    },
    config: { tension: 150, friction: 9 }
  });
  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
