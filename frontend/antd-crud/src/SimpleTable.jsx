import { useState, useEffect } from 'react';
import { Space, Table, Tag, message } from 'antd';

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
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

// ------------------------------------------------------------------------------------------------------------------------------------------
//
//      DATA
//
// ------------------------------------------------------------------------------------------------------------------------------------------

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const SimpleTable = () => {
    
    const [dataSource, setDataSource] = useState(null);

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      HOOK LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        info('PageInit()');

        setTimeout(() => {
            setDataSource(data);
        }, 1000);
    }, [])

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      MESSAGE LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const [messageApi, messageHolder] = message.useMessage();

    const info = (messageText) => {
        messageApi.info(messageText);
    };

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            {messageHolder}
            <Table 
                columns={columns} 
                dataSource={dataSource}
                bordered="true"
                size="small"
            />
        </>
    )
}

export default SimpleTable;
