import React from 'react'
import {useParams} from 'react-router-dom';
import { Button, PageHeader, Descriptions,Divider,Tabs } from 'antd';
import TableSinglePayroll from './sub/TableSinglePayroll';

const { TabPane } = Tabs;

const PayrollView = () => {
    const { id } = useParams("id");     
  return (
    <section className="container-fluid">
    <PageHeader
    className="site-page-header-responsive"
    onBack={() => window.history.back()}
    title={`Regular Payroll ${'PAID'}`}
    extra={[
      <Button key="2">Send Pay slip</Button>,
      <Button key="1">---</Button>
    ]}
  >
  </PageHeader>
    <div className='main' style={{display:'flex',alignContent: 'center'}}>
    <div className="item itema" style={{backgroundColor:'#F1F2F8',padding: '25px',width:'30%'}}>
      <p>Period: July 2022 | 30 Base Days</p>
      <div style={{display:'flex',justifyContent: 'space-between'}} >
      <div >
      <h4>₹17,852.00</h4>
      <p>PAYROLL COST</p>
      </div>
      <div>
      <h4>₹17,852.00</h4>
      <p>EMPLOYEES' NET PAY</p>
      </div>
      </div>
    </div>
    <div className=' shadow-sm bg-body rounded item itemb text-center' style={{marginLeft:'20px',width:'15%',}}>
      <p>PAY DAY</p>
      <h4>20</h4>
      <p>JUL, 2022</p>
      <hr/>
      <p>3 Employees</p>
    </div>
    <div className=' item itemc' style={{marginLeft:'20px'}}>
      <h4>Taxes & Deductions</h4>
      <table className='table table-borderless'>
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
            <td>Post-Tax Deductions	</td>
            <td>₹0.00</td>
          </tr>

        </tbody>
      </table>
     </div>
     <div>

     </div>

    </div>
    <div className='mt-5 container-fluid'>
    <Tabs defaultActiveKey="1">
        <TabPane tab="Employee Summary" key="1" >
          <TableSinglePayroll/>
        </TabPane>
        <TabPane tab="Taxes & Deductions" key="2" >
        <p>Tax Deductions Sections {`${id}`}</p>
        </TabPane>
      </Tabs>
    </div>
    </section>
  )
}

export default PayrollView