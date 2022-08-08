import React,{ useState} from 'react';
import { Table, Button, Col, Drawer, Form, Input, Row, Select, Space,Typography } from 'antd';
import { Link } from "react-router-dom";

const { Option } = Select;
const onChange = (pagination, sorter, extra) => {
    console.log('params', pagination, sorter, extra);
  };
  
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '15%',
      render:(name,id)=>{
        return(
          <Link to={`/sicli/1`}>
          <p>{`${name}`}</p>
          </Link>
        )
      }
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
      id: '1',
      name: 'John Brown',
      email: 'azc@gmail.com',
      number:'658941256',
      company:'winklix',
      cdate:'20-04-2001',
  
    },
    {
      id: '2',
      name: 'John pink',
      email: 'pink@gmail.com',
      number:'985236415',
      company:'winklix',
      cdate:'20-04-2002',
    },
    {
      id: '3',
      name: 'John white',
      email: 'white@gmail.com',
      number:'456854126',
      company:'winklix',
      cdate:'21-04-2003',
    },
    {
      id: '4',
      name: 'John snow',
      email: 'snow@gmail.com',
      number:'85125635',
      company:'winklix',
      cdate:'22-04-2004',
    },
  ];
function AllClients() {
  const [visible, setVisible] = useState(false);

  const isThereAnyClient =true;
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
    <div className="d-flex justify-content-end mt-2 mx-2">
    <Button type="primary" shape="round" onClick={showDrawer} size={`large`}>ADD Client</Button>
    </div>
    <div className="container-fluid mt-4"><Table columns={columns} dataSource={data} onChange={onChange} /></div>
    <Drawer
        title="ADD NEW CLIENT"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lname"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter Last Name",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Last Name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Job title"
                label="Job title"
                rules={[
                  {
                    required: true,
                    message: "Please enter Job title",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter Job title"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter phone Number",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter phone Number"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter email",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Please enter email"
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="companyName"
                label="Company Name"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}

export default AllClients;