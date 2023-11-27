import { useState, useEffect } from 'react';
import axios from 'axios';
import { Space, Table, Tag, message } from 'antd';
import UserService from './UserService';

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
    const [response, setReponse] = useState(null);
    const [errorResponse, setErrorResponse] = useState(null);
    const [loading, setLoading] = useState(true);

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      AXIOS LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const axios_get = () => {
        setLoading(true);
        UserService.getAll()
        .then((response) => {
            if (response.status === 200) {
                console.log(JSON.stringify(response.data));
                setReponse(response.data);
                setLoading(false);
            }
        }).catch(error => {
            setErrorResponse(error);
            setLoading(false);
        });
    };

    const axios_filter = () => {
        axios.get(`${baseURL}`)
        .then((response) => {
            if (response.status === 200) {
                setReponse(response.data);
            }
        }).catch(error => {
            setErrorResponse(error);
        });     
    }

    const axios_delete = (id) => {
        axios.delete(`${baseURL}/${id}`)
        .then((response) => {
            if (response.status === 200) {
                setErrorResponse(response.data);
            }
        }).catch(error => {
            setErrorResponse(error);
        });
    };

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      HOOK LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        setTimeout(() => {
            axios_get();
            setDataSource(data);
        }, 1000);
    }, []);

    useEffect(() => {
        if (response != null) {
            info("Response");
        }
    }, [response]);

    useEffect(() => {
        if (errorResponse != null) {
            errorInfo(errorResponse.message);
        }
    }, [errorResponse]);

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      MESSAGE LOGIC
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    const [messageApi, messageHolder] = message.useMessage();

    const info = (messageText) => {
        messageApi.info(messageText);
    };

    const errorInfo = (messageText) => {
        messageApi.error(messageText);
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------
    //
    //      VIEW
    //
    // ------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <pre>{ JSON.stringify(response) }</pre><br/>
            {messageHolder}
            <Table 
                columns={columns} 
                dataSource={dataSource}
                loading={loading}
                bordered="true"
                size="small"
            />
        </>
    )
}

export default SimpleTable;
