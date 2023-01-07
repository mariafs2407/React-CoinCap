import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const[criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)         
      .then((data) => {        
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("la peticion fallo")
      })
  }, [])

  if (!criptos) return <span>cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          criptos.map(({id,name,priceUsd}) => {
              <li Key={id}>Nombre: {name} Precio: {priceUsd}</li>
          })
        }
      </ol>
    </>

  )
}

export default App
