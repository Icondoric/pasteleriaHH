import React, { useEffect, useState } from 'react'
import HeaderCategorias from './HeaderCategorias'
import FichaPasteles from './FichaPasteles'

const CategoriaPasteles=()=>{
  const[Pasteles,SetPasteles]=useState([]);
  useEffect(()=>{
    const ObtenerDatos=async()=>{
      const res =await fetch('https://6557a0e8bd4bcef8b612fbf2.mockapi.io/aoi/v1/Pasteles_2')
      const datos =await res.json()
      SetPasteles([...datos])
    }
    ObtenerDatos()
  },[])
  return (
    <div className="principal">
      <HeaderCategorias/>
      {Pasteles.map((info) => {
        return <FichaPasteles Pasteles={info} />;
      })}
    </div>
  )
}
export default CategoriaPasteles