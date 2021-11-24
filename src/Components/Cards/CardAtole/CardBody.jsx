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
  tamanoDeAtole1,
  tamanoDeAtole2,
}) => {
  return (
    <div className="card-body">
      <CardTitle cardTitleText={cardTitleText} />
      <CardText cardTextContent={cardTextContent} />
      <TipoDeAtole
        tamanoDeAtole1={tamanoDeAtole1}
        tamanoDeAtole2={tamanoDeAtole2}
      />
      <PrimaryButton type={type} buttonText={buttonText} />
    </div>
  );
};

export default CardBody;
