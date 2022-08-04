import React, { useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Avatar, Image, Divider, Table, Button,Dropdown,Menu,Space } from "antd";
const columns = [
  {
    title: "EMPLOYEE NAME",
    dataIndex: "name",
    render: (name, img, id) => {
      return (
        <div style={{ display: "flex" }}>
          {/* <Avatar src={<Image src={`${img.img}`} style={{ width: 32 }} />} /> */}
          <Avatar
            src={
              <Image
                src={`https://joeschmoe.io/api/v1/random`}
                style={{ width: 32 }}
              />
            }  
          />

          {/*<Avatar src={record.productimage}/> */}
          <div>
            <div>
              <Link to={`/siemp/${id + 1}`}>
                <a style={{ textDecoration: "none" }}>{name}</a>
              </Link>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    title: "WORK EMAIL",
    dataIndex: "workemail",
  },
  {
    title: "DEPARTMENT",
    dataIndex: "department",
  },
  {
    title: "COST TO COMPANY",
    dataIndex: "ctc",
  },
];

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const data = [
  {
    key: "1",
    name: "John Brown",
    img: "https://images.pexels.com/photos/12763989/pexels-photo-12763989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "2",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "3",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "4",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "5",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "6",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "7",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "8",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "9",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "10",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "11",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "12",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "13",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "14",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "15",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "16",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "17",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "18",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "19",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "20",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "21",
    name: "John Brown",
    workemail: "myemail.com",
    department: "CS",
    ctc: "20000",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const AllEmployeList = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <>
      <div class="container mt-2">
        <div class="row justify-content-between">
          <div class="col-md-4 col-12">
          <Dropdown overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <Space size={`large`} >
          Active Employee
        <DownOutlined />
      </Space>
    </Dropdown>
          </div>
          <div class="col-md-2 col-12">
            <Link to={`/emp`}>
            <Button type="primary" size={`middle`}>
              ADD Employee
            </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <Divider />
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default AllEmployeList;
