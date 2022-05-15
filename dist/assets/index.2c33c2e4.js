var pe=Object.defineProperty;var z=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var H=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&H(e,r,t[r]);if(z)for(var r of z(t))Fe.call(t,r)&&H(e,r,t[r]);return e};import{M as fe,d as ye,o as G,a as d,R as v,r as f,b as m,c as D,j as o,F as k,e as g,f as A,g as x,E as O,D as R,S as T,h as M,I as b,i as $,A as j,k as w,N as V,C as L,l as J,m as c,n as te,p as oe,q as ge,P as re,s as ae,T as xe,Q as Ee,t as Se,u as X,v as ne,w as Ce,x as ue,y as De,B as F,z as be,G as we,H as Be,J as Ie,K as se,L as ve,O as ke,U as Ae,V as Oe}from"./vendor.4efaac41.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerpolicy&&(u.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?u.credentials="include":a.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}};Te();class Me{constructor(){this.schema={columns:[],basic:{},operation:null,extra:null},this.dataSource=[],this.mockDataSource=[],this.mockToggle=!1,this.init(),this.setSaveSchema()}generateMockData(){if(this.schema.columns){let t={};this.schema.columns.forEach(n=>{/date|time/.test(n.valueType)?t[n.dataIndex]="@dateTime":t[n.dataIndex]="@string"});const r=fe.mock({"data|1-40":[y({"id|+1":1},t)]});this.mockDataSource=r}}setMockDataSource(t){this.mockDataSource=t}setBasicSchema(t){this.schema.basic=t}setOperationSchema(t){Object.values(t).includes(!0)||(t={}),this.schema.operation=t}setExtraSchema(t){this.schema.extra=t}setDataSource(t){this.dataSource=t}saveSchema(){window.localStorage.setItem("savedSchema",JSON.stringify(this.schema))}setSaveSchema(){this.schema=window.localStorage.getItem("savedSchema")?JSON.parse(window.localStorage.getItem("savedSchema")):this.schema}init(){ye(this,{mockDataSource:G,schema:G.deep,setMockDataSource:d,generateMockData:d,setOperationSchema:d,setExtraSchema:d,setDataSource:d,setBasicSchema:d,setSaveSchema:d,saveSchema:d})}}const $e={app:new Me},ie=v.createContext(null),l=()=>f.exports.useContext(ie),B="rlx-table-designer",Le=["password","money","textarea","option","date","dateWeek","dateMonth","dateQuarter","dateYear","dateRange","dateTimeRange","dateTime","time","timeRange","text","select","checkbox","rate","radio","radioButton","index","indexBorder","progress","percent","digit","second","avatar","code","switch","fromNow","image","jsonCode"],Pe=g({components:{FormItem:x,Editable:O,DatePicker:R,Space:T,Radio:M,Input:b,Select:$,ArrayItems:j,Switch:w,NumberPicker:V,Card:L}}),Ne={type:"object",properties:{columns:{type:"array","x-component":"ArrayItems","x-decorator":"FormItem",items:{type:"object",properties:{card:{type:"void","x-component":"Card","x-component-props":{bodyStyle:{padding:0},style:{marginBottom:4}},properties:{space:{type:"void","x-component":"Space","x-component-props":{style:{alignItems:"normal"}},properties:{sort:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.SortHandle"},index:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Index"},space:{type:"void","x-component":"Space","x-component-props":{wrap:!0,direction:"vertical"},properties:{title:{type:"string",title:"\u5B57\u6BB5\u540D\u79F0","x-decorator":"FormItem","x-component":"Input"},dataIndex:{type:"string",title:"dataIndex","x-component":"Input","x-decorator":"FormItem"},valueType:{type:"string",title:"\u503C\u7C7B\u578B","x-component":"Select","x-decorator":"FormItem",enum:Le.map(e=>({label:e,value:e})),"x-component-props":{style:{width:150},showSearch:!0,filterOption:(e,t)=>t.label.toLowerCase().indexOf(e.toLowerCase())>=0},default:"text"},hideInSearch:{type:"string",title:"\u641C\u7D20\u680F\u9690\u85CF","x-component":"Switch","x-decorator":"FormItem"},hideInTable:{type:"string",title:"\u8868\u683C\u680F\u9690\u85CF","x-component":"Switch","x-decorator":"FormItem"},width:{type:"number",title:"\u5217\u5BBD\u5EA6","x-component":"NumberPicker","x-decorator":"FormItem"},fixed:{type:"boolean",title:"\u56FA\u5B9A\u5217","x-component":"Switch","x-decorator":"FormItem"}}},remove:{type:"void","x-decorator":"FormItem","x-component":"ArrayItems.Remove"}}}}}}},properties:{add:{type:"void",title:"\u65B0\u589E\u5217","x-component":"ArrayItems.Addition"}}}}};function Re(){const{app:e}=l(),t=f.exports.useMemo(()=>D({effects:()=>{A(r=>{r.setValues(e.schema)})}}),[]);return o(k,{form:t,children:o(Pe,{schema:Ne})})}var je=m(Re);const Ve=g({components:{FormItem:x,Editable:O,DatePicker:R,Space:T,Radio:M,Input:b,Select:$,NumberPicker:V,Switch:w}}),Je={type:"object",properties:{width:{type:"number",title:"\u5217\u5BBD\u5EA6","x-component":"NumberPicker","x-decorator":"FormItem"},edit:{type:"boolean",title:"\u7F16\u8F91\u6309\u94AE","x-decorator":"FormItem","x-component":"Switch"},detail:{type:"boolean",title:"\u8BE6\u60C5\u6309\u94AE","x-decorator":"FormItem","x-component":"Switch"},log:{type:"boolean",title:"\u65E5\u5FD7\u6309\u94AE","x-decorator":"FormItem","x-component":"Switch"},delete:{type:"boolean",title:"\u5220\u9664\u6309\u94AE","x-decorator":"FormItem","x-component":"Switch"}}};function Ke(){const{app:e}=l(),t=f.exports.useMemo(()=>D({effects:()=>{A(r=>{r.setValues(e.schema.operation)}),J(r=>{e.setOperationSchema(r.values)})}}),[]);return o(k,{form:t,children:o(Ve,{schema:Je})})}var qe=m(Ke);const Qe=g({components:{FormItem:x,Editable:O,DatePicker:R,Space:T,Radio:M,Input:b,Select:$,ArrayItems:j,Switch:w}}),We={type:"object",properties:{add:{type:"boolean",title:"\u65B0\u589E","x-decorator":"FormItem","x-component":"Switch"},export:{type:"boolean",title:"\u5BFC\u51FA","x-decorator":"FormItem","x-component":"Switch"},lead:{type:"boolean",title:"\u5BFC\u5165","x-decorator":"FormItem","x-component":"Switch"}}};function _e(){const{app:e}=l(),t=f.exports.useMemo(()=>D({effects:()=>{A(r=>{r.setValues(e.schema.extra)}),J(r=>{e.setExtraSchema(r.values)})}}),[]);return o(k,{form:t,children:o(Qe,{schema:We})})}var ze=m(_e);const He=g({components:{FormItem:x,Editable:O,NumberPicker:V,Space:T,Radio:M,Input:b,Select:$,ArrayItems:j,Switch:w}}),Ge={type:"object",properties:{showSelect:{type:"boolean",title:"\u6279\u91CF\u64CD\u4F5C","x-decorator":"FormItem","x-component":"Switch"},rowKey:{type:"string",title:"rowKey","x-decorator":"FormItem","x-component":"Input"},headerTitle:{type:"string",title:"\u6807\u9898","x-decorator":"FormItem","x-component":"Input"},scrollX:{type:"string",title:"x\u8F74\u6EDA\u52A8\u5BBD\u5EA6","x-decorator":"FormItem","x-component":"NumberPicker"}}};function Xe(){const{app:e}=l(),t=f.exports.useMemo(()=>D({effects:()=>{A(r=>{var n;r.setValues((n=e.schema)==null?void 0:n.basic)}),J(r=>{e.setBasicSchema(r.values)})}}),[]);return o(k,{form:t,children:o(He,{schema:Ge})})}var Ue=m(Xe);const{Panel:I}=te;function Ye(){return o("div",{className:`${B}-scroll`,children:o(L,{title:"\u914D\u7F6E\u533A\u57DF",bodyStyle:{padding:0},style:{width:400},children:c(te,{defaultActiveKey:["1","2","3","4"],children:[o(I,{header:"\u57FA\u7840\u914D\u7F6E",children:o(Ue,{})},"1"),o(I,{header:"\u5217\u914D\u7F6E",children:o(je,{})},"2"),o(I,{header:"\u64CD\u4F5C\u680F",children:o(qe,{})},"3"),o(I,{header:"\u989D\u5916\u6309\u94AE\u914D\u7F6E",children:o(ze,{})},"4")]})})})}var Ze=m(Ye);const et=Object.prototype.hasOwnProperty,tt=Object.prototype.toString;function ot(e,t=!1){if(e==null)return!0;if(typeof e=="boolean"||typeof e=="number")return!1;if(typeof e=="string"||typeof e=="function")return e.length===0;if(Array.isArray(e)){if(e.length===0)return!0;for(let r=0;r<e.length;r++)if(t){if(e[r]!==void 0&&e[r]!==null)return!1}else if(e[r]!==void 0&&e[r]!==null&&e[r]!==""&&e[r]!==0)return!1;return!0}if(e.toString===tt)switch(e.toString()){case"[object File]":case"[object Map]":case"[object Set]":return e.size===0;case"[object Object]":{for(const r in e)if(et.call(e,r))return!1;return!0}}return!1}var ce=(e=>(e.edit="\u7F16\u8F91 ",e.add="\u65B0\u589E",e.view="\u67E5\u770B",e))(ce||{});const U=g({components:{FormItem:x,Input:b}}),P=(e,t="add",r)=>oe({title:ce[t],destroyOnClose:!0,maskClosable:!1},()=>o(ge,{labelCol:6,wrapperCol:10,children:o(U,{children:e==null?void 0:e.map(n=>o(U.String,{name:n.dataIndex,required:!0,title:n.title,"x-decorator":"FormItem","x-component":"Input"}))})})).forOpen((n,a)=>{a({initialValues:t!=="add"?r:{},readPretty:t==="view"})}).forConfirm((n,a)=>{a(n)}).open().then(console.log),rt={0:"close",1:"running",2:"online",3:"error"},le=[],Y=["\u4ED8\u5C0F\u5C0F","\u66F2\u4E3D\u4E3D","\u6797\u4E1C\u4E1C","\u9648\u5E05\u5E05","\u517C\u67D0\u67D0"];for(let e=0;e<5;e+=1)le.push({key:e,name:"AppName",containers:Math.floor(Math.random()*20),creator:Y[Math.floor(Math.random()*Y.length)],status:rt[Math.floor(Math.random()*10)%4],createdAt:Date.now()-Math.floor(Math.random()*1e5),memo:e%2===1?"\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u5B57\u8981\u5C55\u793A\u4F46\u662F\u8981\u7559\u4E0B\u5C3E\u5DF4":"\u7B80\u77ED\u5907\u6CE8\u6587\u6848"});const at=[{title:"\u5E94\u7528\u540D\u79F0",width:80,dataIndex:"name",render:e=>o("a",{children:e})},{title:"\u5BB9\u5668\u6570\u91CF",dataIndex:"containers",align:"right",sorter:(e,t)=>e.containers-t.containers},{title:"\u72B6\u6001",width:80,dataIndex:"status",initialValue:"all",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},close:{text:"\u5173\u95ED",status:"Default"},running:{text:"\u8FD0\u884C\u4E2D",status:"Processing"},online:{text:"\u5DF2\u4E0A\u7EBF",status:"Success"},error:{text:"\u5F02\u5E38",status:"Error"}}},{title:"\u521B\u5EFA\u8005",width:80,dataIndex:"creator",valueEnum:{all:{text:"\u5168\u90E8"},\u4ED8\u5C0F\u5C0F:{text:"\u4ED8\u5C0F\u5C0F"},\u66F2\u4E3D\u4E3D:{text:"\u66F2\u4E3D\u4E3D"},\u6797\u4E1C\u4E1C:{text:"\u6797\u4E1C\u4E1C"},\u9648\u5E05\u5E05:{text:"\u9648\u5E05\u5E05"},\u517C\u67D0\u67D0:{text:"\u517C\u67D0\u67D0"}}},{title:c(ae,{children:["\u521B\u5EFA\u65F6\u95F4",o(xe,{placement:"top",title:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0",children:o(Ee,{style:{marginLeft:4}})})]}),width:140,key:"since",dataIndex:"createdAt",valueType:"date",sorter:(e,t)=>e.createdAt-t.createdAt},{title:"\u5907\u6CE8",dataIndex:"memo",ellipsis:!0,copyable:!0},{title:"\u64CD\u4F5C",width:180,key:"option",valueType:"option",render:()=>[o("a",{children:"\u94FE\u8DEF"},"link"),o("a",{children:"\u62A5\u8B66"},"link2"),o("a",{children:"\u76D1\u63A7"},"link3"),o(Se,{menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}],nt=()=>o(re,{columns:at,request:(e,t,r)=>(console.log(e,t,r),Promise.resolve({data:le,success:!0})),rowKey:"key",pagination:{showQuickJumper:!0},search:!1,dateFormatter:"string",toolbar:{settings:[]}}),ut=()=>oe({title:"\u65E5\u5FD7",destroyOnClose:!0,maskClosable:!1,width:"60vw"},()=>o(nt,{})).forOpen((e,t)=>{t({})}).forConfirm((e,t)=>{t(e)}).open().then(console.log),Z={rowSelection:{selections:[X.SELECTION_ALL,X.SELECTION_INVERT],defaultSelectedRowKeys:[1]},tableAlertRender:({selectedRowKeys:e,selectedRows:t,onCleanSelected:r})=>c("span",{children:["\u5DF2\u9009 ",e.length," \u9879",o("a",{style:{marginLeft:8},onClick:r,children:"\u53D6\u6D88\u9009\u62E9"})]}),tableAlertOptionRender:()=>c(ne,{size:16,children:[o("a",{children:"\u6279\u91CF\u5220\u9664"}),o("a",{children:"\u5BFC\u51FA\u6570\u636E"})]})},st=()=>{var u,s,E,K,q,Q,W;const{app:e}=l(),t=Ce();console.log(e.schema);const r=()=>{var p,h;const i=(h=(p=e.schema)==null?void 0:p.columns)==null?void 0:h.map(S=>ue(S));return ot(e.schema.operation)||i.push({title:"\u64CD\u4F5C",valueType:"option",fixed:"right",width:e.schema.operation.width,render:(S,_,wt,Bt)=>{const C=[];return e.schema.operation.edit&&C.push(o("a",{onClick:()=>P(e.schema.columns,"edit",_),children:"\u7F16\u8F91"},"editable")),e.schema.operation.detail&&C.push(o("a",{onClick:()=>P(e.schema.columns,"view",_),children:"\u67E5\u770B"},"view")),e.schema.operation.log&&C.push(o("a",{onClick:()=>ut(),children:"\u65E5\u5FD7"},"log")),e.schema.operation.delete&&C.push(o(De,{title:"\u786E\u5B9A\u5220\u9664\u6B64\u6761\u6570\u636E\u5417\uFF1F",onConfirm:()=>new Promise(me=>{setTimeout(()=>me(1),1e3)}),children:o("a",{children:"\u5220\u9664"},"delete")})),C}}),i};v.useEffect(()=>{t()},[JSON.stringify(y({},e.schema))]);let a={toolBarRender:()=>{var p,h,S;const i=[];return(p=e.schema.extra)!=null&&p.add&&i.push(o(F,{type:"primary",onClick:()=>P(e.schema.columns,"add"),children:"\u65B0\u589E"},"add")),(h=e.schema.extra)!=null&&h.export&&i.push(o(F,{children:"\u5BFC\u51FA"},"export")),(S=e.schema.extra)!=null&&S.lead&&i.push(o(F,{children:"\u5BFC\u5165"},"lead")),i},rowKey:((s=(u=e.schema)==null?void 0:u.basic)==null?void 0:s.rowKey)||"string",headerTitle:((K=(E=e.schema)==null?void 0:E.basic)==null?void 0:K.headerTitle)||"\u6807\u9898",search:{defaultCollapsed:!1},scroll:{x:((Q=(q=e.schema)==null?void 0:q.basic)==null?void 0:Q.scrollX)||100}};return(W=e.schema.basic)!=null&&W.showSelect?a=y(y({},a),Z):Object.keys(Z).forEach(i=>{delete a[i]}),o(re,y({columns:r(),dataSource:e.mockDataSource.data,request:(i,p,h)=>(console.log(i,p,h),Promise.resolve({success:!0})),dateFormatter:"string"},a))};var it=m(st);function ct(){return o("div",{className:`${B}-workbench--container`,children:o(L,{bodyStyle:{padding:0},children:o(it,{})})})}var lt=m(ct);g({components:{Checkbox:be,FormItem:x,Switch:w,Button:F}});function dt(){const{app:e}=l();return f.exports.useMemo(()=>D({effects:()=>{}}),[]),o(L,{title:"\u6570\u636E\u6E90\u4FE1\u606F",style:{width:300},children:o(F,{onClick:()=>{e.generateMockData()},children:"\u751F\u6210mock\u6570\u636E"})})}const mt={cdn:"//cdn.jsdelivr.net/npm"},pt=()=>String(mt.cdn).replace(/\/$/,""),N={prettier:null},de=async(e,t)=>(N.prettier=N.prettier||new Function(`return import("${pt()}/prettier@2.x/esm/standalone.mjs")`)(),N.prettier.then(r=>e==="javascript.expression"||e==="typescript.expression"?t:/(?:javascript|typescript)/gi.test(e)?r.default.format(t,{semi:!1,parser(n){return we(n,{sourceType:"module",plugins:["typescript","jsx"]})}}):e==="json"?JSON.stringify(JSON.parse(t),null,2):t));let ee=!1;const ht=()=>{ee||Be.init().then(e=>{e.languages.typescript.typescriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,module:e.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:e.languages.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!0}),e.languages.registerDocumentFormattingEditProvider("typescript",{async provideDocumentFormattingEdits(t){var r;return[{text:await de(((r=t.getDesignerLanguage)==null?void 0:r.call(t))||"typescript",t.getValue()),range:t.getFullModelRange()}]}}),ee=!0})};function Ft(e){v.useEffect(()=>{ht()},[]);const t=r=>{const n=r.getValue();n&&de("typescript",n).then(a=>{r.setValue(a)})};return o(Ie,{value:e.value,language:"typescript",width:"100%",height:"180vh",theme:"monokai",options:{readOnly:!0},onMount:t})}const ft=()=>{const{app:e}=l();return`
  import { FormDialog, Input, FormItem, FormLayout } from "@formily/antd";
  import { createSchemaField } from "@formily/react";
  import React from "react";
  
  enum DiaLogEnum {
    "edit" = "\u7F16\u8F91 ",
    "add" = "\u65B0\u589E",
    "view" = "\u67E5\u770B"
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
              ${(()=>{var r;return(r=e.schema.columns)==null?void 0:r.map(n=>`<SchemaField.String
          name={"${n.dataIndex})"}
          required
          title={"${n.title}"}
          x-decorator="FormItem"
          x-component="Input"
        />`).join("")})()}
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
  
    `},yt=()=>{const{app:e}=l(),t=()=>{var u,s,E;const a=[];return(u=e.schema.extra)!=null&&u.add&&a.push(`<Button
          type="primary"
          key="add"
          onClick={() => EditDialog("add")}
        >
          \u65B0\u589E
        </Button>`),(s=e.schema.extra)!=null&&s.export&&a.push('<Button key="export">\u5BFC\u51FA</Button>'),(E=e.schema.extra)!=null&&E.lead&&a.push('<Button key="lead">\u5BFC\u5165</Button>'),a},r=()=>{var u;return(u=e.schema)==null?void 0:u.columns.map(s=>ue(s))},n=JSON.stringify(r());return`import React from 'react';
import { Button, Tooltip } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';

const columns: ProColumns<TableListItem>[] = [
  ${n.substr(1,n.length-2)},
  ${e.schema.operation?`{
    title: "\u64CD\u4F5C",
    valueType: "option",
    width:${e.schema.operation.width||200},
    render: (text, record, _, action) => {
      return [
      ${e.schema.operation.edit?`<a
      key="editable"
      onClick={() => EditDialog("edit", record)}
    >
      \u7F16\u8F91
    </a>,`:""}
      ${e.schema.operation.detail?`<a
                   key="view"
                   onClick={() => EditDialog("view", record)}
                 >
                   \u67E5\u770B
                 </a>,`:""}
      ${e.schema.operation.log?`          <a key="log" onClick={() => LogDialog(record)}>
                  \u65E5\u5FD7
                </a>,`:""}
      ${e.schema.operation.delete?`<Popconfirm
              title="\u786E\u5B9A\u5220\u9664\u6B64\u6761\u6570\u636E\u5417\uFF1F"
              onConfirm={() =>
                new Promise((resolve) => {
                  setTimeout(() => resolve(1), 1000);
                })
              }
            >
            <a key="delete">\u5220\u9664</a>
          </Popconfirm>,`:""}
    ]}
  }`:""}
 
];

export default () => {
  return (
    <ProTable<TableListItem>
      columns={columns}
      request={(params, sorter, filter) => {
        // \u8868\u5355\u641C\u7D22\u9879\u4F1A\u4ECE params \u4F20\u5165\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u63A5\u53E3\u3002
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: tableListDataSource,
          success: true,
        });
      }}
      rowKey="${e.schema.basic.rowKey}"
      pagination={{
        showQuickJumper: true,
      }}
      search={{
        collapsed: false,
      }}
      scroll={{x: ${e.schema.basic.scrollX||200}}}
      dateFormatter="string"
      headerTitle="${e.schema.basic.headerTitle}"
      toolBarRender={() => [
        ${t().join(",")}
      ]}
    />
  );
};`},{TabPane:gt}=se,xt=[{tab:"\u8868\u683C",content:yt},{tab:"\u65B0\u589E/\u7F16\u8F91/\u8BE6\u60C5",content:ft}],Et=()=>o(se,{defaultActiveKey:"0",children:xt.map((e,t)=>o(gt,{tab:e.tab,children:o(Ft,{value:e.content()})},t))});function St(){return o("div",{children:o("a",{className:`${B}--header--logo`,children:"Table Designer"})})}function Ct(){const{app:e}=l(),[t,r]=f.exports.useState(!1),n=()=>{r(!0)},a=()=>{r(!1)},u=()=>{r(!1)};return c(ae,{children:[c("div",{className:`${B}--header`,children:[o(St,{}),c(ne,{children:[o(F,{onClick:n,children:"\u4EE3\u7801\u5C55\u793A"}),o(F,{type:"primary",onClick:()=>{e.saveSchema(),ve.success("\u4FDD\u5B58\u6210\u529F")},children:"\u4FDD\u5B58"})]})]}),o(ke,{title:"\u4EE3\u7801\u5757",width:"100vw",style:{height:"100vh"},visible:t,onOk:a,onCancel:u,destroyOnClose:!0,children:o(Et,{})})]})}function Dt(){return o("div",{})}var bt=m(()=>c("div",{children:[o(Ct,{}),c("div",{className:Ae(B+"-bg-container"),children:[o(Ze,{}),o(lt,{}),o(dt,{})]}),o(Dt,{})]}));Oe.render(o(v.StrictMode,{children:o(ie.Provider,{value:$e,children:o(bt,{})})}),document.getElementById("root"));
