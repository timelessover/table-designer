import { RlxColumnsType } from "@/models";
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
  columns: RlxColumnsType["columns"],
  type: keyof typeof DiaLogEnum,
  record?: any
) => void = (columns, type = "add", record?) => {
  return FormDialog(
    { title: DiaLogEnum[type], destroyOnClose: true, maskClosable: false },
    () => {
      return (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaField>
            {columns?.map((item) => {
              return (
                <SchemaField.String
                  name={item.dataIndex as string}
                  required
                  title={item.title}
                  x-decorator="FormItem"
                  x-component="Input"
                />
              );
            })}
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
