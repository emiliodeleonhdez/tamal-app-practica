import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

const CardTamal = ({
  cardTitleText = "Tamales",
  cardTextContent = "Ricos Tamales",
  type = "success",
  buttonText = "comprar",
  imgUrl = "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/07/tamales.jpg",
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imgUrl={imgUrl}/>
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
