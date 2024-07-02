import React, { useContext , useEffect} from 'react';
import { ContextApp } from '../context/context';

export const ModoOscuro =() =>{
    const { darkMode , handleDarkMode } = useContext(ContextApp);
    useEffect(() => {
        if (darkMode){
            document.body.classList.add('darkeMode');
        }
        return () => {
        document.body.classList.remove('darkeMode');
        };
    }, [darkMode]); 
return (    
    <div className='btn btn-primary'>
        <button className='btn btn-primary' onClick={() => handleDarkMode()}>Cambiar a Modo Oscuro</button>
    </div>
    )
};