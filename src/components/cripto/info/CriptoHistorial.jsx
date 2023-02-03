import React from 'react';
//import * as dayjs from 'dayjs';

const CriptoHistorial = ({ history }) => {
    return (
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
                            {/* <td className='label'>{dayjs(date).format('DD/MM/YYYY')}</td> */}
                            <td>{new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</td>
                            <td className='price'>{parseFloat(priceUsd).toFixed(2)}</td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    );
}

export default CriptoHistorial;