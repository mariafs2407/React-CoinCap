import { createContext, useEffect, useState } from "react"

const UserContext = createContext()

// encargado de proveer informacion a sus hijos
const UserContextProvider =({Children}) =>{  
    
    const [usuario,setUsuario] =useState({})
    useEffect(() => {
        setUsuario({
            name:"Maria Flores",
            registered:"16/Enero/2023"
        })
    },[])

    return(
        <UserContext.Provider value={usuario}>
            {/* vas a acceder a todos los hijso que tienen el componente */}
            {Children}
        </UserContext.Provider>

    )
}

export {UserContext,UserContextProvider}