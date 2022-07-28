import React from 'react'
import { Typography } from 'antd';
const DashBoard = () => {
  const { Title,Paragraph } = Typography;
  return (
    <div className="container-fluid text-center mt-5">
      <Title level={3}>Welcome User 920!</Title>
      <Paragraph>
      Set up your organisation before you run your first payroll.
      </Paragraph>
    </div>
  )
}

export default DashBoard