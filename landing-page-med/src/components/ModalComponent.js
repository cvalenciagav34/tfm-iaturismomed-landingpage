import React, { useEffect,useContext} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Modal} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import "../styles/stylesModal.css"
import { ContextApp } from '../context/context';
import { Chatbot } from "./Chatbot";

export const ModalComponent=(values) => {
    const { darkMode } = useContext(ContextApp);
    const navigate = useNavigate();
    useEffect(() => {
        if(values.showModal){
            setTimeout(() => {
                navigate(values.path);
            }, 1500);
        }
    });

    return (
        <Modal show={values.showModal}>
            <Modal.Body>
                <Chatbot
                    number = {values.number}
                />
                <p className={`${darkMode ? 'darkeMode' : ''}`}>Redirigiendo a Whatsapp ... </p>
            </Modal.Body>
            <ProgressBar animated now={100} className="mt-3" />;
        </Modal>
    );
}