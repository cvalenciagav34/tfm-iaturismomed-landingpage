import {useEffect, useState} from "react";
import haciendaNapoles1 from "../images/haciendanapoles_1.jpeg";
import haciendaNapoles2 from "../images/haciendanapoles_2.jpeg";
import haciendaNapoles3 from "../images/haciendanapoles_3.jpeg";
import parquearvi from "../images/parquearvi.jpg";
import parquelleras from "../images/parquellerasmedellin.jpg";
import pobladomedellin from "../images/pobladomedellin.jpg";

export const useParches = () => {
    const [parches, setParches] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setParches([
                {id:"7",titulo: "Hacienda Napoles", imagen: haciendaNapoles1, horarios: "De 10am a 6pm",ubicacion: "Hacienda Napoles"},
                {id:"8",titulo: "Hacienda Napoles", imagen: haciendaNapoles2, horarios: "De 10am a 6pm",ubicacion: "Hacienda Napoles"},
                {id:"9",titulo: "Hacienda Napoles", imagen: haciendaNapoles3, horarios: "De 10am a 6pm",ubicacion: "Hacienda Napoles"},
                {id:"10",titulo: "Parque Arvi", imagen: parquearvi, horarios: "De 6am a 4pm",ubicacion: "Parque Arvi"},
                {id:"11",titulo: "Parque Lleras", imagen: parquelleras, horarios: "De 8pm a 3am",ubicacion: "Parque Lleras"},
                {id:"12",titulo: "Zona Poblado", imagen: pobladomedellin, horarios: "De 8pm a 3am",ubicacion: "Poblado Medellín"},
            ]);
        }, 1500);
    }, []);

    return parches;
}