import React from 'react';
import { Divider, Space, Card, } from 'antd';
import Icon, { MoreOutlined } from '@ant-design/icons';

const HomeContent = () => (
    <>
        <Divider orientation="left">What would you like to do ?</Divider>
        <Space direction="horizontal" size={16}>
            <Card
                title="Load Data"
                extra={<MoreOutlined />}
                style={{
                    width: 300,
                    minHeight: 160
                }}
                >
                <p>Select multiple Tables from Source and create tables on Target</p>
            </Card>
            <Card
                title="Transform Data"
                extra={<a href="#"><MoreOutlined /></a>}
                style={{
                    width: 300,
                    minHeight: 160
                }}
                >
                <p>Transform your data using data flows<br/><br/></p>
            </Card>
        </Space>  
    </>
);

export default HomeContent;