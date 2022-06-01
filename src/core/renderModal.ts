import { useStore } from "@/context";

const renderDiaLog = () => {
  const { app } = useStore();
  const renderSchemaForm = () => {
    return app.schema.columns
      ?.map((item) => {
        return `<SchemaField.String
          name={"${item.dataIndex})"}
          required
          title={"${item.title}"}
          x-decorator="FormItem"
          x-component="Input"
        />`;
      })
      .join("");
  };

  return `
  import { FormDialog, Input, FormItem, FormLayout } from "@formily/antd";
  import { createSchemaField } from "@formily/react";
  import React from "react";
  
  enum DiaLogEnum {
    "edit" = "编辑 ",
    "add" = "新增",
    "view" = "查看"
  }
  
  
  const SchemaField = createSchemaField({
    components: {
      FormItem,
      Input,
    },
  });
  
  export const EditDialog: (
    type: keyof typeof DiaLogEnum,
    record?: any
  ) => void = (type = "add",record?) => {
    return FormDialog(
      { title: DiaLogEnum[type], destroyOnClose: true, maskClosable: false },
      () => {
        return (
          <FormLayout labelCol={6} wrapperCol={10}>
            <SchemaField>
              ${renderSchemaForm()}
            </SchemaField>
          </FormLayout>
        );
      }
    )
      .forOpen((payload, next) => {
        next({
          initialValues: type !== "add" ? record : {},
          readPretty: type === "view"
        });
      })
      .forConfirm((payload, next) => {
        next(payload);
      })
      .open()
      .then(console.log);
  };
  
    `;
};

export default renderDiaLog;
