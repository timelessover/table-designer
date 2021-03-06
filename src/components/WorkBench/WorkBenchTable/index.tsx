import React from "react";
import { Button, Popconfirm, Space, Table } from "antd";
import type { ProColumns, ProTableProps } from "@ant-design/pro-table";
import ProTable from "@ant-design/pro-table";
import { useStore } from "@/context";
import { toJS } from "@formily/reactive";
import { observer } from "@formily/reactive-react";
import { useUpdate } from "ahooks";
import { isEmpty } from "@/shared/isEmpty";
import { EditDialog } from "../WorkBenchDialog";


const selectOptionConfig = {
  rowSelection: {
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
    defaultSelectedRowKeys: [1],
  },
  tableAlertRender: ({ selectedRowKeys, selectedRows, onCleanSelected }) => (
    <span>
      已选 {selectedRowKeys.length} 项
      <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
        取消选择
      </a>
    </span>
  ),
  tableAlertOptionRender: () => {
    return (
      <Space size={16}>
        <a>批量删除</a>
        <a>导出数据</a>
      </Space>
    );
  },
};

const WorkBenchTable = () => {
  const { app } = useStore();
  const update = useUpdate();
  console.log(app.schema)
  const columns = (): ProColumns[] => {
    const cols = app.schema?.columns?.map((item) => {
      return toJS(item);
    });
    if (!isEmpty(app.schema.operation)) {
      cols.push({
        title: "操作",
        valueType: "option",
        fixed: "right",
        width: app.schema.operation.width,
        render: (text, record, _, action) => {
          const optionArray = [];
          if (app.schema.operation.edit) {
            optionArray.push(
              <a
                key="editable"
                onClick={() => EditDialog(app.schema.columns, "edit", record)}
              >
                编辑
              </a>
            );
          }

          if (app.schema.operation.detail) {
            optionArray.push(
              <a
                key="view"
                onClick={() => EditDialog(app.schema.columns, "view", record)}
              >
                查看
              </a>
            );
          }

          if (app.schema.operation.log) {
            optionArray.push(
              <a key="log" onClick={() => LogDialog()}>
                日志
              </a>
            );
          }

          if (app.schema.operation.delete) {
            optionArray.push(
              <Popconfirm
                title="确定删除此条数据吗？"
                onConfirm={() =>
                  new Promise((resolve) => {
                    setTimeout(() => resolve(1), 1000);
                  })
                }
              >
                <a key="delete">删除</a>
              </Popconfirm>
            );
          }

          return optionArray;
        },
      });
    }

    return cols;
  };

  React.useEffect(() => {
    update();
  }, [JSON.stringify({ ...app.schema })]);

  const toolBarRender = () => {
    const BarRenderArray = [];
    if (app.schema.extra?.add) {
      BarRenderArray.push(
        <Button
          type="primary"
          key="add"
          onClick={() => EditDialog(app.schema.columns, "add")}
        >
          新增
        </Button>
      );
    }

    if (app.schema.extra?.export) {
      BarRenderArray.push(<Button key="export">导出</Button>);
    }

    if (app.schema.extra?.lead) {
      BarRenderArray.push(<Button key="lead">导入</Button>);
    }

    return BarRenderArray;
  };

  let config: ProTableProps<any, any, any> = {
    toolBarRender,
    rowKey: app.schema?.basic?.rowKey,
    headerTitle: app.schema?.basic?.headerTitle,
    search: {
      defaultCollapsed: app.schema?.basic?.defaultCollapsed,
    },
    scroll: { x: app.schema?.basic?.scrollX || 100 },
  };

  if (app.schema.basic?.showSelect) {
    config = {
      ...config,
      ...selectOptionConfig,
    };
  } else {
    Object.keys(selectOptionConfig).forEach((item) => {
      delete config[item];
    });
  }

  return (
    <ProTable
      columns={columns()}
      dataSource={app.mockDataSource.data}
      request={(params, sorter, filter) => {
        return Promise.resolve({
          success: true,
        });
      }}
      dateFormatter="string"
      {...config}
    />
  );
};

export default observer(WorkBenchTable);
