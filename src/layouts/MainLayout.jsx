// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

const MainLayout = ({ children }) => {
    // MainLayout envuelve los elementos de UI globales alrededor de la página activa.
    return (
        <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
            {children}
        </main>
        <Footer />
        </div>
    );
};

export default MainLayout;