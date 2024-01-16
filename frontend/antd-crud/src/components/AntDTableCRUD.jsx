import { Button, Table, Modal, Input, Drawer, Space, message, Form, } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      DATA
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const data = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        address: "John Address",
    },
    {
        id: 2,
        name: "David",
        email: "david@gmail.com",
        address: "David Address",
    },
    {
        id: 3,
        name: "James",
        email: "james@gmail.com",
        address: "James Address",
    },
    {
        id: 4,
        name: "Sam",
        email: "sam@gmail.com",
        address: "Sam Address",
    },
];

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      FUNCTION
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const AntDTableCRUD = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);
    const [dataSource, setDataSource] = useState(data);

    const [form] = Form.useForm();

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      MESSAGE
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const [messageApi, contextHolder] = message.useMessage();
    const notification = (message) => {
      messageApi.info(message);
    };

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      COLUMNS METADATA
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "4",
            title: "Address",
            dataIndex: "address",
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
            return (
                <>
                <EditOutlined
                    onClick={() => {
                    onEditRecord(record);
                    }}
                />
                <DeleteOutlined
                    onClick={() => {
                    onDeleteRecord(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                />
                </>
            );
            },
        },
    ];

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      HOOK LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        console.log('useEffect', activeRecord);

        // form.resetFields();
        form.setFieldsValue(activeRecord);
    }, [activeRecord]);

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      EVENT LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const onAddRecord = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newRecord = {
            id: -1,
            name: "Name " + randomNumber,
            email: randomNumber + "@gmail.com",
            address: "Address " + randomNumber,
        };
        setActiveRecord(newRecord);
        setIsEditing(true);
    };

    const onDeleteRecord = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
            setDataSource((pre) => {
                return pre.filter((rec) => rec.id !== record.id);
            });
            },
        });
    };
    
    const onEditRecord = (record) => {
        setIsEditing(true);
        setActiveRecord({ ...record });
    };
    
    const resetEditing = () => {
        setIsEditing(false);
        setActiveRecord(null);
    };

    const onSave = () => {
        if (-1 === activeRecord.id) {
            const randomNumber = parseInt(Math.random() * 1000);
            activeRecord.id = randomNumber;            
            setDataSource([ ...dataSource, activeRecord ]);
            notification("Record created");
        } else { // editing an existing record
            setDataSource((pre) => {
                return pre.map((rec) => {
                    if (rec.id === activeRecord.id) {
                        return activeRecord;
                    } else {
                        return rec;
                    }
                })
            });
            notification("Record modified");
        }
        resetEditing();
    }

    const onClose = () => {
        resetEditing();
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            {contextHolder}
            <Button onClick={onAddRecord}>Add a new Record</Button>
            <Table columns={columns} dataSource={dataSource}></Table>
            
            <Drawer 
                title="Edit Record"
                open={isEditing}
                onClose={onClose}
                closeIcon={false}
                maskClosable={false}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onSave} type="primary">
                            Save
                        </Button>
                    </Space>
                }
            >
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" initialValues={{activeRecord}}>
                    <Form.Item name="name" label="Name" rules={[{required: true,},]}>
                        <Input
                            onChange={(e) => {
                                setActiveRecord((pre) => {
                                    return { ...pre, name: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{required: true,},]}>
                        <Input 
                            onChange={(e) => {
                                setActiveRecord((pre) => {
                                    return { ...pre, email: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                    <Form.Item name="address" label="Address" rules={[{required: true,},]}>
                        <Input 
                            onChange={(e) => {
                                setActiveRecord((pre) => {
                                    return { ...pre, address: e.target.value };
                                });
                            }}
                        />
                    </Form.Item>
                </Form>

                <div style={{ color:'black' }}>
                    <pre>{JSON.stringify(activeRecord, null, 2)}</pre>
                </div>
            </Drawer >          
        </>
    )
}

export default AntDTableCRUD;