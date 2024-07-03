import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PublicidadList} from "../components/publicidadList";
import {ContextApp} from '../context/context';
import {ModoOscuro} from "../components/modooscuro";
import { InformacionUsuario } from '../components/InformacionUsuario';
import { ModalInfo } from '../components/ModalInfo';

export const Landing = () =>{
  const { parches } = useContext(ContextApp);
  const { historia } = useContext(ContextApp);

    return (
        <div className="container">
            <div className='col'>
                <InformacionUsuario/>
            </div>

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