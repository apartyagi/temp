import React from "react";
import { Tabs, Button, Collapse,Card } from "antd";
const { TabPane } = Tabs;
const { Panel } = Collapse;

function ClientDashboard() {
  return (
    <section className="container">
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Activity" key="1">
            <Card className="mb-1">
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header="Notes By :umang" key="1">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  aliquid nostrum quos ea et iure earum facere blanditiis
                  provident ipsam, magnam incidunt! Suscipit fugiat quaerat
                  tenetur asperiores harum hic autem.
                </p>
              </Panel>
            </Collapse>
            </Card>
            <Card className="mb-1">
            <Collapse defaultActiveKey={["1"]} ghost>
              <Panel header="Notes By :umang" key="1">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  aliquid nostrum quos ea et iure earum facere blanditiis
                  provident ipsam, magnam incidunt! Suscipit fugiat quaerat
                  tenetur asperiores harum hic autem.
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
        </Tabs>
      </div>
    </section>
  );
}

export default ClientDashboard;
