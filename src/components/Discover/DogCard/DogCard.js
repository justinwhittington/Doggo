import React, {useState} from "react";
import { useSpring, animated, interpolate } from "react-spring";
import {useGesture} from 'react-with-gesture';
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
