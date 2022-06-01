import MonacoInput from "@/components/MonacoInput";
import renderDiaLog from "@/templete/renderModal";
import renderTable from "@/templete/renderTable";
import renderApi from '@/templete/renderApi'
import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const panelList = [
  {
    tab: "表格",
    content: renderTable,
  },
  {
    tab: "api",
    content: renderApi,
  },
];

const CodePanel = () => (
  <Tabs defaultActiveKey={"0"}>
    {panelList.map((panel, i) => (
      <TabPane tab={panel.tab} key={i}>
        <MonacoInput value={panel.content()} />
      </TabPane>
    ))}
  </Tabs>
);

export default CodePanel;
