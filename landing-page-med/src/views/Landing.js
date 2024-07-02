import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PublicidadList} from "../components/publicidadList";
import {ContextApp} from '../context/context';
import {ModoOscuro} from "../components/modooscuro";

export const Landing = () =>{
  const { parches } = useContext(ContextApp);
  const { historia } = useContext(ContextApp);

    return (
        <div className="container">
            <div className ="row">
                <ModoOscuro/>
            </div>
            <div className ="row">
                <PublicidadList
                    publicidadList = {parches}
                    tittle = "Parches Medellin"
                />
            </div>
            <div className="row">
                <PublicidadList
                    publicidadList = {historia}
                    tittle = "Historia Medellin"
                />
            </div>
        </div>
    )
};