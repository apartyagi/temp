  import React,{ useState} from 'react'
import {Divider,Checkbox,Button,Form, Input,Col, Row, Radio,message} from 'antd';
import {BankOutlined} from '@ant-design/icons';
import "./style/allform.css";


const FormD = ({next}) => {
  const [isbankchecked, setisbankchecked] = useState(false);

  const onChange = (e) => {
    setisbankchecked(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  };

  const finalss=()=>{
    message.success('This is a success message');
    setTimeout(() => {
      window.location.href='/';
    }, 1000);
  }

  return (
    <section className='container' style={{width:'45%'}}>
      <div>
          <p className='hapaya'>How would you like to pay this employee?*</p>
          <Divider/>
          <div className='div-contra'>
            <div id='childa'>
            <BankOutlined />
            </div>
          <div id='chilb'>
            <p className='papaya'>Bank Transfer (Manual Process)</p>
            <span className='sapaya'>Download Bank Advice and process the payment through your bank's website</span>
          </div>
            <div id='childc'>
              <Checkbox id="chck"  onChange={onChange}/>
            </div>
          </div>
          {
            isbankchecked?(
            <>
            <div className='container mt-5'>
              <Form layout='vertical'>
            <Form.Item label="Account Holder Name*">
            <Input />
            </Form.Item>
            <Form.Item label="Bank Name*">
            <Input />
            </Form.Item>
            <Row gutter={[32, 24]}>
              <Col span={12} >
              <Form.Item label="Account Number*">
            <Input />
            </Form.Item>
              </Col>
              <Col span={12} >
              <Form.Item label="Re-enter Account Number*">
            <Input />
            </Form.Item>
              </Col>
            </Row>

            <Row gutter={[32, 24]}>
              <Col span={12} >
              <Form.Item label="IFSC*">
            <Input />
            </Form.Item>
              </Col>
              <Col span={12} >
              <Form.Item label="Account Type">
              <Radio >
        Saving
      </Radio>
      <Radio >
        Current
      </Radio>
            </Form.Item>
              </Col>
      </Row>
              </Form>
            </div>
            </>
            ):(
            <>
            ..
            </>)
          }
          <Divider/>
          <div className='div-contraa'>
          <div id='childa' >
            <BankOutlined />
            </div>
          <div id="aom">
            <p className='papaya'>Cheque</p>
          </div>
          <div>
          <Checkbox id="chck"/>
          </div>
        </div>
          <Divider/>

          <div>
          <Button type="primary" onClick={finalss} shape="round" size={`large`}>Finish</Button>
          </div>
      </div>
    </section>
  )
}

export default FormD