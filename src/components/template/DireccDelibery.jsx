import React from "react";
import EntradaTexto from "../EntradaTexto";
import BotonCafe from "../BotonCafe";
import Back from "../Back";
import "./DireccDeliberys.css";

function DireccDelibery () {

    return (
        <>
          <div className="total1">
           <Back/>
          <div className="titulo">
          <h1>Añadir Dirección</h1>
          </div>
          <div className="mapa">
          <img src="./image 66.svg" alt="cupckake" />
          </div>
          <div className="subtitulo">
          <h2>Dirección de Delibery</h2>
          </div>
          <div className="entradas-de-texto">
          <EntradaTexto Texto="Dirección" />
          </div>
          <EntradaTexto Texto="Numero" />
          
          <BotonCafe>Pago</BotonCafe>
          </div>
        </>
      );

}
export default DireccDelibery;