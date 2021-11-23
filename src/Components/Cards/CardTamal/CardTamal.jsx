import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

const CardTamal = ({
  cardTitleText = "Tamales",
  cardTextContent = "Ricos Tamales",
  type = "success",
  buttonText = "comprar",
  imgUrl = "https://dam.cocinafacil.com.mx/wp-content/uploads/2021/07/tamales.jpg",
  tipoDeHoja1 = "Hoja de Maíz",
  tipoDeHoja2 = "Hoja de Plátano",
}) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <CardImage imgUrl={imgUrl} />
        <CardBody
          cardTitleText={cardTitleText}
          cardTextContent={cardTextContent}
          type={type}
          buttonText={buttonText}
          tipoDeHoja1={tipoDeHoja1}
          tipoDeHoja2={tipoDeHoja2}
        />
      </div>
    </div>
  );
};

export default CardTamal;
