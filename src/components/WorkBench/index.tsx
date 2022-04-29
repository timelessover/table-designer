import { prefix } from "@/shared/constants";
import { observer } from "@formily/reactive-react";
import { Card } from "antd";
import React from "react";
import "./style.less";
import WorkBenchTable from "./WorkBenchTable";

function WorkBench() {
  return (
    <div className={`${prefix}-workbench--container`}>
      <Card bodyStyle={{padding:0}} >
        <WorkBenchTable />
      </Card>
    </div>
  );
}

export default observer(WorkBench);
