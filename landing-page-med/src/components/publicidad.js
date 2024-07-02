import React, { useContext } from 'react';
import '../styles/stylesPublicidad.css';
import { ContextApp } from '../context/context';

export const Publicidad = ({id, titulo, imagen,horarios, ubicacion}) => {
    const { darkMode } = useContext(ContextApp);


    return (
        <div className="">
            
            <div className = {`card ${darkMode ? 'card darkeMode' : ''}`}>
                <h3>{titulo}</h3>
                <img className="card__img" src= {imagen}  alt="Imagen"/>
                <div className = "row">
                <div className = "col">
                <p><b>Horarios:</b> {horarios}</p>
                <p><b>Ubicación</b> {ubicacion}</p>
                </div>
            </div>
            </div>
        </div>
    );
}