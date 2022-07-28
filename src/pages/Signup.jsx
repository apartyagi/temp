import React from "react";
import { Button, Checkbox, Input } from "antd";
import { MobileOutlined, UserOutlined,SendOutlined,LockOutlined,GlobalOutlined } from "@ant-design/icons";
import "./signup.css";
const Signup = () => {
  return (
    <section className="container">
      <div className="flex-container">
        <div id="child1">
          <div className="chillar mx-2">
          <div>
          <img style={{width:"35px"}} src={`https://cdn-icons-png.flaticon.com/512/2274/2274790.png`}/>
          </div>
          <div>
          <h5 className="mx-2">HEAD Payroll</h5>
          </div>
          </div>
          <p className="mt-3 pop">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere et
            quaerat mollitia! Magnam reprehenderit repellat earum aut
            consequatur dolorem tempora nulla cum exercitationem nihil soluta,
            distinctio iste quae officiis consectetur.
          </p>

          <p>We built OPPO so you can:</p>
          <ul className="r-1024">
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Streamline</strong> your payroll process end-to-end</span></li>
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Define</strong> clear roles for your payroll staff</span></li>
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Create</strong> salary components, allowances and more, the way you want</span></li>
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Compute</strong> your employees' paycheck accurately every time</span></li>
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Distribute</strong> salaries and payslips online</span></li>
            
              <li><span classname="m-right" style={{fontSize:"10px"}}></span><span><strong>Automatic</strong> payroll accounting with Zoho Books</span></li>
            
              <li><span className="m-right" style={{fontSize:"10px"}}></span><span><strong>Reduce</strong> payroll staff workload with collaborative self-service portal</span></li>
            
          </ul>
        </div>
        <div id="child2">
          <div id="child2baby">

          <h2 className="h20">Let's get Started</h2>
          <p className="text-center" >
            Explore all the features with a 30-day free trial
          </p>

          <div className="inps">
            <Input
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid grey",
              }}
              size="large"
              placeholder="Company Name"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="inps">
            <Input
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid grey",
              }}
              size="large"
              placeholder="Email"
              prefix={<SendOutlined />}
              />
          </div>
          <div className="inps">
            <Input
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid grey",
              }}
              size="large"
              placeholder="Contact Number"
              prefix={<MobileOutlined />}
            />
          </div>
          <div className="inps">
            <Input
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid grey",
              }}
              size="large"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </div>
          <div className="inps">
            <Input
              style={{
                outline: "none",
                border: "none",
                borderBottom: "1px solid grey",
              }}
              size="large"
              defaultValue={`India`}
              placeholder="Country"
              prefix={<GlobalOutlined />}
              />
          </div>

          <p className="mt-3 pop" >Your data will be in INDIA data center.</p>
          <Checkbox>
          I agree to the .<a href="">Terms of Service and Privacy Policy</a>
          </Checkbox>
          <br />
          <div className="text-center mt-5">
            <Button type="danger" shape="round" size={`large`}>
               SIGN UP NOW  
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Signup;
