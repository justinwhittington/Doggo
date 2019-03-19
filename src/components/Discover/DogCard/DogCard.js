import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

import "./DogCard.css";

const DogCard = props => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

 

  return (
    <animated.div style={springProps}>
      <div className="card" id={props.swiper}>
        <img className="card-img-top" src={props.image} alt={props.image} />
      </div>
    </animated.div>
  );
};

export default DogCard;
