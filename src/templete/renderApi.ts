import { useStore } from "@/context";

const renderDiaLog = () => {
  const { app } = useStore();

  return `
export type PickReturnPromise<T extends (...args: any) => any> = ReturnType<T> extends Promise<
  infer P
>
  ? P
  : never;

export type ColumnsItemsType = NonNullable<
  PickReturnPromise<typeof postList>['records']
>[0];

export const apis = {
  query(params: Params) {
    return api.postList(params)
      .then((res) => ({ data: res.records, total: res.total }));
  },
};
  
    `;
};

export default renderDiaLog;
