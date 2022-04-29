import React, { useMemo } from "react";
import {
  Checkbox,
  Switch,
  FormItem,
  Editable,
  DatePicker,
  Space,
  Radio,
  Input,
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
    ArrayItems,
    Switch
  },
});
const schema: ISchema = {
  type: "object",
  properties: {
    add:{
      type: 'boolean',
      title: '新增',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    export:{
      type: 'boolean',
      title: '导出',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    lead:{
      type: 'boolean',
      title: '导入',
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
          onFormMount((form)=>{
            form.setValues(app.schema.extra)
          })
          onFormValuesChange((form) => {
            app.setExtraSchema(form.values);
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
