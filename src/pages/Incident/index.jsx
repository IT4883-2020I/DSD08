import React from "react";
import { Tabs } from "antd";
import { UnorderedListOutlined,AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import "./style.css"
import ListIncidents from "../../components/IncidentComponents/ListIncidents"
const { TabPane } = Tabs;

const Incident = () => {
  return (
    <div>
      {" "}
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <UnorderedListOutlined />
              Danh sách công việc xử lý
            </span>
          }
          key="1"
        >
          <ListIncidents/>
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Tab 2
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Incident;
