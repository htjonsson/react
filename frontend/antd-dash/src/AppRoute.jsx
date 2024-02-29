import { useState, useEffect, } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from './Dashboard';
import Home from './Home';

const AppRoute = () => {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="home/:id" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoute;