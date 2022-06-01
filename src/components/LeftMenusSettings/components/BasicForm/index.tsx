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
    NumberPicker,
    Space,
    Radio,
    Input,
    Select,
    ArrayItems,
    Switch
  },
});


const schema: ISchema = {
  type: "object",
  properties: {
    showSelect: {
      type: 'boolean',
      title: '批量操作',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    rowKey: {
      type: 'string',
      title: 'rowKey',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    headerTitle: {
      type: 'string',
      title: '头部标题',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    scrollX: {
      type: 'string',
      title: 'x轴滚动宽度',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    defaultCollapsed: {
      type: 'boolean',
      title: '默认收起搜索栏',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
};

function ExtraForm() {
  const { app } = useStore();

  const form = useMemo(
    () =>
      createForm({
        effects: () => {
          onFormMount((form) => {
            form.setValues(app.schema?.basic)
          }),
            onFormValuesChange((form) => {
              app.setBasicSchema(form.values);
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

export default observer(ExtraForm);
