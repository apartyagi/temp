import React from "react";
import { Carousel,Input,Button,Divider } from "antd";
import "./login.css";

const LoginPage = () => {
  return (
    <section className="bc">
      <div className="container plp" >
      <div className="row mar justify-content-center sss">
        <div className="col-md-6">
          <div id="olp">
          <div className="mt-5">
            <h2>Sign in</h2>
            <p>to access dashboard</p>
          </div>
          <div>
          <Input placeholder="Enter Your Register Mail ID" />;
        </div>
        <Button type="primary" block>NEXT</Button>
        <div className="text-center mt-3">
        <a href="#">Forgot Password?</a>
        </div>
        <Divider/>
          </div>
        </div>
        <div className="col-md-5">
          <Carousel autoplay effect="fade">
            <div>
              <img
                src="https://accounts.zoho.com/v2/components/images/recovery_illustration2x.png"
                style={contentStyle}
                />
            </div>
            <div>
              <img
                src="https://freesvg.org/img/1619701769slovenia-heart-flag.png"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src="https://freesvg.org/img/1604067984Turkish-flag-splatter-svg.png"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src="https://accounts.zoho.com/v2/components/images/mfa_illustration2x.png"
                style={contentStyle}
                />
            </div>
          </Carousel>
        </div>
      </div>

    </div>
    </section>
  );
};
const contentStyle = {
  width: "100%",
  color: "#fff",
  objectFit: "cover",
  textAlign: "center",
  background: "#364d79",
};
export default LoginPage;
