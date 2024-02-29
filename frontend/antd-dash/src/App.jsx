import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Button } from 'antd';

import AppRoute from './AppRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import AppLayout from './AppLayout';
import { useGetAction } from './hooks/useAxiosPost';


{/* https://www.digitalocean.com/community/tutorials/react-axios-react#step-1-adding-axios-to-the-project   */}

const App = () => {    
    const { getAction, data, error, loaded } = useGetAction();

    const { stringifiedData, image } = useMemo(() => {
        const json = JSON.stringify(data || {}, null, 4);
        console.log(json);
        if (data)
        {
            const image = data.images[0];
            return { json, image };
        }
        return { json, image : null } 
    }, [data]);

    return (
        <>
             <AppLayout />
             <button onClick={() => getAction("https://dummyjson.com/products/4")} ></button>
             <pre>{stringifiedData}</pre>
             <img src={image}></img>
        </>
       
        
    )
};

export default App;