import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

const Card = ({cardTitleText="Tamales", cardTextContent="Ricos Tamales", type="success", buttonText="comprar" }) => {
  return (
      <div class="card" style={{width: "18rem"}}>
        <CardImage/>
        <CardBody cardTitleText={cardTitleText} cardTextContent={cardTextContent} type={type} buttonText={buttonText}/>
      </div>
  );
};

export default Card;
