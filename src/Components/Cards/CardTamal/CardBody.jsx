import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import CardText from "./CardText";
import CardTitle from "./CardTitle";


const CardBody = ({ cardTitleText, cardTextContent, type, buttonText }) => {
  return (
    <div className="card-body">
      <CardTitle cardTitleText={cardTitleText} />
      <CardText cardTextContent={cardTextContent}/>
      <PrimaryButton type={type} buttonText={buttonText}/>
    </div>
  );
};

export default CardBody;
