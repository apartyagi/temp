import React from 'react';
import { Table,Button } from 'antd';
const onChange = (pagination, sorter, extra) => {
    console.log('params', pagination, sorter, extra);
  };
  
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '15%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email - b.email,
      width: '20%',
    },
    {
      title: 'Phone Number',
      dataIndex: 'number',
      sorter: (a, b) => a.number - b.number,
      width: '20%',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      sorter: (a, b) => a.company - b.company,
      width: '30%',
    },
    {
      title: 'Created Date',
      dataIndex: 'cdate',
      sorter: (a, b) => a.cdate - b.cdate,
      width: '15%',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      email: 'azc@gmail.com',
      number:'0',
      company:'winklix',
      cdate:'20-04-2001',
  
    },
    {
      key: '2',
      name: 'John Brown',
      email: 'azc@gmail.com',
      number:'0',
      company:'winklix',
      cdate:'20-04-2002',
    },
    {
      key: '3',
      name: 'John Brown',
      email: 'azc@gmail.com',
      number:'0',
      company:'winklix',
      cdate:'20-04-2003',
    },
    {
      key: '4',
      name: 'John Brown',
      email: 'azc@gmail.com',
      number:'0',
      company:'winklix',
      cdate:'20-04-2004',
    },
  ];
function AllClients() {
  return (
    <>
    <div className="d-flex justify-content-end mt-2 mx-2">
    <Button type="primary" shape="round"  size={`large`}>ADD Client</Button>
    </div>
    <div className="container mt-5"><Table columns={columns} dataSource={data} onChange={onChange} /></div>
    </>
  )
}

export default AllClients;