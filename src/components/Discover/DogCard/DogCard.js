import React from "react";
import './DogCard.css';

const DogCard = props => (
  <div>
    <div className="card" >
      <img className="card-img-top" src={props.image}  alt={props.image} />
      
    </div>
  </div>
); 

export default DogCard;
 