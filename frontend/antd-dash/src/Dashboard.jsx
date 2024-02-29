import { useState, useEffect, } from 'react';
import { Anchor, Divider, Typography, Layout, Space, Card, theme  } from 'antd';
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

import HomeContent from './components/content/HomeContent';
import ConnectionContent from './components/content/ConnectionContent';

const Dashboard = () => {    

    const [currentAnchor, setCurrentAnchor] = useState('#home-anchor');

    useEffect(() => {
        setTimeout(() => {
            setCurrentAnchor('#home-anchor');
        }, 1000);
    },[]);

    const handleClick = (e, link) => {
        console.log('handleClick');
        console.log(link.href);
        setCurrentAnchor(link.href);
    };
        
    const getCurrentAnchor = () => { return currentAnchor; };

    return (
        <Layout style={{margin: '8', background: 'white'}}>
            <Sider width={200} style={{background: 'white', margin: '6px'}}>
                <Divider>Data Transforms</Divider>
                <Anchor
                    affix={false}
                    onClick={handleClick}
                    
                    getCurrentAnchor={getCurrentAnchor}
                    items={[
                        {
                            key: '1',
                            href: '#home-anchor',
                            title: 'Home',
                        },
                        {
                            key: '2',
                            href: '#projects-anchor-demo-static',
                            title: 'Projects',
                        },
                        {
                            key: '3',
                            href: '#connections-anchor',
                            title: 'Connections',
                        },
                        {
                            key: '4',
                            href: '#data-entities-anchor-demo-static',
                            title: 'Data Entities',
                        },
                        {
                            key: '5',
                            href: '#schedules-anchor-demo-static',
                            title: 'Schedules',
                        },
                        {
                            key: '6',
                            href: '#jobs-anchor-demo-static',
                            title: 'Jobs',
                        },
                    ]}
                /> 
            </Sider>
            <Content style={{background: 'white',  margin: '6px', }}>
                {currentAnchor == '#home-anchor' && <HomeContent/>}
                {currentAnchor == '#connections-anchor' && <ConnectionContent/>}
            </Content>
        </Layout>
    )
};

export default Dashboard;