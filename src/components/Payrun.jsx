import React from "react";
import { PageHeader, Tabs } from "antd";
import Nopayrun from "./Nopayrun";
import { Dropdown, Menu, Space, Divider } from "antd";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import PayrollHistory from "./PayrollHistory";
const { TabPane } = Tabs;
const menu = (
  <Menu
    items={[
      {
        label: <span>All</span>,
        key: "0",
      },
      {
        label: <span>Regular Payroll</span>,
        key: "1",
      },
      {
        label: <span>Past Payroll</span>,
        key: "2",
      },
      {
        label: <span>Termination</span>,
        key: "3",
      },
    ]}
  />
);
const Payrun = () => {
  return (
    <section className="container-fluid">
      <PageHeader
        className="site-page-header-responsive"
        title="Pay Runs"
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Run Payroll" key="1">
              <Nopayrun />
            </TabPane>
            <TabPane tab="Payroll History" key="2">
              <Divider />
              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                arrow={{ pointAtCenter: true }}
              >
                <Space>
                  <span>
                    {" "}
                    <FilterOutlined /> Payroll Type :
                  </span>
                  <span>ALL</span>
                  <DownOutlined />
                </Space>
              </Dropdown>

              <PayrollHistory />
            </TabPane>
          </Tabs>
        }
      ></PageHeader>
    </section>
  );
};

export default Payrun;
