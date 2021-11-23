import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import HojasDeTamal from "./HojasDeTamal";

const CardBody = ({
  cardTitleText,
  cardTextContent,
  type,
  buttonText,
  tipoDeHoja1,
  tipoDeHoja2,
}) => {
  return (
    <div className="card-body">
      <CardTitle cardTitleText={cardTitleText} />
      <CardText cardTextContent={cardTextContent} />
      <HojasDeTamal tipoDeHoja1={tipoDeHoja1} tipoDeHoja2={tipoDeHoja2} />
      <PrimaryButton type={type} buttonText={buttonText} />
    </div>
  );
};

export default CardBody;
