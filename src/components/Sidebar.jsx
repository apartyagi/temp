import React, { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import "./style/sidebar.css";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  UserOutlined,
  CheckSquareOutlined,
  DollarOutlined,
  FormOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import FooterC from "./FooterC";
import HeaderC from "./HeaderC";
const { Content, Sider } = Layout;

const Sidebar = ({}) => {

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {/* SideBar Started */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          className="logo"
          style={{
            height: "50px",
            margin: "60px MozAnimation",
            // backgroundImage:"url('https://www.winklix.com/assets/images/logo.webp')",
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
            opacity: '0.6',
            // backgroundColor:'#ffffff'
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/noemp">
              <UserOutlined />
              <span>Employee</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/pay">
              <ExportOutlined />
              <span>Pay Runs</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/">
              <CheckSquareOutlined />
              <span>Approvals</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/cm">
              <FormOutlined />
              <span>Client Master</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/">
              <DollarOutlined />
              <span>Loans</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/">
              <CheckSquareOutlined />
              <span>Reports</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/liemp">
              <CheckSquareOutlined />
              <span>lister</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      {/* SideBar End */}

      <Layout className="site-layout">
        {/* Header Started */}
        {/* <Header
          className="head"
          style={{
            padding: 0,
            height: "50px",
            background: "#f6f8ff"
          }}
        > */}
        <HeaderC />
      {/* </Header> */}
        {/* Header End */}

        {/* Content Part Start */}
        <Content className="contra" style={{ margin: "0 0px" }}>
          <Outlet />
        </Content>
        {/* Content part end */}

        {/* Footer Start  */}
        <FooterC />
        {/* Footer End */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;
