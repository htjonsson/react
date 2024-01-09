import { useState, useEffect } from 'react';
import { Card, Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Space, Row, Col, } from 'antd';

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      FUNCTION
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const UserDataEntry = (props) => {

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      HOOK LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      EVENT LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const onClose = () => {
        props.onClose();
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            {props.open == true && 

                <Card
                    title="Modify Data Entry" 
                    extra={
                        <Space>
                            <Button type="primary" onClick={onClose}>
                                Save
                            </Button>
                            <Button type="primary" danger onClick={onClose}>
                                Close
                            </Button>
                        </Space>
                    }>
                    <Form
                        labelCol={{ span: 6 }}
                        labelAlign={"left"}
                    >
                        <b>Static Bold Text</b>
                        <Row>
                            <Col span={8}>
                                <Form.Item label="Form Size" name="size">
                                    <Radio.Group>
                                        <Radio.Button value="small">Small</Radio.Button>
                                        <Radio.Button value="default">Default</Radio.Button>
                                        <Radio.Button value="large">Large</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>  
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Input">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>


                        
                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        
                        <Form.Item label="TreeSelect">
                            <TreeSelect
                            treeData={[
                                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                            ]}
                            />
                        </Form.Item>
                        
                        <Form.Item label="Cascader">
                            <Cascader
                            options={[
                                {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [{ value: 'hangzhou', label: 'Hangzhou' }],
                                },
                            ]}
                            />
                        </Form.Item>
                        
                        <Form.Item label="DatePicker" tooltip="prompt text" required="true">
                            <DatePicker />
                        </Form.Item>
                        
                        <Form.Item label="InputNumber">
                            <InputNumber />
                        </Form.Item>
                        
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        
                        <Form.Item label="Button">
                            <Button>Button</Button>
                        </Form.Item>

                    </Form>   
                </Card>
            }       
        </>
    )
}


export default UserDataEntry;