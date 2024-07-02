import React from "react";
import {Publicidad} from "./publicidad";
import "../styles/stylesList.css"

export const PublicidadList = ({publicidadList, tittle}) => {
  

return (
    
    <div className="container">
      <h1>{tittle}</h1>
    <div className="container__video">
    {publicidadList.map((publicidad, index) => (
        <Publicidad
            key={index}
            id={publicidad.id}
            titulo={publicidad.titulo}
            imagen={publicidad.imagen}
            horarios={publicidad.horarios}
            ubicacion={publicidad.ubicacion}
        />
    ))}
    </div>
</div>
)
}