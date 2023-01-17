import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../imagen/cripto2.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='contenedor-img'>
            <img src={imagen} className="img" />
            <div className='texto'>
                <h1 className='titulo'>¡Hola Bienvenido!</h1>
                <p>Cónoce las 100 criptos mas usadas</p>
                <p className='ruta'>
                    <Link className='link' to="/Criptomonedas">Ver Criptomonedas ...</Link>
                </p>
            </div>
        </div>
    );
}

export default Home;