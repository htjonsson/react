import { useEffect, useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Tree, Card, Space, Button, Dropdown, Row, Col, Table, } from 'antd';

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      COLUMNS
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
    },
];

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      MENU ITEMS
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const menuItems1 = [
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

const menuItems2 = [
    {
        label: <a href="https://www.antgroup.com">10st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">11nd menu item</a>,
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

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      DATA
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const oracleTreeData = [
    {
        title: 'Forms',
        key: '0-0',
        children: [
            {
                title: 'MODULE1',
                key: '0-0-0',
                    children: [
                    {
                        title: 'Triggers',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'Alters',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'Attached Libraries',
                        key: '0-0-0-2',
                    },
                    {
                        title: 'Data Blocks',
                        key: '0-0-0-3',
                    },
                    {
                        title: 'Canvases',
                        key: '0-0-0-4',
                    },
                    {
                        title: 'Editors',
                        key: '0-0-0-5',
                    },
                    {
                        title: 'Events',
                        key: '0-0-0-6',
                    },
                    {
                        title: 'LOVs',
                        key: '0-0-0-7',
                    },
                    {
                        title: 'Object Groups',
                        key: '0-0-0-8',
                    },
                    {
                        title: 'Parameters',
                        key: '0-0-0-9',
                    },
                    {
                        title: 'Popup Menus',
                        key: '0-0-0-10',
                    },
                    {
                        title: 'Program Units',
                        key: '0-0-0-11',
                    },
                    {
                        title: 'Property Classes',
                        key: '0-0-0-12',
                    },
                    {
                        title: 'Record Groups',
                        key: '0-0-0-13',
                    },
                    {
                        title: 'Reports',
                        key: '0-0-0-14',
                    },
                    {
                        title: 'Visual Attributes',
                        key: '0-0-0-15',
                    },
                    {
                        title: 'Windows',
                        key: '0-0-0-16',
                    },
                ],
            },
            {
                title: 'Menus(app)',
                key: '0-0-1',
            },
            {
                title: 'PL/SQL Libraries(1002)',
                key: '0-0-2',
            }, 
            {
                title: 'Object Libraries',
                key: '0-0-3',
            },
            {
                title: 'Built-in Packages',
                key: '0-0-4',
            }, 
            {
                title: 'Database Objects',
                key: '0-0-5',
            },      
        ],
    },
];

const treeData = [
    {
        title: 'Forms',
        key: '0-0',
        children: [
            {
                title: 'guest_parking',
                key: 'guest_parking',
                    children: [
                    {
                        title: 'Roles',
                        key: 'roles',
                    },
                    {
                        title: 'Estates',
                        key: 'estates',
                    },
                    {
                        title: 'Header Property Keys',
                        key: 'headerPropertyKeys',
                    },
                    {
                        title: 'Keywords',
                        key: 'keywords',
                    },
                    {
                        title: 'Pages',
                        key: 'pages',
                        children: [
                            {
                                title: 'page1',
                                key: 'page-1',
                                children: [
                                    {
                                        title: 'Sections',
                                        key: 'page-1-sections',
                                        children: [
                                            {
                                                title: 'Apartment Details',
                                                key: 'apartment_details',
                                                children: [
                                                    {
                                                        title: 'unit(text)',
                                                        key: 'unit',
                                                    },
                                                    {
                                                        title: 'unit-number(hidden)',
                                                        key: 'unit-number',
                                                    },
                                                    {
                                                        title: 'profile-id(hidden)',
                                                        key: 'profile-id',
                                                    },                                                     
                                                ]
                                            },
                                            {
                                                title: 'Guest Details',
                                                key: 'page1_parking_section',
                                                children: [
                                                    {
                                                        title: 'guest_name(text)',
                                                        key: 'guest_name',
                                                    },
                                                    {
                                                        title: 'vehicle_type(radios_stacked)',
                                                        key: 'vehicle_type',
                                                    },
                                                    {
                                                        title: 'vehicle_details(memo)',
                                                        key: 'vehicle_details',
                                                    },
                                                    {
                                                        title: 'visit_date(date)',
                                                        key: 'visit_date',
                                                    },
                                                    {
                                                        title: 'visit_start_time(time)',
                                                        key: 'visit_start_time',
                                                    },  
                                                    {
                                                        title: 'visit_end_time(time)',
                                                        key: 'visit_end_time',
                                                    },  
                                                    {
                                                        title: 'more_details(memo)',
                                                        key: 'more_details',
                                                    },  
                                                    {
                                                        title: 'terms(markdownLabel)',
                                                        key: 'terms',
                                                    },                                                      
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ],
            },
        ],
    },
];

const tableData = [
    {
        key: '1',
        name: 'John Brown',
        value: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        value: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        value: 'Sydney No. 1 Lake Park',
    },
];

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      FUNCTION
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const TreeView = () => {
    
    const [selected, setSelected] = useState('');
    const [contextMenuItems, setContextMenuItems] = useState(menuItems1)

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      AXIOS LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      HOOK LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
    }, []);

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      EVENT LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);

        setSelected(selectedKeys);
    };

    const onRightClick = (callbackData) => {
        console.log('rightClick', callbackData);

        console.log(callbackData.event);

        if (callbackData.node.key === "headerPropertyKeys") {
            console.log('callbackData.event.key');
            setContextMenuItems(menuItems2);
        }
        else {
            setContextMenuItems(menuItems1); 
        }
    }
      
    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      MESSAGE LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <Card
            title="" 
            extra={
                <Space>
                    <Button type="primary">
                        Save
                    </Button>
                </Space>
            }>                
            <Row>
                <Col span={8}>
                    <>
                        <Dropdown menu={{ items: contextMenuItems }} trigger={['click']} >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Actions
                                </Space>
                            </a>
                        </Dropdown>    
                        <hr/>
                        <Dropdown menu={{ items: contextMenuItems }} trigger={['contextMenu']} >
                        <Tree
                            defaultExpandedKeys={['0-0-0']}
                            defaultSelectedKeys={['0-0-0']}
                            onSelect={onSelect}
                            treeData={treeData}
                            onRightClick={onRightClick}
                        />
                        </Dropdown>                  
                    </>
                </Col>
                <Col span={16}>
                    <>
                        <Button type="link">
                            Modify
                        </Button>
                        <Table 
                            columns={columns} 
                            dataSource={tableData}
                            showHeader={false}
                            size="small"
                            pagination={false}
                            
                        />
                        {selected}
                    </>
                </Col>
            </Row>
        </Card>
    )
}

export default TreeView;
