import{$ as l,x as c,r as m,a0 as d,i as x,n as u,j as e,a6 as f,aa as h,ab as j}from"./index-e5fbefc0.js";const g=()=>{const r=l(),n=c(),[s,i]=m.useState({memo:{id:d}}),o=x();return m.useEffect(()=>{const t=Number(r.memoId);t&&!isNaN(t)&&n.fetchMemoById(t).then(a=>{i({memo:a}),o.setFinish()}).catch(a=>{u.error(a.response.data.message)})},[]),e.jsx("section",{className:"w-full h-full flex flex-row justify-start items-start p-2",children:!o.isLoading&&e.jsx("main",{className:"w-full max-w-lg mx-auto my-auto shadow px-4 py-4 rounded-lg",children:e.jsxs("div",{className:"w-full flex flex-col justify-start items-start",children:[e.jsxs("div",{className:"w-full mb-2 flex flex-row justify-start items-center text-sm text-gray-400 dark:text-gray-300",children:[e.jsx("span",{children:f(s.memo.displayTs)}),e.jsxs("a",{className:"ml-2 hover:underline hover:text-green-600",href:`/u/${s.memo.creatorId}`,children:["@",s.memo.creatorName]})]}),e.jsx(h,{className:"memo-content",content:s.memo.content,onMemoContentClick:()=>{}}),e.jsx(j,{resourceList:s.memo.resourceList})]})})})};export{g as default};
