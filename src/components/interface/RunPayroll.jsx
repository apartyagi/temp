import React from "react";
import { Button,Divider } from 'antd';
import {Link} from "react-router-dom";
const RunPayroll = () => {
  return (
    <>
    <Divider/>
    <h5 className="mt-3">Process Pay Run for August 2022</h5>
    <section className="container-fluid shadow p-3 mb-5 bg-body rounded" style={{borderLeft:'2px solid #1890ff'}}>
      <div className="row justify-content-start">
        <div className="col-md-3">
          <p>EMPLOYEES' NET PAY</p>
          <span><b>₹34,278.00</b></span>
        </div>
        <div className="col-md-3">
          <p>PAYMENT DATE</p>
          <span><b>21/08/2022</b></span>
        </div>
        <div className="col-md-3">
          <p>NO. OF EMPLOYEES</p>
          <span><b>4</b></span>
        </div>
        <div className="col-md-3 mt-5">
            <Link to='/pay-curr'>
            <Button type="primary" size="large">View Details</Button>
            </Link>
        </div>
        <div className="mt-2">
          <p>Please approve this payroll before 21/08/2022 | 04:00 PM</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default RunPayroll;
