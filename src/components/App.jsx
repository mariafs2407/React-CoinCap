import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './menu/Menu';

const App = () => {
    return (
        <>
            <Menu/>
            {/* componente nuevo que permite tener un modelo para varias paginas */}
            <Outlet/>
        </>
    );
}

export default App; 
