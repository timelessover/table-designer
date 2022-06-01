/**
 * mock数据接口集成，可结合 dataIndex 生成 table 列
 */

import React, { useMemo } from 'react';
import { Checkbox, FormItem, Switch, Submit } from '@formily/antd'
import { createForm, onFormValuesChange } from '@formily/core'
import { FormProvider, createSchemaField, ISchema } from '@formily/react'
import { Card, Button } from 'antd'
import { useStore } from '@/context';

const SchemaField = createSchemaField({
  components: {
    Checkbox,
    FormItem,
    Switch,
    Button
  },
})

const schema: ISchema = {
  type: 'object',
  properties: {
    mock: {
      type: 'boolean',
      title: 'mock数据',
      'x-decorator': 'FormItem',
      'x-component': 'Button',
    },
  },
}




function DataSourceSettings() {

  const { app } = useStore()

  const form = useMemo(
    () =>
      createForm({
        effects: () => {
          // onFormValuesChange((form) => {
          //   if(form.values){
          //     app.setMockToggle()
          //   }
          // })
        },
      }),
    []
  )

  return (
    <Card title="数据源信息" style={{ width: 300 }}>
      {/* <Button onClick={() => {
        
      }}>自定义数据源</Button> */}
    </Card>
  );
}

export default DataSourceSettings;
