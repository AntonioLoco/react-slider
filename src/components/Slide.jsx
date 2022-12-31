import React from "react";

const Slide = ({ card, active }) => {
  return (
    <div className={active == card.id ? "card active" : "card"}>
      <div className="card-body">
        <h5 className="card-title">{card.autore}</h5>
        <p className="card-text">{card.recensione}</p>
        <p className="card-text">Voto: {card.voto}</p>
      </div>
    </div>
  );
};

export default Slide;
