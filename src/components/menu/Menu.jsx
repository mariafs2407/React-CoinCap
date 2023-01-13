import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css'

const Menu =() => {
    return (
        <>
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Criptomonedas">Lista de Criptos</NavLink></li>
                <li></li>
            </ul>
            {/* el navlink  es para los que estan dentro del navbar,esa es la
            diferencia entre navlink y link  */}
        </nav>
        
        </>
    );
}

export default Menu;