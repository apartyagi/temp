import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "EMPLOYEE NAME",
    dataIndex: "name",  
    render: (text) => <a href="#">{text}</a>,
  },
  {
    title: "PAID DAYS	",
    dataIndex: "pad",
  },
  {
    title: "NET PAY",
    dataIndex: "net",
  },
  {
    title: "PAYSLIP",
    dataIndex: "pay",
  },
  {
    title: "TDS SHEET",
    dataIndex: "tds",
  },
  {
    title: "PAYMENT MODE",
    dataIndex: "pam",
  },
  {
    title: "PAYMENT STATUS",
    dataIndex: "sta",
  },
];
const data = [
  {
    key: "1",
    name:"Jim",
    pad: "20",
    net : "20,956",
    pay: "View",
    tds:"View",
    pam:"Cheque",
    sta:"Paid On 20/07/2022",
  },
  {
    key: "2",
    name:"Janim",
    pad: "30",
    net : "54,000",
    pay: "View",
    tds:"View",
    pam:"Cheque",
    sta:"Paid On 20/07/2022",
  },
  {
    key: "3",
    name:"Jordy",
    pad: "25",
    net : "18,562",
    pay: "View",
    tds:"View",
    pam:"Cheque",
    sta:"Paid On 20/07/2022",
  },
  {
    key: "4",
    name:"Jack",
    pad: "28",
    net : "12,325",
    pay: "View",
    tds:"View",
    pam:"Cheque",
    sta:"Paid On 20/07/2022",
  },
]; // rowSelection object indicates the need for row selection

const TableSinglePayroll = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
      
    </div>
  );
};

export default TableSinglePayroll;
