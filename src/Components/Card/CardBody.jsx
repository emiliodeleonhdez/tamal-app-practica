import React from "react";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import PrimaryButton from "../Buttons/PrimaryButton";

const CardBody = ({ cardTitleText, cardTextContent, type, buttonText }) => {
  return (
    <div class="card-body">
      <CardTitle cardTitleText={cardTitleText} />
      <CardText cardTextContent={cardTextContent}/>
      <PrimaryButton type={type} buttonText={buttonText}/>
    </div>
  );
};

export default CardBody;
