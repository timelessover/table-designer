import React, { useMemo } from "react";
import {
  Switch,
  FormItem,
  Editable,
  DatePicker,
  Space,
  Radio,
  Input,
  Select,
  ArrayItems,
  NumberPicker
} from "@formily/antd";
import { createForm, onFormMount, onFormValuesChange } from "@formily/core";
import {
  FormProvider,
  createSchemaField,
  observer,
  ISchema,
} from "@formily/react";
import { useStore } from "@/context";

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Editable,
    DatePicker,
    Space,
    Radio,
    Input,
    Select,
    NumberPicker,
    Switch
  },
});
const schema: ISchema = {
  type: "object",
  properties: {
    width:{
      type: "number",
      title: "列宽度",
      "x-component": "NumberPicker",
      "x-decorator": "FormItem",
    },
    edit:{
      type: 'boolean',
      title: '编辑按钮',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    detail:{
      type: 'boolean',
      title: '详情按钮',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    log:{
      type: 'boolean',
      title: '日志按钮',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    delete:{
      type: 'boolean',
      title: '删除按钮',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    }
  },
};

function OperationForm() {
  const { app } = useStore();

  const form = useMemo(
    () =>
      createForm({
        effects: () => {
          onFormMount((form)=>{
            form.setValues(app.schema.operation)
          })
          onFormValuesChange((form) => {
            app.setOperationSchema(form.values);
          });
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

export default observer(OperationForm);
