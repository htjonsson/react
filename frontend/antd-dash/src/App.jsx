import { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Button, Spin, notification } from 'antd';

import AppRoute from './AppRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import AppLayout from './AppLayout';
import { useGetAction } from './hooks/useAxiosPost';


{/* https://www.digitalocean.com/community/tutorials/react-axios-react#step-1-adding-axios-to-the-project   */}

const App = () => {  
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);
    const { getAction, data, error, loaded } = useGetAction();

    const openNotificationWithIcon = (type) => {
        api[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    const { stringifiedData, image } = useMemo(() => {
        const json = JSON.stringify(data || {}, null, 4);
        if (data)
        {
            setLoading(false);
            const image = data.images[0];
            openNotificationWithIcon('info')
            return { json, image };
        }

        return { json, image : null } 
    }, [data]);

    const { text } = useMemo(() => {
        if (error.length > 0) {
            openNotificationWithIcon('error')
        }
        return "";
    }, [error]);

    const onClick = () => {
        setLoading(true);
        getAction("https://dummyjson.com/products/14");
    }


    return (
        <>
            {contextHolder}
            <AppLayout />
            {!image && <button onClick={onClick} >LOAD IMAGE</button>}
            {loading && <Spin />}
            <img src={image}></img>
        </>    
    )
};

export default App;