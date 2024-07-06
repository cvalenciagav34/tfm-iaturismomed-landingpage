import React, {useState} from 'react';
import {ContextApp } from "./context/context";
import {useHistoria} from "./hooks/useHistoria";
import {useParches } from './hooks/useParches';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from "./views/Landing";
import Global from "./routes/Global";

function App() {

  const historia = useHistoria();
  const parches = useParches();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
      setDarkMode(!darkMode);
  };
  return (
      <ContextApp.Provider value={{historia,parches,darkMode,handleDarkMode}}>
        <Global></Global>
      </ContextApp.Provider>
  );
}

export default App;
