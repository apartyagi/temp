import React, { useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";
import FormD from "./FormD";
import { Steps,Divider } from "antd";
const { Step } = Steps;

const AddEmployeeSections = () => {
 
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: 'Basics',
      content: <FormA next={next}/>,
    },
    {
      title: 'Salary Details',
      content: <FormB next={next} />,
    },
    {
      title: 'Personal Info',
      content: <FormC next={next}/>,
    },
     {
      title: 'Payment Info',
      content: <FormD next={next}/>,
    },
  ];

  return (
    <>
    <div className="container-md mt-5" style={{width:"60%"}}>
      <Steps size="default" current={current}>
      {steps.map((item,index) => (
          <Step key={index} title={item.title} />
        ))}
      </Steps>
    </div>
    <Divider/>
    <div className="steps-content">{steps[current].content}</div>
    </>
  );
};

export default AddEmployeeSections;
