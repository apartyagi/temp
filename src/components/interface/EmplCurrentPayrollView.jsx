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
    title: "GROSS PAY",
    dataIndex: "net",
  },
  {
    title: "DEDUCTIONS",
    dataIndex: "pay",
  },
  {
    title: "BENEFITS",
    dataIndex: "tds",
  },
  {
    title: "REIMBURSEMENTS",
    dataIndex: "pam",
  },
  {
    title: "NET PAY	",
    dataIndex: "sta",
  },
];
const data = [
  {
    key: "1",
    name:"Jim",
    pad: "20",
    net : "₹2,778.00",
    pay: "₹0.00	",
    tds:"₹0.00	",
    pam:"₹0.00	",
    sta:"₹2,778.00",
  },
  {
    key: "2",
    name:"Janim",
    pad: "30",
    net : "₹2,778.00",
    pay: "₹0.00	",
    tds:"₹0.00	",
    pam:"₹0.00	",
    sta:"₹2,778.00",
  },
  {
    key: "3",
    name:"Jordy",
    pad: "25",
    net : "₹2,778.00",
    pay: "₹0.00	",
    tds:"₹0.00	",
    pam:"₹0.00	",
    sta:"₹2,778.00",
  },
  {
    key: "4",
    name:"Jack",
    pad: "28",
    net : "₹2,778.00",
    pay: "₹0.00	",
    tds:"₹0.00	",
    pam:"₹0.00	",
    sta:"₹2,778.00",
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
