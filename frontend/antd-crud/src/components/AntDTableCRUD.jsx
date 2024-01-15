import { Button, Table, Modal, Input, Drawer, Space, } from "antd";
import { useState } from "react";
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
        console.log("onSave");

        if (-1 === activeRecord.id) {
            const randomNumber = parseInt(Math.random() * 1000);
            activeRecord.id = randomNumber;            
            setDataSource([ ...dataSource, activeRecord ]);
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
                <Input
                    value={activeRecord?.name}
                    onChange={(e) => {
                    setActiveRecord((pre) => {
                        return { ...pre, name: e.target.value };
                    });
                    }}
                />
                <Input
                    value={activeRecord?.email}
                    onChange={(e) => {
                    setActiveRecord((pre) => {
                        return { ...pre, email: e.target.value };
                    });
                    }}
                />
                <Input
                    value={activeRecord?.address}
                    onChange={(e) => {
                    setActiveRecord((pre) => {
                        return { ...pre, address: e.target.value };
                    });
                    }}
                />
            </Drawer >          
        </>
    )
}

export default AntDTableCRUD;