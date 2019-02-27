import React from "react";
import { useSpring, animated } from "react-spring";
import "./DogCard.css";

const DogCard = props => {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  let cardComponent;
  if (props.liked === null) {
    cardComponent = (
      <animated.div style={springProps}>
        <div className="card">
          <img className="card-img-top" src={props.image} alt={props.image} />
        </div>
      </animated.div>
    );
  } else if (props.liked === true) {
    
  }

  return (
    <animated.div style={springProps}>
      <div className="card">
        <img className="card-img-top" src={props.image} alt={props.image} />
      </div>
    </animated.div>
  );
};

export default DogCard;
