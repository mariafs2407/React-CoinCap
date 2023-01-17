import React from 'react';
import { parseFloatNumber } from '../../../helpers/number';

const CriptoInfo = ({cripto}) => {
    return (
        <div className='info'>
            <div className='main-info'>
                <span>Ranking: {cripto.rank}</span>
                <h1 >{cripto.name}</h1>
                <span className='symbol'>{cripto.symbol}</span>
            </div>
            <div className="details">
                <ul>
                    <li className='detail'>
                        <span className="label">Precio: </span>
                        <span>{parseFloat(cripto.priceUsd).toFixed(3)}</span>
                    </li>
                    <li className='detail'>
                        <span className='label'>MaxSupply:</span>
                        <span>{parseFloatNumber(cripto.maxSupply,3)}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CriptoInfo;