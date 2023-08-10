import{aj as ie,ak as ce,al as le,a2 as ue,am as de,d as K,an as R,ao as me,ap as fe,aq as he,ar as ge,as as xe,at as pe,r as g,j as t,I as v,u as E,H as Ce,af as be,b as A,a7 as ye,a3 as ve,w as je,x as we,au as Ne,a0 as M,av as Se,s as Le,t as ke,aw as q,ax as Te,n as z,ay as Ie,az as Re,aA as Me,a as Ee}from"./index-e5fbefc0.js";var Pe="[object Number]";function Ve(i){return typeof i=="number"||ie(i)&&ce(i)==Pe}function De(i){return le(i).toLowerCase()}function Be(i){return i&&i.length?ue(i):[]}const W=()=>{const i=de(n=>n.tag),f=K();return{state:i,getState:()=>R.getState().tag,fetchTags:async()=>{const n={};f.isVisitorMode()&&(n.creatorId=f.getUserIdFromPath());const{data:d}=await me(n);R.dispatch(fe(d))},upsertTag:async n=>{await he(n),R.dispatch(ge(n))},deleteTag:async n=>{await xe(n),R.dispatch(pe(n))}}};const Fe=g.forwardRef(function(f,n){var h;const{className:d,initialContent:l,placeholder:b,fullscreen:S,onPaste:x,onContentChange:C}=f,s=g.useRef(null);g.useEffect(()=>{s.current&&l&&(s.current.value=l,C(l))},[]),g.useEffect(()=>{s.current&&!S&&j()},[(h=s.current)==null?void 0:h.value,S]);const j=()=>{s.current&&(s.current.style.height="auto",s.current.style.height=(s.current.scrollHeight??0)+"px")};g.useImperativeHandle(n,()=>({focus:()=>{var r;(r=s.current)==null||r.focus()},scrollToCursor:()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},insertText:(r="",m="",w="")=>{if(!s.current)return;const y=s.current.selectionStart,L=s.current.selectionEnd,o=s.current.value,P=o.slice(0,y)+m+(r||o.slice(y,L))+w+o.slice(L);s.current.value=P,s.current.focus(),s.current.selectionEnd=L+m.length+r.length,C(s.current.value),j()},removeText:(r,m)=>{if(!s.current)return;const w=s.current.value,y=w.slice(0,r)+w.slice(r+m);s.current.value=y,s.current.focus(),s.current.selectionEnd=r,C(s.current.value),j()},setContent:r=>{s.current&&(s.current.value=r,s.current.focus(),C(s.current.value),j())},getContent:()=>{var r;return((r=s.current)==null?void 0:r.value)??""},getCursorPosition:()=>{var r;return((r=s.current)==null?void 0:r.selectionStart)??0},getSelectedContent:()=>{var w,y,L;const r=(w=s.current)==null?void 0:w.selectionStart,m=(y=s.current)==null?void 0:y.selectionEnd;return((L=s.current)==null?void 0:L.value.slice(r,m))??""},setCursorPosition:(r,m)=>{var y;const w=isNaN(m)?r:m;(y=s.current)==null||y.setSelectionRange(r,w)}}),[]);const k=g.useCallback(()=>{var r;C(((r=s.current)==null?void 0:r.value)??""),j()},[]);return t.jsx("div",{className:"common-editor-wrapper "+d,children:t.jsx("textarea",{className:"common-editor-inputer",rows:1,placeholder:b,ref:s,onPaste:x,onInput:k})})}),$e=i=>{const{onTagSelectorClick:f}=i,d=W().state.tags;return t.jsxs("div",{className:"action-btn relative group",children:[t.jsx(v.Hash,{className:"icon-img"}),t.jsx("div",{className:"hidden flex-row justify-start items-start flex-wrap absolute top-6 left-0 mt-1 p-1 z-1 rounded w-52 h-auto max-h-48 overflow-y-auto font-mono shadow bg-zinc-200 dark:bg-zinc-600 group-hover:flex",children:d.length>0?d.map(l=>t.jsxs("span",{className:"w-auto max-w-full truncate text-black dark:text-gray-300 cursor-pointer rounded text-sm leading-6 px-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 shrink-0",onClick:()=>f(l),children:["#",l]},l)):t.jsx("p",{className:"italic text-sm ml-2",onClick:l=>l.stopPropagation(),children:"No tags found"})})]})};const O={text:"common.select",value:""},Ue=i=>{const{className:f,dataSource:n,handleValueChanged:d,value:l,disabled:b,tooltipTitle:S}=i,{t:x}=E(),[C,s]=Ce(!1),j=g.useRef(null);let k={text:x(O.text),value:O.value};for(const m of n)if(m.value===l){k=m;break}g.useEffect(()=>{if(C){const m=w=>{var y;(y=j.current)!=null&&y.contains(w.target)||s(!1)};window.addEventListener("click",m,{capture:!0,once:!0})}},[C]);const h=m=>{d&&d(m.value),s(!1)},r=m=>{b||(m.stopPropagation(),s())};return t.jsx(be,{title:S,hidden:!b,children:t.jsxs("div",{className:`selector-wrapper ${f??""} `,ref:j,children:[t.jsxs("div",{className:`current-value-container ${C?"active":""} ${b&&"selector-disabled"}`,onClick:r,children:[b&&t.jsx("span",{className:"lock-text",children:t.jsx(v.Lock,{className:"icon-img"})}),t.jsx("span",{className:"value-text",children:k.text}),!b&&t.jsx("span",{className:"arrow-text",children:t.jsx(v.ChevronDown,{className:"icon-img"})})]}),t.jsx("div",{className:`items-wrapper ${C?"":"!hidden"}`,children:n.length>0?n.map(m=>t.jsx("div",{className:`item-container ${m.value===l?"selected":""}`,onClick:()=>{h(m)},children:m.text},m.value)):t.jsx("p",{className:"tip-text",children:x("common.null")})})]})})},qe=g.memo(Ue),ze=i=>{const{value:f,onChange:n}=i,{t:d}=E(),{state:{systemStatus:l}}=A(),b=ye.map(x=>({value:x.value,text:d(`memo.visibility.${De(x.value)}`)})),S=async x=>{n(x)};return t.jsx(qe,{className:"visibility-selector",disabled:l.disablePublicMemos,tooltipTitle:d("memo.visibility.disabled"),value:f,dataSource:b,handleValueChanged:S})},Oe=i=>{const{className:f,resourceType:n}=i;let d=v.FileText;return n.includes("image")&&(d=v.Image),t.jsx(d,{className:f})},He=i=>{const{resourceList:f,setResourceList:n}=i,d=async l=>{n(f.filter(b=>b.id!==l))};return t.jsx(t.Fragment,{children:f.length>0&&t.jsx("div",{className:"w-full flex flex-row justify-start flex-wrap gap-2 mt-2",children:f.map(l=>t.jsxs("div",{className:"max-w-full flex flex-row justify-start items-center flex-nowrap bg-gray-100 dark:bg-zinc-800 hover:opacity-80 px-2 py-1 rounded cursor-pointer text-gray-500",children:[t.jsx(Oe,{resourceType:l.type,className:"w-4 h-auto mr-1"}),t.jsx("span",{className:"text-sm max-w-xs truncate font-mono",children:l.filename}),t.jsx(v.X,{className:"w-4 h-auto ml-1 hover:opacity-80",onClick:()=>d(l.id)})]},l.id))})})},Ke=i=>{const{relationList:f,setRelationList:n}=i,d=ve(),[l,b]=g.useState([]);g.useEffect(()=>{(async()=>{const C=f.map(async j=>{const k=await d.getOrFetchMemoById(j.relatedMemoId);return{...j,relatedMemo:k}}),s=await Promise.all(C);b(s)})()},[f]);const S=async x=>{const C=f.filter(s=>s.relatedMemoId!==x.relatedMemoId);n(C)};return t.jsx(t.Fragment,{children:l.length>0&&t.jsx("div",{className:"w-full flex flex-row gap-2 mt-2 flex-wrap",children:l.map(x=>t.jsxs("div",{className:"w-auto max-w-[50%] overflow-hidden flex flex-row justify-start items-center bg-gray-100 dark:bg-zinc-800 hover:opacity-80 rounded text-sm p-1 px-2 text-gray-500 cursor-pointer",children:[t.jsx(v.Link,{className:"w-4 h-auto shrink-0"}),t.jsx("span",{className:"mx-1 max-w-full text-ellipsis font-mono whitespace-nowrap overflow-hidden",children:x.relatedMemo.content}),t.jsx(v.X,{className:"w-4 h-auto hover:opacity-80 shrink-0",onClick:()=>S(x)})]},x.relatedMemoId))})})};const H=["- [ ] ","- [x] ","- [X] ","* ","- "],Ae=/^(\d+)\. $/,We=()=>Se()??Le.get(["editorContentCache"]).editorContentCache??"",_e=i=>{const{className:f,memoId:n,onConfirm:d}=i,{t:l,i18n:b}=E(),{state:{systemStatus:S}}=A(),x=K(),C=je(),s=we(),j=W(),k=Ne(),[h,r]=g.useState({memoVisibility:"PRIVATE",resourceList:[],relationList:i.relationList??[],fullscreen:!1,isUploadingResource:!1,isRequesting:!1}),[m,w]=g.useState(!1),[y,L]=g.useState(!1),o=g.useRef(null),V=x.state.user.setting;g.useEffect(()=>{let e=V.memoVisibility;S.disablePublicMemos&&e==="PUBLIC"&&(e="PRIVATE"),r(a=>({...a,memoVisibility:e}))},[V.memoVisibility,S.disablePublicMemos]),g.useEffect(()=>{n&&s.getMemoById(n??M).then(e=>{var a;e&&($(),r(u=>({...u,memoVisibility:e.visibility,resourceList:e.resourceList,relationList:e.relationList})),(a=o.current)==null||a.setContent(e.content??""))})},[n]);const _=e=>{var u;if(!o.current)return;if((e.ctrlKey||e.metaKey)&&e.key==="Enter"){B();return}if(e.key==="Enter"&&!y){const p=o.current.getCursorPosition(),N=o.current.getContent().slice(0,p),c=ke(N.split(`
`));if(c)if(H.includes(c)||Ae.test(c))e.preventDefault(),o.current.removeText(p-c.length,c.length);else{let I=!1;for(const T of H)if(c.startsWith(T)){e.preventDefault(),o.current.insertText("",`
${T}`),I=!0;break}if(!I){const T=/^(\d+)\. /.exec(c);if(T){const U=parseInt(T[1]);Ve(U)&&(e.preventDefault(),o.current.insertText("",`
${U+1}. `))}}(u=o.current)==null||u.scrollToCursor()}return}if(e.key==="Escape"){h.fullscreen&&F();return}if(e.key==="Tab"){e.preventDefault();const p=" ".repeat(q),N=o.current.getCursorPosition(),c=o.current.getSelectedContent();o.current.insertText(p),c&&o.current.setCursorPosition(N+q);return}},X=e=>{r(a=>({...a,memoVisibility:e}))},G=()=>{Te({onConfirm:e=>{r(a=>({...a,resourceList:[...a.resourceList,...e]}))}})},Q=e=>{r(a=>({...a,resourceList:e}))},Y=e=>{r(a=>({...a,relationList:e}))},J=async e=>{r(u=>({...u,isUploadingResource:!0}));let a;try{a=await k.createResourceWithBlob(e)}catch(u){console.error(u),z.error(typeof u=="string"?u:u.response.data.message)}return r(u=>({...u,isUploadingResource:!1})),a},D=async e=>{const a=[];for(const u of e){const p=await J(u);p&&(a.push(p),n&&await Me(n,p.id))}a.length>0&&r(u=>({...u,resourceList:[...u.resourceList,...a]}))},Z=async e=>{e.dataTransfer&&e.dataTransfer.files.length>0&&(e.preventDefault(),await D(e.dataTransfer.files))},ee=async e=>{e.clipboardData&&e.clipboardData.files.length>0&&(e.preventDefault(),await D(e.clipboardData.files))},te=e=>{w(e!=="")},B=async()=>{var p,N;if(h.isRequesting)return;r(c=>({...c,isRequesting:!0}));const e=((p=o.current)==null?void 0:p.getContent())??"";try{if(n&&n!==M){const c=await s.getMemoById(n??M);c&&await s.patchMemo({id:c.id,content:e,visibility:h.memoVisibility,resourceIdList:h.resourceList.map(I=>I.id),relationList:h.relationList})}else await s.createMemo({content:e,visibility:h.memoVisibility,resourceIdList:h.resourceList.map(c=>c.id),relationList:h.relationList}),C.clearFilter()}catch(c){console.error(c),z.error(c.response.data.message)}r(c=>({...c,isRequesting:!1}));const a=Ie(e),u=Be(a.filter(c=>c.parserName==="tag").map(c=>c.matchedContent.slice(1)));for(const c of u)await j.upsertTag(c);r(c=>({...c,fullscreen:!1})),r(c=>({...c,resourceList:[],relationList:[]})),(N=o.current)==null||N.setContent(""),Re(),d&&d()},se=()=>{var u,p,N;if(!o.current)return;const e=o.current.getCursorPosition(),a=o.current.getContent().slice(0,e);a===""||a.endsWith(`
`)?(u=o.current)==null||u.insertText("","- [ ] "):(p=o.current)==null||p.insertText("",`
- [ ] `),(N=o.current)==null||N.scrollToCursor()},re=()=>{var u,p,N;if(!o.current)return;const e=o.current.getCursorPosition(),a=o.current.getContent().slice(0,e);a===""||a.endsWith(`
`)?(u=o.current)==null||u.insertText("","```\n","\n```"):(p=o.current)==null||p.insertText("","\n```\n","\n```"),(N=o.current)==null||N.scrollToCursor()},F=g.useCallback(()=>{r(e=>({...e,fullscreen:!e.fullscreen}))},[]),ne=g.useCallback(e=>{var a;(a=o.current)==null||a.insertText(`#${e} `)},[]),$=()=>{var e;(e=o.current)==null||e.focus()},oe=g.useMemo(()=>({className:"memo-editor",initialContent:We(),placeholder:l("editor.placeholder"),fullscreen:h.fullscreen,onContentChange:te,onPaste:ee}),[h.fullscreen,b.language]),ae=(m||h.resourceList.length>0)&&!h.isUploadingResource&&!h.isRequesting;return t.jsxs("div",{className:`${f??""} memo-editor-container ${h.fullscreen?"fullscreen":""}`,tabIndex:0,onKeyDown:_,onDrop:Z,onFocus:$,onCompositionStart:()=>L(!0),onCompositionEnd:()=>L(!1),children:[t.jsx(Fe,{ref:o,...oe}),t.jsx("div",{className:"common-tools-wrapper",children:t.jsxs("div",{className:"common-tools-container",children:[t.jsx($e,{onTagSelectorClick:e=>ne(e)}),t.jsx("button",{className:"action-btn",children:t.jsx(v.CheckSquare,{className:"icon-img",onClick:se})}),t.jsx("button",{className:"action-btn",children:t.jsx(v.Code,{className:"icon-img",onClick:re})}),t.jsx("button",{className:"action-btn",children:t.jsx(v.Image,{className:"icon-img",onClick:G})}),t.jsx("button",{className:"action-btn",onClick:F,children:h.fullscreen?t.jsx(v.Minimize,{className:"icon-img"}):t.jsx(v.Maximize,{className:"icon-img"})})]})}),t.jsx(He,{resourceList:h.resourceList,setResourceList:Q}),t.jsx(Ke,{relationList:h.relationList,setRelationList:Y}),t.jsxs("div",{className:"editor-footer-container",children:[t.jsx(ze,{value:h.memoVisibility,onChange:X}),t.jsx("div",{className:"buttons-container",children:t.jsx("button",{className:"action-btn confirm-btn",disabled:!ae,onClick:B,children:l("editor.save")})})]})]})},Xe=({memoId:i,relationList:f,destroy:n})=>{const d=()=>{n()};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"dialog-header-container",children:[t.jsx("p",{className:"title-text flex items-center",children:"MEMOS"}),t.jsx("button",{className:"btn close-btn",onClick:d,children:t.jsx(v.X,{})})]}),t.jsx("div",{className:"flex flex-col justify-start items-start max-w-full w-[36rem]",children:t.jsx(_e,{memoId:i,relationList:f,onConfirm:d})})]})};function Qe(i={}){Ee({className:"memo-editor-dialog",dialogName:"memo-editor-dialog"},Xe,i)}export{_e as M,qe as S,Qe as s,De as t,W as u};
