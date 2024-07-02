import {useEffect, useState} from "react";
import comuna13 from "../images/comuna13.avif";
import pueblitpaisa from "../images/medellin_pueblito_paisa.jpg";
import plazabotero_1 from "../images/plazabotero_1.jpg";
import plazabotero_2 from "../images/plazabotero_2.avif";
import pueblitopaisa2 from "../images/pueblitopaisa.avif";
import pachamama from "../images/pachamama.jpg";

export const useHistoria = () => {
    const [historia, setHistoria] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setHistoria([
                {id:"1",titulo: "Comuna 13", imagen: comuna13, horarios: "De 10am a 6pm",ubicacion: "San Javier"},
                {id:"2",titulo: "Comuna 13", imagen: pachamama, horarios: "De 10am a 6pm",ubicacion: "San Javier"},
                {id:"3",titulo: "Plaza Botero", imagen: plazabotero_1, horarios: "De 10am a 6pm",ubicacion: "Parque Berrio"},
                {id:"4",titulo: "Plaza Botero", imagen: plazabotero_2, horarios: "De 10am a 6pm",ubicacion: "Parque Berrio"},
                {id:"5",titulo: "Pueblito Paisa", imagen: pueblitpaisa, horarios: "De 6am a 3pm",ubicacion: "Cerro Nutibara"},
                {id:"6",titulo: "Pueblito Paisa", imagen: pueblitopaisa2, horarios: "De 6am a 3pm",ubicacion: "Cerro Nutibara"},
            ]);
        }, 1500);
    }, []);

    return historia;
}