import React from "react";

function HeroCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={() => props.shuffle(props.id)} alt={props.id} src={props.image} className="imageClick"/>
      </div>
    </div>
  );
};

export default HeroCard;

 