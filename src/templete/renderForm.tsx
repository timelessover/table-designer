
import React from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
;


const columns[] = [
  { "valueType": "text", "title": "323", "dataIndex": "3232" }, { "valueType": "text", "title": "32323", "hideInTable": false, "hideInSearch": false }, { "valueType": "text", "title": "测试一下" },
];

const Table = () => <ProTable columns={columns} />

export default Table;
