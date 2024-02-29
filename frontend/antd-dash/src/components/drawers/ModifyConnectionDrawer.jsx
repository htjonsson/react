import React, { useState } from 'react';
import { Drawer, Steps, Form, Divider, Input, Select, Row, Col, Space, Button, } from 'antd';
const { Option } = Select;

const ModifyConnectionDrawer. = () => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();

    const [name, setName] = useState('');
    const [connectionType, setConnectionType] = useState(null);
    const [fileLocation, setFileLocation] = useState(null);

    const layout = {
        labelCol: { span: 6, },
        wrapperCol: { span: 18, },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16, },
    };

    const onConnectionTypeChange = (value) => {
        setConnectionType(value);
    }    

    const onNameChange = (e) => {
        setName(e.target.value);
    }        

    const onFileLocationChange = (e) => {
        setFileLocation(e.target.value);
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Drawer title="Create Connection" open={true} width={'960px'}>
            <Row>
                <Col span={5}>
                    <Steps
                        direction="vertical"
                        size="small"
                        current={0}
                        items={[
                            {
                                title: 'Select Type',
                            },
                            {
                                title: 'Connection Details',
                            },
                        ]}
                    />
                </Col>
                <Col span={19}>
                    <Form
                        {...layout}
                        form={form}
                        onFinish={onFinish}
                        name="control-hooks"
                        style={{ maxWidth: 600, }}
                    >
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[ 
                                { required: true, },
                            ]}           
                        >
                            <Input name={"name"} onChange={onNameChange}/>
                        </Form.Item>          
                        <Form.Item
                            name="type"
                            label="Type"
                            rules={[
                                { required: true, },
                            ]}
                        >
                            <Select
                                placeholder="Select a Connection Type"
                                onChange={onConnectionTypeChange}
                                allowClear
                            >
                                <Option value="sqlite">sqlite</Option>
                            </Select>
                        </Form.Item>     
                        <Divider orientation="left">Configuration</Divider>     
                        <Form.Item
                            name="fileLocation"
                            label="File location"
                            rules={[ 
                                { required: true, },
                            ]}           
                        >
                            <Input name={"fileLocation"} onChange={onFileLocationChange}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>           
                    </Form>
                </Col>
            </Row>

            <Divider />
            <Steps
                labelPlacement="vertical"
                size="small"
                items={[
                    {
                        title: 'Create Data Load',
                    },
                    {
                        title: 'Source Connection',
                    },
                    {
                        title: 'Target Connection',
                    },
                ]}
            />
        </Drawer>
    )
};

export default ModifyConnectionDrawer.;

