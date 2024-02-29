import React from 'react';
import { Drawer, Steps, Form, Divider, Input, Select, Row, Col, Space, } from 'antd';
const { Option } = Select;

const CreateConnectionDrawer = () => {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 4, },
        wrapperCol: { span: 20, },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16, },
    };

    const onFinish = (values) => {
        console.log('onFinish');
        console.log(values);
    };

    const onSelectChange = (value) => {
        console.log('onSelectChange');
        console.log(value);
    }    

    const onInputChange = (e) => {
        console.log('onInputChange');
        console.log(e.target.name);
        console.log(e.target.value);
    }        

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
                    <Space direction="vertical" size="middle" style={{display: 'flex',}}>
                        <Input placeholder='Name' />
                        <Select defaultValue="sqlite" options={[{ value: 'sqlite'}]}/>
                    </Space>
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

            <Divider />
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600, }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[ 
                        { required: true, },
                    ]}           
                >
                    <Input name={"name"} onChange={onInputChange}/>
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
                        onChange={onSelectChange}
                        allowClear
                    >
                        <Option value="sqlite">sqlite</Option>
                    </Select>
                </Form.Item>     
            </Form>
        </Drawer>
    )
};

export default CreateConnectionDrawer;

