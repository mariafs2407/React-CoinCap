import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import "./Main.css"
import Pagina404 from './components/404'
import Saludo from './components/Saludo'
import Menu from './components/menu/Menu'
import Cuadricula from './components/Cuadricula'
import Home from './components/Home'
import CriptoPage from './components/cripto/CriptoPage'


ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <>            
            <BrowserRouter>            
                <Routes >
                    <Route path='/' element={<App/>}>
                        <Route index element={<Home/>} />                                             
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
