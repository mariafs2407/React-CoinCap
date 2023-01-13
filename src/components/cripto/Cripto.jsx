import React from 'react';
import { Link } from 'react-router-dom';
import "./Cripto.css";

const Cripto = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
    return (
        <Link className='decore' to={`/Criptomonedas/${id}`}>
            <div className='cripto'>
                <h2>{name}</h2>
                <div>
                    <p><span className='label'>Precio: </span>{parseFloat(priceUsd).toFixed(2)}</p>
                    <p><span className='label'>Código: </span >{symbol}</p>
                    <p >
                        <span className='label'>Variación 24hrs: </span>
                        <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>{parseFloat(changePercent24Hr).toFixed(3)}</span>
                    </p>

                </div>
            </div>
        </Link>
    );
}

export default Cripto;