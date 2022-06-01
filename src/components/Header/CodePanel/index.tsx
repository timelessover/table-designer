import MonacoInput from "@/components/MonacoInput";
import renderDiaLog from "@/core/renderModal";
import renderTable from "@/core/renderTable";
import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const panelList = [
  {
    tab: "表格",
    content: renderTable,
  },
  {
    tab: "新增/编辑/详情",
    content: renderDiaLog,
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
