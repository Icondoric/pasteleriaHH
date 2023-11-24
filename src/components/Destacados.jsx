import React from 'react';
import './Destacados.css';
import FichaDestacados from './FichaDestacados';

const Destacados = (props) => {
  const postredestacado = props.postredestacado;
      
  return (
    <div className="principal-destacados">
      {postredestacado.map((info) => {
        return <FichaDestacados postredestacado={info} />;
      })}
    </div>
      );
    };
      
  export default Destacados;
      
      