import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import TipoDeAtole from "./TipoDeAtole";

const CardBody = ({
  cardTitleText,
  cardTextContent,
  type,
  buttonText,
  tipoDeAtole1,
  tipoDeAtole2,
  tipoDeAtole3,
  tipoDeAtole4,
}) => {
  return (
    <div className="card-body">
      <CardTitle cardTitleText={cardTitleText} />
      <CardText cardTextContent={cardTextContent} />
      <TipoDeAtole
        tipoDeAtole1={tipoDeAtole1}
        tipoDeAtole2={tipoDeAtole2}
        tipoDeAtole3={tipoDeAtole3}
        tipoDeAtole4={tipoDeAtole4}
      />
      <PrimaryButton type={type} buttonText={buttonText} />
    </div>
  );
};

export default CardBody;
