import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from "../views/Landing";
import { Header } from '../components/Header';
import {InformacionUsuario} from '../components/InformacionUsuario';

function Global() {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        <InformacionUsuario />
        {children}
    </>
);


export default Global;