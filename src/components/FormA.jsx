import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, Select, Checkbox ,Tooltip} from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
const FormA = ({next}) => {

  return (
    <div className="container mt-5" style={{width:"60%"}}>
      <Form layout="vertical">
      <Form.Item label="Employee Name">
      <Input.Group>
        <Row gutter={[24, 24]}>
          <Col span={8}>
          <Input  placeholder="First Name"/>
          </Col>
          <Col span={8}>
          <Input placeholder="Middle Name" />
          </Col>
          <Col span={8}>
          <Input placeholder="Last Name" />
          </Col>
        </Row>
        </Input.Group>
          </Form.Item>
        <Row className="mt-2" gutter={[24, 24]}>
          <Col span={12}>
              <Form.Item label="Employee ID">
                <Input />
              </Form.Item>
          </Col>
          <Col span={12}>
              <Form.Item label="Gender">
                <Select>
                  <Select.Option value="demo">Male</Select.Option>
                  <Select.Option value="demo">Female</Select.Option>
                  <Select.Option value="demo">LGBTQI</Select.Option>
                </Select>
              </Form.Item>
          </Col>

          <Col span={12}>
              <Form.Item label="Date of Joining">
                <Input />
              </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Degisnation">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Checkbox>
          Employee is a Director/person with substantial interest in the company
          &nbsp;<Tooltip title="'Substantial interest in a company' means that the employee is a beneficial owner of shares and carries at least 20% of the voting power. This detail will help us fill out Form 12BA for this employee.">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
        </Checkbox>

        <Form.Item label="Work Email">
          <Input />
        </Form.Item>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item label="Department">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Work Location">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Checkbox>
          This employer will be able to view payslips submit their IT
          declaration and create reimbursement claim through the employee portal
        </Checkbox>
          <hr/>
          <h5>Statutory Components</h5>
          <p>Enable The Necesary Benifits and tax applicable for this employee</p>
        <Checkbox>
          Professional Tax
        </Checkbox>
        <Form.Item>
          <Button className="mt-5" type="primary" onClick={()=>next()}> Save & Continue</Button>&nbsp;
          <Button>Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormA;
