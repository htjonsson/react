import React from 'react';
import { Divider, Space, Card, Dropdown, } from 'antd';
import Icon, { MoreOutlined, DownOutlined } from '@ant-design/icons';

const HomeContent = () => {
    const items = [
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
    ];

    return (
        <>
            <Divider orientation="left">What would you like to do ?</Divider>
            <Space direction="horizontal" size={16}>
                <Card
                    title="Load Data"
                    extra={
                    <Dropdown menu={{ items, }} trigger={['click']} >
                        <a onClick={(e) => e.preventDefault()}>
                            <MoreOutlined />
                        </a>
                      </Dropdown>
                
                    }
                    style={{
                        width: 300,
                        minHeight: 160
                    }}
                    >
                    <p>Select multiple Tables from Source and create tables on Target</p>
                </Card>
                <Card
                    title="Transform Data"
                    extra={<a href="home"><MoreOutlined /></a>}
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
};

export default HomeContent;