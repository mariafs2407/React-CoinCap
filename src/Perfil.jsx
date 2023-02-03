import React, { useEffect, useState } from 'react';

const Perfil = () => {

    const [usuario,setUsuario] =useState({})

    useEffect(() => {
        setUsuario({
            name:"Maria Flores",
            registered:"16/Enero/2023"
        })

    },[])
    return (
        <div>
            <h1>Perfil de  </h1>
            <div> 16 DE ENERO DEL 2023</div>
        </div>
    );
}

export default Perfil;