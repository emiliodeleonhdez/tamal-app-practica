import React from "react";

const TipoDeAtole = ({
  tamanoDeAtole1,
  tamanoDeAtole2,
}) => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {tamanoDeAtole1}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
        {tamanoDeAtole2}
        </label>
      </div>
    </div>
  );
};

export default TipoDeAtole;
