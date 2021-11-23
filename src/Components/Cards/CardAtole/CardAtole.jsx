import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

const CardTamal = ({
  cardTitleText = "Tamales",
  cardTextContent = "Ricos Tamales",
  type = "success",
  buttonText = "comprar",
  imgUrl = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A6479A16-E051-4C0D-891C-8C99F31ACA03/Derivates/D9B5902F-4B1A-4B7F-BBDF-0ACDA56A114F.jpg",
  tipoDeAtole1 = "Sin Atole",
  tipoDeAtole2 = "Atole de Fresa",
  tipoDeAtole3 = "Atole de Chocolate",
  tipoDeAtole4 = "Atole de Cajeta",
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
          tipoDeAtole1={tipoDeAtole1}
          tipoDeAtole2={tipoDeAtole2}
          tipoDeAtole3={tipoDeAtole3}
          tipoDeAtole4={tipoDeAtole4}
        />
      </div>
    </div>
  );
};

export default CardTamal;
