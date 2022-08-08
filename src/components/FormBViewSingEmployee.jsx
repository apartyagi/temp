import React from 'react'
import { Button,Typography,Input } from 'antd';
import { Card } from 'antd';
const {Title}=Typography;
const FormBViewSingEmployee = () => {
  return (
    <>
    <div className='container' style={{width:"90%"}}>
    <Card className="shadow-sm p-3 bg-body rounded mt-5">
    <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><Title level={4}>Annual CTC</Title>	</th>
      <th scope="col">
      ₹33,333.00 per year
      </th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>SALARY COMPONENTS</td>
      <td>MONTHLY AMOUNT</td>
      <td>ANNUAL AMOUNT</td>
    </tr>
    
    <tr>
      <th> <Title level={5}>Earnings</Title></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Basic</td>
      <td>₹ 1,389.00</td>
      <td>₹ 16,668.00</td>
    </tr>
    <tr>
      <td>House Rent Allowance</td>
      <td>₹ 695.00	</td>
      <td>₹ 8,340.00</td>
    </tr>
    <tr>
      <td>Fixed amount</td>
      <td>₹ 694.00</td>
      <td>₹ 8,328.00</td>
    </tr>
    <tr style={{background: "#f6f8ff"}}>
      <td className='fw-bold'>Cost to Company</td>
      <td></td>
      <td className='fw-bold'>₹2,778.00</td>
      <td className='fw-bold'>₹33,333.00 per year</td>
    </tr>
  </tbody>
</table>
   </Card>
   </div>
   <br/>
    </>
  )
}

export default FormBViewSingEmployee