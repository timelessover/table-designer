import { useStore } from "@/context";
import { isEmpty } from "@/shared/isEmpty";
import { toJS } from "@formily/reactive";

const renderTable = () => {
  const { app } = useStore();

  // const toolBarRender = () => {
  //   const BarRenderArray = [];
  //   if (app.schema.extra?.add) {
  //     BarRenderArray.push(
  //       `<Button
  //         type="primary"
  //         key="add"
  //         onClick={() => EditDialog("add")}
  //       >
  //         新增
  //       </Button>`
  //     );
  //   }

  //   if (app.schema.extra?.export) {
  //     BarRenderArray.push(`<Button key="export">导出</Button>`);
  //   }

  //   if (app.schema.extra?.lead) {
  //     BarRenderArray.push(`<Button key="lead">导入</Button>`);
  //   }

  //   return BarRenderArray;
  // };

  const columnsRender = () => {
    const cols = app.schema?.columns.map((item) => {
      return toJS(item);
    });
    return cols;
  };

  const outputColumns = JSON.stringify(columnsRender());


  // 配置项应该更灵活一些
  //   ${app.schema.operation
  //     ? `{
  //   title: "操作",
  //   valueType: "option",
  //   width:${app.schema.operation.width || 200},
  //   render: (text, record, _, action) => {
  //     return [
  //     ${app.schema.operation.edit
  //       ? `<a
  //     key="editable"
  //     onClick={() => EditDialog("edit", record)}
  //   >
  //     编辑
  //   </a>,`
  //       : ""
  //     }
  //     ${app.schema.operation.detail
  //       ? `<a
  //                  key="view"
  //                  onClick={() => EditDialog("view", record)}
  //                >
  //                  查看
  //                </a>,`
  //       : ""
  //     }
  //     ${app.schema.operation.log
  //       ? `          <a key="log" onClick={() => LogDialog(record)}>
  //                 日志
  //               </a>,`
  //       : ""
  //     }
  //     ${app.schema.operation.delete
  //       ? `<Popconfirm
  //             title="确定删除此条数据吗？"
  //             onConfirm={() =>
  //               new Promise((resolve) => {
  //                 setTimeout(() => resolve(1), 1000);
  //               })
  //             }
  //           >
  //           <a key="delete">删除</a>
  //         </Popconfirm>,`
  //       : ""
  //     }
  //   ]}
  // }`
  //     : ""
  //   }

  return `
import React from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { apis } from './apis';
import type { TableListItem } from './apis';


const columns: ProColumns<TableListItem>[] = [
  ${outputColumns.substr(1, outputColumns.length - 2)},
];

const Table = () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={async (params) => {
        return await apis.query(params);
      }}
      rowKey="${app.schema.basic.rowKey}"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        defaultCollapsed :${app.schema.basic.defaultCollapsed},
      }}
      scroll={{x: ${app.schema.basic.scrollX}}}
      dateFormatter="string"
      headerTitle="${app.schema.basic.headerTitle}"
    />
  );
};

export default Table;
`;
};

export default renderTable;
