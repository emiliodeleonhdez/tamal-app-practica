import React from "react";

const HojasDeTamal = ({tipoDeHoja1, tipoDeHoja2}) => {
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
          {tipoDeHoja1}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {tipoDeHoja2}
        </label>
      </div>
    </div>
  );
};

export default HojasDeTamal;
