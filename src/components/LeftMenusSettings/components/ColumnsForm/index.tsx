import React, { useMemo } from "react";
import {
  NumberPicker,
  FormItem,
  Editable,
  DatePicker,
  Space,
  Radio,
  Input,
  Switch,
  Select,
  ArrayItems,
} from "@formily/antd";
import { createForm, onFormMount, onFormValuesChange } from "@formily/core";
import {
  FormProvider,
  createSchemaField,
  observer,
  ISchema,
} from "@formily/react";
import { Card, Collapse } from "antd";
import { toJS } from "@formily/reactive";
import { useStore } from "@/context";
import { valueTypeArray } from "@/shared/constants";

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    DatePicker,
    Space,
    Radio,
    Input,
    Select,
    ArrayItems,
    Switch,
    NumberPicker,
    Card
  },
});
const schema: ISchema = {
  type: "object",
  properties: {
    columns: {
      type: "array",
      "x-component": "ArrayItems",
      "x-decorator": "FormItem",
      items: {
        type: "object",
        properties: {
          card:{
            type: "void",
            "x-component": "Card",
            "x-component-props":{
                bodyStyle:{
                  padding:0
                },
                style:{
                  marginBottom: 4
                }
            },
            properties:{
              space: {
                type: "void",
                "x-component": "Space",
                "x-component-props":{
                  style:{ 
                    alignItems: 'normal',
                  }
                },
                properties: {
                  sort: {
                    type: "void",
                    "x-decorator": "FormItem",
                    "x-component": "ArrayItems.SortHandle",
                  },
                  index: {
                    type: 'void',
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayItems.Index',
                  },
                  space: {
                    type: "void",
                    "x-component": "Space",
                    "x-component-props": {
                      wrap: true,
                      direction: 'vertical',
                      
                    },
                    properties: {
                      title: {
                        type: "string",
                        title: "字段名称",
                        "x-decorator": "FormItem",
                        "x-component": "Input",
                      },
                      dataIndex: {
                        type: "string",
                        title: "dataIndex",
                        "x-component": "Input",
                        "x-decorator": "FormItem",
                      },
                      valueType: {
                        type: "string",
                        title: "值类型",
                        "x-component": "Select",
                        "x-decorator": "FormItem",
                        enum: valueTypeArray.map((value) => ({
                          label: value,
                          value,
                        })),
                        "x-component-props": {
                          style: {
                            width: 150,
                          },
                          showSearch:true,
                          filterOption: (input, option) =>
                            option.label
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0,
                        },
                        "default":"text"
                      },
                      hideInSearch: {
                        type: "string",
                        title: "搜素栏隐藏",
                        "x-component": "Switch",
                        "x-decorator": "FormItem",
                      },
                      hideInTable: {
                        type: "string",
                        title: "表格栏隐藏",
                        "x-component": "Switch",
                        "x-decorator": "FormItem",
                      },
                      width:{
                        type: "number",
                        title: "列宽度",
                        "x-component": "NumberPicker",
                        "x-decorator": "FormItem",
                      },
                      fixed:{
                        type: "boolean",
                        title: "固定列",
                        "x-component": "Switch",
                        "x-decorator": "FormItem",
                      },
                    },
                  },
                  remove: {
                    type: "void",
                    "x-decorator": "FormItem",
                    "x-component": "ArrayItems.Remove",
                  },
                },
              },
            }
          }
          
        },
      },
      properties: {
        add: {
          type: "void",
          title: "新增列",
          "x-component": "ArrayItems.Addition",
        },
      },
    },
  },
};

function ColumnsForm() {
  const { app } = useStore();

  const form = useMemo(
    () =>
      createForm({
        effects: () => {
          onFormMount((form)=>{
            form.setValues(app.schema)
          })
        },
      }),
    []
  );

  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
    </FormProvider>
  );
}

export default observer(ColumnsForm);
