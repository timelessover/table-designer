import React from "react";
import { observer } from "@formily/react";
import { Card, Collapse } from "antd";
import { useStore } from "../../context";
import ColumnsForm from "./components/ColumnsForm";
import OperationForm from "./components/OperationForm";
import ExtraForm from "./components/ExtraForm";
import BasicForm from "./components/BasicForm";
import { prefix } from "@/shared/constants";

const { Panel } = Collapse;

/**
 * 如何描述一个表格模板的schema呢？
 * 搜索的columns设置，hide
 * columns配置与form CURD 同步字段到编辑 详情 删除
 * 操作区域 编辑 删除 详情 日志
 * 表格操作区域 导出 批量导入 批量删除
 * title
 * {
 *  columns:[
 *
 *
 *  ]
 * }
 */

function LeftMenusSettings() {

  return (
    <div className={`${prefix}-scroll`}>
      <Card title={"配置区域"} bodyStyle={{ padding: 0 }} style={{ width: 400 }}>
        <Collapse defaultActiveKey={["1", "2", "3", "4"]}>
          <Panel header="基础配置" key="1">
            <BasicForm />
          </Panel>
          <Panel header="列配置" key="2">
            <ColumnsForm />
          </Panel>
          {/* <Panel header="操作栏" key="3">
            <OperationForm />
          </Panel>
          <Panel header="额外按钮配置" key="4">
            <ExtraForm />
          </Panel> */}
        </Collapse>
      </Card>
    </div>
  );
}

export default observer(LeftMenusSettings);
