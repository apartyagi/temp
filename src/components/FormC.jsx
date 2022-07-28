import React from "react";
import { Col, Row, Form, Input ,Button} from "antd";
const FormC = ({next}) => {
  return (
    <div className="container mt-5" style={{width:"60%"}}>
         <Form layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item label="Personal Email Address">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Mobile Number">
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Date of Birth">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Age">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item label="Father's Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="PAN">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Residential Address">
          <Input />
          <br/>
          <br/>
          <Input />
        </Form.Item>
        <Input.Group>
        <Row gutter={[24, 24]}>
          <Col span={8}>
          <Input  placeholder="City"/>
          </Col>
          <Col span={8}>
          <Input placeholder="State" />
          </Col>
          <Col span={8}>
          <Input placeholder="Pincode" />
          </Col>
        </Row>
        </Input.Group>
      </Form>
      <Button onClick={()=>next()} className="mt-5" type="primary">Save & Continue</Button>&nbsp;
      <Button>Cancel</Button>
    </div>
  );
};

export default FormC;
