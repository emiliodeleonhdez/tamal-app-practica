import React, { useState } from "react";

const HojasDeTamal = ({tipoDeHoja1, tipoDeHoja2}) => {

  //
  const [precio, setPrecio] = useState(0)
  const [oaxqueno, setOaxqueno] = useState(false)
  //

  return (
    <div>
      <div className="form-check">
        <input onClick={()=>{setOaxqueno(false);setPrecio(10)}}
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
        <input onClick={()=>{setOaxqueno(true);setPrecio(20)}} 
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {tipoDeHoja2}
        </label>
      </div>
      <p>Total del pedido $ {precio}</p>
    </div>
  );
};

export default HojasDeTamal;
