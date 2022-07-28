import React from "react";
import { Divider, Table } from 'antd';
import {Link} from 'react-router-dom';

const columns = [
    {
      title: 'PAYMENT DATE',
      dataIndex: 'nam',
      render:(nam,key,id)=>{
        return(
          <div>
            <Link to={`/paydet/${id}`}>
              <p style={{textDecoration:'none'}}>{nam}</p>
            </Link>
          </div>
          )
      }
    },
    {
      title: 'PAYROLL TYPE',
      dataIndex: 'typ',
    },
    {
      title: 'DETAILS',
      dataIndex: 'det',
    },
    {
      title: 'Status',
      dataIndex: 'sta',
    },
  ];
  const data = [
    {
      key: '1',
      nam: '20/07/2022',
      typ: 'Regular Payroll',
      det: '01/07/2022 - 31/07/2022',
      sta:'PAID',
    },
    {
      key: '2',
      nam: '20/07/2022',
      typ: 'Regular Payroll',
      det: '01/07/2022 - 31/07/2022',
      sta:'PAID'
    },
    {
      key: '3',
      nam: '20/07/2022',
      typ: 'Regular Payroll',
      det: '01/07/2022 - 31/07/2022',
      sta:'PAID'
    },
    {
      key: '4',
      nam: '20/07/2022',
      typ: 'Regular Payroll',
      det: '01/07/2022 - 31/07/2022',
      sta:'PAID'
    },
  ];

const PayrollHistory = () => {
  return (
    <section>
      <Divider />
      <Table  columns={columns} dataSource={data} pagination={false} />
    </section>
  );
};

export default PayrollHistory;
