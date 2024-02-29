import { useState, useEffect, } from 'react';
import { Layout, } from 'antd';
import { useParams } from "react-router-dom";

const Home = () => {    

    let { id } = useParams(); 

    return (
        <Layout style={{margin: '8', background: 'white'}}>
            <h1>HOME {id}</h1>
        </Layout>
    )
};

export default Home;