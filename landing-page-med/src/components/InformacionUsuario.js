import React, {useState} from "react";
import {ModalComponent} from './ModalComponent';
import "../styles/stylesChatbot.css";
import chatbot from "../images/Chatbot_img.png";

 export const InformacionUsuario = () => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div>
            <div className="chatbot">
            <img className="card__img" src={chatbot}   alt="Imagen"/>
                <div className = "button">
                    <button type="button" className="btn btn-secondary" onClick={handleShow}>Chatbot</button>
                </div>
            </div>
            <ModalComponent number={"15556216628"} showModal={showModal} path ="/" handleClose={handleClose}/>
        </div>
    );
 }