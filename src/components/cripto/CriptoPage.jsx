import React from 'react';
import { useParams } from 'react-router-dom';


const CriptoPage = () => {
    const params =useParams()


    return (
        <div>
            <h1>Soy una criptomoneda {params.id}</h1>
        </div>
    );
}

export default CriptoPage; 