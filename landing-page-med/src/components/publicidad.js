import React, { useContext } from 'react';
import '../styles/stylesPublicidad.css';
import { ContextApp } from '../context/context';

export const Publicidad = ({id, titulo, imagen,horarios, ubicacion}) => {
    const { darkMode } = useContext(ContextApp);


    return (
        <div className="card" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='row'>
                <h5 className="card-title">{titulo}</h5>
                </div> 
                <div className='row'>
                <p className="card-text">{horarios}</p>
                </div>           
            </div>
        </div>
    );
}