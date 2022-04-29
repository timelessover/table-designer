import { FormDialog, Input, FormItem, FormLayout } from "@formily/antd"
import { createSchemaField } from "@formily/react"
import React from "react"

enum DiaLogEnum {
  "edit" = "编辑 ",
  "add" = "新增",
  "view" = "查看",
}

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
})

export const EditDialog: (
  type: keyof typeof DiaLogEnum,
  record?: any
) => void = (type = "add", record?) => {
  return FormDialog(
    { title: DiaLogEnum[type], destroyOnClose: true, maskClosable: false },
    () => {
      return (
        <FormLayout labelCol={6} wrapperCol={10}>
          <SchemaField>
            <SchemaField.String
              name={"22)"}
              required
              title={"3嘿嘿"}
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name={"332)"}
              required
              title={"323"}
              x-decorator="FormItem"
              x-component="Input"
            />
            <SchemaField.String
              name={"323)"}
              required
              title={"你是啥"}
              x-decorator="FormItem"
              x-component="Input"
            />
          </SchemaField>
        </FormLayout>
      )
    }
  )
    .forOpen((payload, next) => {
      next({
        initialValues: type !== "add" ? record : {},
        readPretty: type === "view",
      })
    })
    .forConfirm((payload, next) => {
      next(payload)
    })
    .open()
    .then(console.log)
}
