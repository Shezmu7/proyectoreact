import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Imagen from "./components/Imagenes/imagen.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Footer/>
        </>
    )
}

export default App