import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import "./Main.css"
import Pagina404 from './components/404'
import Cuadricula from './components/Cuadricula'
import Home from './components/Home'
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './Perfil'
import { UserContextProvider } from './context/UserContext'


ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <>            
            <BrowserRouter>            
                <Routes >
                    <Route path='/' element={<App/>}>
                        <Route index element={<Home/>} />   
                        <Route path='perfil' element={<Perfil/>}/>                                          
                    </Route>  
                    <Route path='/Criptomonedas' element={<App/>}>
                        <Route index element={<Cuadricula/>}/>  
                        {/* RUTA DINAMICA */}
                        <Route path=':id' element={<CriptoPage/>}/>
                    </Route> 
                    <Route path='*' element={<Pagina404 />} />                  
                </Routes>
            </BrowserRouter>
        </>

    )
