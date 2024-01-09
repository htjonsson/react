import React from 'react';
import { Layout, version } from 'antd';
import UserTable from './UserTable';
import TreeView from './TreeView';
const { Header, Content, Sider } = Layout;

const layoutStyle = {
    height:"100vh",
    
}

const headerStyle = {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
};

const contentStyle = {
    padding: '24px 24px',
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '25',
    color: 'black',
    width: "120px",
    backgroundColor: "white",    
}

const App = () => {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                Ant Design Version: {version}
            </Header>
            <Layout>
                <Sider style={siderStyle}
                    collapsible={true}
                    collapsedWidth={'32px'}
                >
                    Sider
                </Sider>
                <Content style={contentStyle}>
                    <TreeView />
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;