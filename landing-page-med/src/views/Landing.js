import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PublicidadList} from "../components/publicidadList";
import {ContextApp} from '../context/context';

export const Landing = () =>{
  const { parches } = useContext(ContextApp);
  const { historia } = useContext(ContextApp);

    return (
        <div className="container">
                <PublicidadList
                    publicidadList = {parches}
                    tittle = "Parches Medellin"
                />

                <PublicidadList
                    publicidadList = {historia}
                    tittle = "Historia Medellin"
                />
        </div>
    )
};