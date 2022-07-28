import React from 'react'
import {Layout, Button, Dropdown, Menu} from 'antd';
import "./style/header.css";
import { Avatar } from 'antd';
import {SettingOutlined ,QuestionCircleOutlined,BellOutlined,UsergroupAddOutlined  } from "@ant-design/icons"
const { Header} = Layout;
const HeaderC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown" style={design}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            cc
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item" style={design}>  
        <UsergroupAddOutlined style={icondesign} />
              
        </li>
        <li className="nav-item" style={design}>  
            <BellOutlined style={icondesign}/>
        </li>
        <li className="nav-item" style={design}>  
        <SettingOutlined style={icondesign}/>
        </li>
        <li className="nav-item" style={design}>  
        <QuestionCircleOutlined style={icondesign} />
        </li> <li className="nav-item" style={design}>  
        <Avatar size={30}src={`https://joeschmoe.io/api/v1/random`} ></Avatar>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

const design={
  // 'padding':'3px',
  'marginRight':'20px'
}
const icondesign={

  'fontSize': '135%'

}

export default HeaderC;