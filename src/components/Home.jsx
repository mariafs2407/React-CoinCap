import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hola Bienvenido EDmARket</h1>
            <p>Cónoce las 100 criptos mas usadas</p>
            <Link to="/Criptomonedas">Ver Criptomonedas</Link>
        </div>
    );
}

export default Home;