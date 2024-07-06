import React, { useContext } from 'react';
import '../styles/stylesPublicidad.css';
import { ContextApp } from '../context/context';

export const Publicidad = ({id, titulo, imagen,horarios, ubicacion}) => {
    const { darkMode } = useContext(ContextApp);


    return (
        <div className="card" style={{width: '18rem'}}>        
        <img src= {imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='col'>
                <h5 className="card-title">{titulo}</h5>
                <br></br><p className="card-text">{horarios}</p>
                </div>    
            </div>
        </div>
    );
}