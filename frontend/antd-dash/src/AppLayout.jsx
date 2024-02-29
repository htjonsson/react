import { useState, useEffect, } from 'react';
import { Layout, } from 'antd';
const { Header, } = Layout;

import AppRoute from './AppRoute';

const AppLayout = () => {    
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', height: '46px', }}>
            </Header>
            <AppRoute />
        </Layout>
    )
};

export default AppLayout;