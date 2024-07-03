import React, {useState} from "react";
import {Campo} from './Campo';
import {ModalComponent} from './ModalComponent';

 export const InformacionUsuario = () => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <h6>Enviar mensaje al chatbot</h6>
            <div className = "button">
                <button type="button" className="btn btn-primary" onClick={handleShow}>Preguntarle al chatbot</button>
        </div>
            <ModalComponent number={"15556216628"} showModal={showModal} path ="/" handleClose={handleClose}/>
        </div>
    );
 }