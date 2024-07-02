import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from "../views/Landing";

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
        {children}
    </>
);


export default Global;