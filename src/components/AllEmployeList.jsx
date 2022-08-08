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
    name: "John person",
    img: "https://images.pexels.com/photos/12763989/pexels-photo-12763989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    workemail: "myemail1.com",
    department: "IT",
    ctc: "10,0000",
  },
  {
    key: "2",
    name: "John purple",
    workemail: "myemail2.com",
    department: "Calling",
    ctc: "20,0000",
  },
  {
    key: "3",
    name: "John chef",
    workemail: "myemail3.com",
    department: "Manager",
    ctc: "30,0000",
  },
  {
    key: "4",
    name: "John walkerson",
    workemail: "myemail4.com",
    department: "Account",
    ctc: "40,0000",
  },
  {
    key: "5",
    name: "John jain",
    workemail: "myemail5.com",
    department: "Director",
    ctc: "50,0000",
  },
  {
    key: "6",
    name: "John wongs",
    workemail: "myemail6.com",
    department: "HR",
    ctc: "60,0000",
  },
  {
    key: "7",
    name: "John teaserface",
    workemail: "myemail7.com",
    department: "HRD",
    ctc: "70,0000",
  },
  {
    key: "8",
    name: "John pink",
    workemail: "myemail8.com",
    department: "IT",
    ctc: "80,0000",
  },
  {
    key: "9",
    name: "John white",
    workemail: "myemail9.com",
    department: "System Administrators",
    ctc: "90,0000",
  },
  {
    key: "10",
    name: "John brown",
    workemail: "myemail01.com",
    department: "CS",
    ctc: "10,00000",
  },
  {
    key: "11",
    name: "John wong",
    workemail: "myemail11.com",
    department: "CS",
    ctc: "11,00000",
  },
  {
    key: "12",
    name: "John pol",
    workemail: "myemail21.com",
    department: "CS",
    ctc: "12,00000",
  },
  {
    key: "13",
    name: "John croud",
    workemail: "myemail31.com",
    department: "CS",
    ctc: "13,00000",
  },
  {
    key: "14",
    name: "John play",
    workemail: "myemail41.com",
    department: "CS",
    ctc: "14,00000",
  },
  {
    key: "15",
    name: "John smith",
    workemail: "myemail51.com",
    department: "CS",
    ctc: "15,00000",
  },
  {
    key: "16",
    name: "John walker",
    workemail: "myemail61.com",
    department: "CS",
    ctc: "16,00000",
  },
  {
    key: "17",
    name: "John sinha",
    workemail: "myemail71.com",
    department: "CS",
    ctc: "174,0000",
  },
  {
    key: "18",
    name: "John lock",
    workemail: "myemail81.com",
    department: "CS",
    ctc: "145,0000",
  },
  {
    key: "19",
    name: "John Wick",
    workemail: "myemail91.com",
    department: "CS",
    ctc: "20,000000",
  },
  {
    key: "20",
    name: "John Brown",
    workemail: "myemail21.com",
    department: "CS",
    ctc: "20000",
  },
  {
    key: "21",
    name: "John Brown",
    workemail: "myemail22.com",
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
