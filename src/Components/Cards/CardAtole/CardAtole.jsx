import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

const CardTamal = ({
  cardTitleText = "Tamales",
  cardTextContent = "Ricos Tamales",
  type = "success",
  buttonText = "comprar",
  imgUrl = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A6479A16-E051-4C0D-891C-8C99F31ACA03/Derivates/D9B5902F-4B1A-4B7F-BBDF-0ACDA56A114F.jpg",
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl} />
      <CardBody
        cardTitleText={cardTitleText}
        cardTextContent={cardTextContent}
        type={type}
        buttonText={buttonText}
      />
    </div>
  );
};

export default CardTamal;
