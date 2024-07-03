import React from 'react';

export const Chatbot = ({number}) => {
  const phoneNumber = number; // Reemplaza con el número de teléfono deseado
  const message = "Hola, me gustaría más información"; // Mensaje predefinido

  const redirectToWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={redirectToWhatsApp()}>
      </button>
    </div>
  );
};