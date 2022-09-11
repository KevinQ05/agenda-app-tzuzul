import React from "react";
import { useNavigate } from "react-router-dom";
import nomathch from "../assets/images/nomathch.svg";

const Nomatch = () => {
  let navigate = useNavigate();

  const Atraz = () => {
    navigate("../");
  };

  return (
    <div className="container">
      <img src={nomathch} alt="404" />
      <h1>La página que ha solicitado no se encuentra disponible</h1>
      <div className="boton">
        <button onClick={() => Atraz()}>Volver atras</button>
      </div>
    </div>
  );
};

export default Nomatch;
