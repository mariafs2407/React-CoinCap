import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as dayjs from 'dayjs';
import './CriptoPage.css';


const CriptoPage = () => {
    // nos devuelve los paraemtros que existen en la url
    const params = useParams();
    const API_URL = import.meta.env.VITE_API_URL;
    const [cripto, setCriptos] = useState({});
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
            .then(data => {
                setCriptos(data.data.data)
            })
            .catch(e => console.error(e))

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
            .then(data => {
                setHistory(data.data.data)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <div className='cripto-page-container'>
            <div className='info'>
                <div>
                    <span>Ranking: {cripto.rank}</span>
                    <h1 >{cripto.name}</h1>
                    <span className='symbol'>{cripto.symbol}</span>
                </div>
            </div>

            <div className="details">
                <ul>
                    <li className='detail'>
                        <span className="label">Precio: </span>
                        <span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
                    </li>
                    <li className='detail'>
                        <span className='label'>MaxSupply:</span>
                        <span>{parseFloat(cripto.maxSuplly).toFixed(3)}</span>
                    </li>
                </ul>
            </div>
            <div className='history'>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(({ time, date, priceUsd }) => (
                                <tr key={time}>
                                    <td className='label'>{dayjs(date).format('DD/MM/YYYY')}</td>
                                    <td className='price'>{parseFloat(priceUsd).toFixed(2)}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CriptoPage; 