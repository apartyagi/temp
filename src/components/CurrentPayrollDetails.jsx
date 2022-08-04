import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, PageHeader, Drawer,Divider, Tabs,InputNumber ,Space} from "antd";
import EmplCurrentPayrollView from "./interface/EmplCurrentPayrollView";

const { TabPane } = Tabs;


const CurrentPayrollDetails = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    
  const { id } = useParams("id");
  return (
    <section className="container-fluid">
    <PageHeader
      className="site-page-header-responsive"
      onBack={() => window.history.back()}
      title={`Regular Payroll ${"PAID"}`}
      extra={[
        <Button type="primary" key="2">Submit and Approve</Button>,
        <Button key="1">---</Button>,
      ]}
    ></PageHeader>
    <div className="main" style={{ display: "flex", alignContent: "center" }}>
      <div
        className="item itema"
        style={{ backgroundColor: "#F1F2F8", padding: "25px", width: "30%" }}
      >
        <p>Period: July 2022 | 30 Base Days</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4>₹17,852.00</h4>
            <p>PAYROLL COST</p>
          </div>
          <div>
            <h4>₹17,852.00</h4>
            <p>EMPLOYEES' NET PAY</p>
          </div>
        </div>
      </div>
      <div
        className="shadow-sm bg-body rounded item itemb text-center"
        style={{ marginLeft: "20px", width: "15%" }}
      >
        <p>PAY DAY</p>
        <h4>20</h4>
        <p>JUL, 2022</p>
        <hr />
        <p>3 Employees</p>
      </div>
      <div className="item itemc" style={{ marginLeft: "20px" }}>
        <h4>Taxes & Deductions</h4>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Taxes</td>
              <td>₹0.00</td>
            </tr>
            <tr>
              <td>Pre-Tax Deductions</td>
              <td>₹0.00</td>
            </tr>
            <tr>
              <td>Post-Tax Deductions </td>
              <td>₹0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
    <div className="mt-5 container-fluid">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Employee Summary" key="1">
          <p onClick={showDrawer}>kkkkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
          <EmplCurrentPayrollView />
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            visible={visible}
            footer={
                <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              SAVE
            </Button>
          </Space>
            }
          >
            <table className="table table-borderless">
            <tbody>
            <tr data-test-selector="earning-row">
                  <td>
                    <div>Payable Days</div>
                  </td>
                  <td className="text-right">31</td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>
                <tr data-test-selector="earning-row">
                  <td>
                    <div>LOP DAYS</div>
                  </td>
                  <td className="text-right"><InputNumber min={0} placeholder='0' max={10} defaultValue={3} /></td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>
                <tr data-test-selector="earning-row">
                  <td>
                    <div><b>Actual Payable Days</b></div>
                  </td>
                  <td className="text-right">{30}</td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>
                </tbody>
          </table>
            
            <Divider/>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th width="56%" className="earnings font-ms">
                    (+) Earnings
                  </th>
                  <th width="40%" className="text-right font-ms">
                    Amount
                  </th>
                  <th width="4%" className="action-column"></th>
                </tr>
              </thead>
              <tbody>
                <tr data-test-selector="earning-row">
                  <td>
                    <div>Basic</div>
                  </td>
                  <td className="text-right">₹1,389.00</td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>

                <tr data-test-selector="earning-row">
                  <td>
                    <div>House Rent Allowance</div>
                  </td>
                  <td className="text-right">₹695.00</td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>

                <tr data-test-selector="earning-row">
                  <td>
                    <div>Fixed Allowance</div>
                  </td>
                  <td className="text-right">₹694.00</td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>
              </tbody>
            </table>
            <Divider/>
          <table className="table">
            <tbody>
            <tr data-test-selector="earning-row">
                  <td>
                    <div><h4>NET PAY</h4></div>
                  </td>
                  <td className="text-right"><h4>₹2,778.00</h4></td>
                  <td className="vertical-align-middle action-column"></td>
                </tr>
                </tbody>
          </table>
          </Drawer>
        </TabPane>
        <TabPane tab="Taxes & Deductions" key="2">
          <p>Tax Deductions Sections {`${id}`}</p>
        </TabPane>
      </Tabs>
    </div>
  </section>
  )
}

export default CurrentPayrollDetails