import React, {useState} from 'react';
import {ContextApp } from "./context/context";
import {useHistoria} from "./hooks/useHistoria";
import {useParches } from './hooks/useParches';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from "./views/Landing";

function App() {

  const historia = useHistoria();
  const parches = useParches();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
      setDarkMode(!darkMode);
  };
  return (
      <ContextApp.Provider value={{historia,parches,darkMode,handleDarkMode}}>
      <BrowserRouter>
      <div>
      <Routes>
      <Route path="/" element={<Landing />} />
      </Routes>
      </div>
      </BrowserRouter>
      </ContextApp.Provider>
  );
}

export default App;
