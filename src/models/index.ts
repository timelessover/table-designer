import { action, define, observable, toJS } from "@formily/reactive";
import { ProColumns } from "@ant-design/pro-table";
import { TableProps } from "antd/lib/table/Table";
import Mock from "mockjs";

interface BasicSchema {
  showSelect: boolean;
  rowKey: TableProps<any>["rowKey"];
  headerTitle: string;
  scrollX:number | string;
}

type OperationItem = "edit" | "detail" | "log" | "delete";

type OperationSchema = Record<OperationItem, boolean> & ProColumns;

type ExtraItem = "add" | "export" | "lead" | "delete";

type ExtraSchema = Record<ExtraItem, boolean>;

export type RlxColumnsType = {
  basic: Partial<BasicSchema>;
  columns: ProColumns[];
  operation: OperationSchema;
  extra: ExtraSchema;
};

export class Store {
  schema: Partial<RlxColumnsType>;
  dataSource: any;
  mockDataSource: any;
  mockToggle: boolean;
  constructor() {
    this.schema = {};
    this.dataSource = [];
    this.mockDataSource = [];
    this.mockToggle = false;
    this.init();
    this.setSaveSchema();
  }


  generateMockData() {
    if (this.schema.columns) {
      let map = {};
      this.schema.columns.forEach((item) => {
        if (/date|time/.test(item["valueType"] as string)) {
          map[item["dataIndex"] as string] = "@dateTime";
        } else {
          map[item["dataIndex"] as string] = "@string";
        }
      });
      const data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "data|1-40": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1,
            ...map,
          },
        ],
      });
      this.mockDataSource = data;
    }
  }

  setMockDataSource(dataSource) {
    this.mockDataSource = dataSource;
  }

  setBasicSchema(schema) {
    this.schema.basic = schema;
  }

  setOperationSchema(schema) {
    if (!Object.values(schema).includes(true)) {
      schema = {};
    }
    this.schema.operation = schema;
  }

  setExtraSchema(schema) {
    this.schema.extra = schema;
  }

  setDataSource(dataSource) {
    this.dataSource = dataSource;
  }

  saveSchema() {
    window.localStorage.setItem("savedSchema", JSON.stringify(this.schema));
  }

  setSaveSchema() {
    this.schema = window.localStorage.getItem("savedSchema")
      ? JSON.parse(window.localStorage.getItem("savedSchema"))
      : {};
  }

  init() {
    define(this, {
      mockDataSource: observable,
      schema: observable,
      setMockDataSource: action,
      generateMockData: action,
      setOperationSchema: action,
      setExtraSchema: action,
      setDataSource: action,
      setBasicSchema: action,
      setSaveSchema: action,
      saveSchema: action,
    });
  }
}
