import React from "react";
// import "./index.css";
import {Card, Avatar, Divider, Popconfirm,message } from "antd";
import {
  ApartmentOutlined,
  MailOutlined,
  UserOutlined,
  CalendarOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import Noemployee from "./Noemployee";
import { Button, PageHeader, Tabs } from "antd";
import { useParams, Link } from "react-router-dom";
import { Typography } from "antd";
import "antd/dist/antd.css";
import FormB from "./FormB";
import FormBViewSingEmployee from "./FormBViewSingEmployee";
const { TabPane } = Tabs;
const { Title, Text } = Typography;

const text = "Are you sure you wanna disable this employee?";

const confirm = () => {
  message.info("Emplyee Disable Successfull...");
};

const SingleEmployee = () => {
  const { id } = useParams("id");
  return (
    <div className="container">
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="USER_NAME"
        subTitle={`ID:#45522${id}`}
        extra={[
          <Link to="/emp">
            <Button key="1" type="primary">
              Add Deduction
            </Button>
          </Link>,
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Overview" key="1">
              <div class="row gx-4 mt-2">
                <div class="col-md-4 ">
                  <div class="shadow-sm p-3 mb-5 bg-body rounded">
                    <Card bordered={false} style={{ width: "100%" }}>
                      <div className="text-center">
                        <Avatar
                          src="https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                          }}
                        />
                        <div className="ml-5">
                          <Title level={5}>Andrew</Title>
                          <Text>CS</Text>
                        </div>
                      </div>
                      <Divider />
                      <div>
                        <Text type="secondary">BASIC INFORMATION</Text>
                        <p className="mt-2">
                          <MailOutlined />
                          &nbsp;&nbsp;&nbsp; wcv@gmail.com
                        </p>
                        <p>
                          <UserOutlined />
                          &nbsp;&nbsp;&nbsp; Male
                        </p>
                        <p>
                          <CalendarOutlined />
                          &nbsp;&nbsp;&nbsp; 12/07/2022 (Date of Joining)
                        </p>
                        <p>
                          <ApartmentOutlined />
                          &nbsp;&nbsp;&nbsp; fddf
                        </p>
                        <p>
                          {" "}
                          <CompassOutlined />
                          &nbsp;&nbsp;&nbsp; Head Office
                        </p>
                      </div>
                      <Divider />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text type="secondary">Portal Access</Text>
                        <Popconfirm
                          placement="topLeft"
                          title={text}
                          onConfirm={confirm}
                          okText="Yes"
                          cancelText="No"
                        >
                          <a href="#">(disable.)</a>
                        </Popconfirm>
                        
                      </div>
                    </Card>
                  </div>
                </div>
                <div class="col-md-6">
                  <div className="row gy-5">
                    <div className="col-md-12 shadow-sm p-3 mb-5 bg-body rounded">
                      <div>
                        <Title level={4}>Personal Information</Title>
                        <div className="row">
                          <div className="col-md-3">
                            <p>Date of Birth</p>
                            <p>Father's Name</p>
                            <p>PAN</p>
                            <p>Personal Email Address</p>
                            <p>Mobile Number</p>
                            <p>Residential Address</p>
                          </div>
                          <div className="col-md-3 text-center">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                          </div>
                          <div className="col-md-6">
                            <p>22/04/1689</p>
                            <p>Tobey</p>
                            <p>PNTNP52</p>
                            <p>tobey@gmail.com</p>
                            <p>854216589</p>
                            <p>Noida</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 p-3 shadow-sm p-3 mb-5 bg-body rounded">
                      <div>
                        <Title level={4}>Payment Information</Title>
                        <Text>Payment Mode</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Salary Details" key="2">
              <FormBViewSingEmployee/>
            </TabPane>
            <TabPane tab="Investments" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Payslips & Forms" key="4">
              Content of Tab Pane 4
            </TabPane>
            <TabPane tab="Loans" key="5">
              <Noemployee />
            </TabPane>
          </Tabs>
        }
      ></PageHeader>
    </div>
  );
};

export default SingleEmployee;
