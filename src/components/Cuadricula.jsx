import { useEffect } from 'react'
import { useState } from 'react'
import Cripto from './cripto/Cripto'
import "./Cuadricula.css"
import Menu from './menu/Menu'

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState([]);

  const fetchDatos = (url) =>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((data) => {
      setCriptos(data.data)
      console.log(data.data)
    })
    .catch(() => {
      console.error("la peticion fallo")
    })
  }

  useEffect(() => {
    fetchDatos(`${API_URL}assets`);      
  }, [])

  if (!criptos) return <span>cargando...</span>

  return (
    <div className='app-container'>
      
      <h1>Lista de criptomonedas</h1>
      <div className='cripto-container'>
        {
          criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) => (
            <Cripto 
            key={id} 
            name={name} 
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id} />
        ))
      }
      </div>
    </div>
  )
}

export default Cuadricula
