import React from "react";
import { Tabs, Button, Collapse, Card } from "antd";
import "./style/CleientDash.css";
const { TabPane } = Tabs;
const { Panel } = Collapse;

function ClientDashboard() {
  const [activeKey, setActiveKey] = React.useState('1')
  const onKeyChange=(key)=>{
    setActiveKey(key)
  }
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-md-11">
          <Tabs defaultActiveKey="1" activeKey={activeKey} onChange={onKeyChange}>
            <TabPane tab="Activity" key="1">
              <Card className="mb-1">
                <Collapse defaultActiveKey={["1"]} ghost>
                  <Panel header="Notes By :umang" key="1">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Modi aliquid nostrum quos ea et iure earum facere
                      blanditiis provident ipsam, magnam incidunt! Suscipit
                      fugiat quaerat tenetur asperiores harum hic autem.
                    </p>
                  </Panel>
                </Collapse>
              </Card>
              <Card className="mb-1">
                <Collapse defaultActiveKey={["1"]} ghost>
                  <Panel header="Notes By :umang" key="1">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Modi aliquid nostrum quos ea et iure earum facere
                      blanditiis provident ipsam, magnam incidunt! Suscipit
                      fugiat quaerat tenetur asperiores harum hic autem.  
                    </p>
                  </Panel>
                </Collapse>
              </Card>
            </TabPane>
            <TabPane tab="Notes" key="2">
              <div className="d-flex justify-content-end">
                <Button type="primary">Create Notes</Button>
              </div>
            </TabPane>
            <TabPane tab="Emails" key="3">
              <div className="d-flex justify-content-end">
                <Button type="primary">Create Email</Button>
              </div>
            </TabPane>
            <TabPane tab="Tasks" key="4">
              <div className="d-flex justify-content-end">
                <Button type="primary">Create Task</Button>
              </div>
            </TabPane>
            <TabPane key="5" tab="Meetings" > 
            <div className="d-flex justify-content-end">
                <Button type="primary">Create Meetings</Button>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="col-md-1 text-center">
          <div className="icn">
            <p onClick={() => onKeyChange('2')}><i class="bi bi-pencil-square"></i></p>
          </div>
          <div className="icn">
            <p onClick={() => onKeyChange('3')}><i class="bi bi-envelope"></i></p>
          </div>
          <div className="icn">
            <p onClick={() => {console.log("call")}}><i class="bi bi-telephone"></i></p>
          </div>
          <div className="icn">
            <p onClick={() => onKeyChange('1')}><i class="bi bi-plus-lg"></i></p>
          </div>
          <div className="icn">
            <p onClick={() => onKeyChange('4')}><i class="bi bi-cup"></i></p>
          </div>
          <div  className="icn">
            <p onClick={() => onKeyChange('5')}><i class="bi bi-calendar-heart"></i></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientDashboard;
