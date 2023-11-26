import React from 'react';
import { Layout, version } from 'antd';
import SimpleTable from './SimpleTable';
const { Header, Content } = Layout;

const App = () => {

    return (
        <Layout>
            <Header
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                Ant Design Version: {version}
            </Header>
            <Content
                style={{
                    padding: '24px 24px',
                }}
            >
                <SimpleTable>
                </SimpleTable>
            </Content>
        </Layout>
    );
}

export default App;