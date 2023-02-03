import React, { useContext} from 'react'
import {  NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import './Menu.css'

const Menu = () => {
    const usuario =useContext(UserContext)

    return (
        <>
            <nav className="main-menu">
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/Criptomonedas">Lista de Criptos</NavLink></li>
                    <li><NavLink to="/perfil">Perfil de </NavLink></li>
                </ul>
                {/* el navlink  es para los que estan dentro del navbar,esa es la
            diferencia entre navlink y link  */}
            </nav>

        </>
    )
}

export default Menu