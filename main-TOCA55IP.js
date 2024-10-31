import{a as Be}from"./chunk-EU67XG3I.js";import{A as De,B as Ce,G as _e,H as Me,I as Fe,Q as we,a as Ye,b as Pe,c as ke,d as ve,da as be,ea as je,f as ye,fa as ze,g as Se,ga as Ae,h as xe,ha as Ee,ia as Ie,ja as Oe,ka as He,la as Ue,na as Ne,y as Te,z as fe}from"./chunk-C4CMWR5Z.js";import{$a as re,A as H,Ab as A,Ba as j,C as U,D as y,E as f,Fb as _,Fc as ge,Ha as B,Hc as R,Ia as te,J as h,L as Z,Pb as Y,R as J,Tb as ie,Ub as ce,Vb as de,W as D,Xb as se,Z as Q,Za as u,_ as $,_a as z,a as I,aa as C,bb as oe,da as s,db as le,ec as me,fa as N,ga as b,gb as ne,gc as V,ia as X,j as K,jc as pe,kc as P,ma as S,na as ee,p as W,q as w,qb as g,r as q,u as p,vc as he,x as G,y as O,ya as ae,yb as i,yc as ue,zb as d}from"./chunk-EORHCAOC.js";var Ve=[{path:"",pathMatch:"full",redirectTo:"/roadmap"},{path:"welcome/:param",loadChildren:()=>import("./chunk-SYKCHVVO.js").then(o=>o.WELCOME_ROUTES)},{path:"roadmap",loadChildren:()=>import("./chunk-FGPKQKVX.js").then(o=>o.ROADMAP_ROUTES)}];var Re=[De,Ce,Te,fe];var $e=new s("nz-i18n");function Le(o){return S([{provide:$e,useValue:o}])}var ga=new s("nz-date-locale");var Ya=new s("date-config");var Ke={locale:"zh-tw",Pagination:{items_per_page:"\u689D/\u9801",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u78BA\u5B9A",page:"\u9801",prev_page:"\u4E0A\u4E00\u9801",next_page:"\u4E0B\u4E00\u9801",prev_5:"\u5411\u524D 5 \u9801",next_5:"\u5411\u5F8C 5 \u9801",prev_3:"\u5411\u524D 3 \u9801",next_3:"\u5411\u5F8C 3 \u9801",page_size:"\u9801\u78BC"},DatePicker:{lang:{placeholder:"\u8ACB\u9078\u64C7\u65E5\u671F",rangePlaceholder:["\u958B\u59CB\u65E5\u671F","\u7D50\u675F\u65E5\u671F"],locale:"zh_TW",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u78BA\u5B9A",timeSelect:"\u9078\u64C7\u6642\u9593",dateSelect:"\u9078\u64C7\u65E5\u671F",weekSelect:"\u9078\u64C7\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u500B\u6708 (\u7FFB\u9801\u4E0A\u9375)",nextMonth:"\u4E0B\u500B\u6708 (\u7FFB\u9801\u4E0B\u9375)",monthSelect:"\u9078\u64C7\u6708\u4EFD",yearSelect:"\u9078\u64C7\u5E74\u4EFD",decadeSelect:"\u9078\u64C7\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u6642mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u9375\u52A0\u5DE6\u65B9\u5411\u9375)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u9375\u52A0\u53F3\u65B9\u5411\u9375)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7D00",nextCentury:"\u4E0B\u4E00\u4E16\u7D00",yearPlaceholder:"\u8ACB\u9078\u64C7\u5E74\u4EFD",quarterPlaceholder:"\u8ACB\u9078\u64C7\u5B63\u5EA6",monthPlaceholder:"\u8ACB\u9078\u64C7\u6708\u4EFD",weekPlaceholder:"\u8ACB\u9078\u64C7\u5468",rangeYearPlaceholder:["\u958B\u59CB\u5E74\u4EFD","\u7D50\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u958B\u59CB\u6708\u4EFD","\u7D50\u675F\u6708\u4EFD"],rangeWeekPlaceholder:["\u958B\u59CB\u5468","\u7D50\u675F\u5468"]},timePickerLocale:{placeholder:"\u8ACB\u9078\u64C7\u6642\u9593"}},TimePicker:{placeholder:"\u8ACB\u9078\u64C7\u6642\u9593"},Calendar:{lang:{placeholder:"\u8ACB\u9078\u64C7\u65E5\u671F",rangePlaceholder:["\u958B\u59CB\u65E5\u671F","\u7D50\u675F\u65E5\u671F"],locale:"zh_TW",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u78BA\u5B9A",timeSelect:"\u9078\u64C7\u6642\u9593",dateSelect:"\u9078\u64C7\u65E5\u671F",weekSelect:"\u9078\u64C7\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u500B\u6708 (\u7FFB\u9801\u4E0A\u9375)",nextMonth:"\u4E0B\u500B\u6708 (\u7FFB\u9801\u4E0B\u9375)",monthSelect:"\u9078\u64C7\u6708\u4EFD",yearSelect:"\u9078\u64C7\u5E74\u4EFD",decadeSelect:"\u9078\u64C7\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u6642mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u9375\u52A0\u5DE6\u65B9\u5411\u9375)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u9375\u52A0\u53F3\u65B9\u5411\u9375)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7D00",nextCentury:"\u4E0B\u4E00\u4E16\u7D00",yearPlaceholder:"\u8ACB\u9078\u64C7\u5E74\u4EFD",quarterPlaceholder:"\u8ACB\u9078\u64C7\u5B63\u5EA6",monthPlaceholder:"\u8ACB\u9078\u64C7\u6708\u4EFD",weekPlaceholder:"\u8ACB\u9078\u64C7\u5468",rangeYearPlaceholder:["\u958B\u59CB\u5E74\u4EFD","\u7D50\u675F\u5E74\u4EFD"],rangeQuarterPlaceholder:["\u958B\u59CB\u5B63\u5EA6","\u7D50\u675F\u5B63\u5EA6"],rangeMonthPlaceholder:["\u958B\u59CB\u6708\u4EFD","\u7D50\u675F\u6708\u4EFD"],rangeWeekPlaceholder:["\u958B\u59CB\u5468","\u7D50\u675F\u5468"]},timePickerLocale:{placeholder:"\u8ACB\u9078\u64C7\u6642\u9593"}},global:{placeholder:"\u8ACB\u9078\u64C7"},Table:{filterTitle:"\u7BE9\u9078\u5668",filterConfirm:"\u78BA\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u7121\u7BE9\u9078\u9805",selectAll:"\u5168\u90E8\u9078\u53D6",selectInvert:"\u53CD\u5411\u9078\u53D6",selectionAll:"\u5168\u9078\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u958B\u884C",collapse:"\u95DC\u9589\u884C",triggerDesc:"\u9EDE\u64CA\u964D\u5E8F",triggerAsc:"\u9EDE\u64CA\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F",selectNone:"\u6E05\u7A7A\u6240\u6709"},Modal:{okText:"\u78BA\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Popconfirm:{okText:"\u78BA\u5B9A",cancelText:"\u53D6\u6D88"},Transfer:{searchPlaceholder:"\u641C\u5C0B\u8CC7\u6599",itemUnit:"\u9805\u76EE",itemsUnit:"\u9805\u76EE",remove:"\u5220\u9664",selectCurrent:"\u5168\u9078\u7576\u9801",removeCurrent:"\u5220\u9664\u7576\u9801",selectAll:"\u5168\u9078\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9078\u7576\u9801"},Upload:{uploading:"\u6B63\u5728\u4E0A\u50B3...",removeFile:"\u522A\u9664\u6A94\u6848",uploadError:"\u4E0A\u50B3\u5931\u6557",previewFile:"\u6A94\u6848\u9810\u89BD",downloadFile:"\u4E0B\u8F09\u6587\u4EF6"},Empty:{description:"\u7121\u6B64\u8CC7\u6599"},Icon:{icon:"\u5716\u6A19"},Text:{edit:"\u7DE8\u8F2F",copy:"\u8907\u88FD",copied:"\u8907\u88FD\u6210\u529F",expand:"\u5C55\u958B"},PageHeader:{back:"\u8FD4\u56DE"},Image:{preview:"\u9810\u89BD"}};function Xe(o){let a=o;return 5}var We=["zh",[["\u4E0A\u5348","\u4E0B\u5348"],void 0,void 0],void 0,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],void 0,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],void 0,[["\u516C\u5143\u524D","\u516C\u5143"],void 0,void 0],0,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",void 0,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],CNY:["\xA5"],ILR:["ILS"],JPY:["JP\xA5","\xA5"],KRW:["\uFFE6","\u20A9"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",Xe];var ea="@",aa=(()=>{class o{constructor(e,t,r,n,l){this.doc=e,this.delegate=t,this.zone=r,this.animationType=n,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=b(oe,{optional:!0}),this.loadingSchedulerFn=b(ta,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-5KIUUBWZ.js").then(r=>r),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(r=>{throw new $(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc);let l=new n(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let n=new L(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let c=l.createRenderer(e,t);n.use(c),this.scheduler?.notify(10)}).catch(l=>{n.use(r)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){re()}}static{this.\u0275prov=C({token:o,factory:o.\u0275fac})}}return o})(),L=class{constructor(a){this.delegate=a,this.replay=[],this.\u0275type=1}use(a){if(this.delegate=a,this.replay!==null){for(let e of this.replay)e(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,e){return this.delegate.createElement(a,e)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,e){this.delegate.appendChild(a,e)}insertBefore(a,e,t,r){this.delegate.insertBefore(a,e,t,r)}removeChild(a,e,t){this.delegate.removeChild(a,e,t)}selectRootElement(a,e){return this.delegate.selectRootElement(a,e)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,e,t,r){this.delegate.setAttribute(a,e,t,r)}removeAttribute(a,e,t){this.delegate.removeAttribute(a,e,t)}addClass(a,e){this.delegate.addClass(a,e)}removeClass(a,e){this.delegate.removeClass(a,e)}setStyle(a,e,t,r){this.delegate.setStyle(a,e,t,r)}removeStyle(a,e,t){this.delegate.removeStyle(a,e,t)}setProperty(a,e,t){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(a,e,t)),this.delegate.setProperty(a,e,t)}setValue(a,e){this.delegate.setValue(a,e)}listen(a,e,t){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(a,e,t)),this.delegate.listen(a,e,t)}shouldReplay(a){return this.replay!==null&&a.startsWith(ea)}},ta=new s("");function Ge(o="animations"){return ne("NgAsyncAnimations"),S([{provide:le,useFactory:(a,e,t)=>new aa(a,e,t,o),deps:[he,Pe,j]},{provide:te,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var F="Service workers are disabled or not supported by this browser";function ra(o){return O(()=>q(new Error(o)))}var x=class{constructor(a){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=ra(F);else{let t=H(a,"controllerchange").pipe(p(()=>a.controller)),r=O(()=>w(a.controller)),n=G(r,t);this.worker=n.pipe(f(v=>!!v)),this.registration=this.worker.pipe(D(()=>a.getRegistration()));let T=H(a,"message").pipe(p(v=>v.data)).pipe(f(v=>v&&v.type)).pipe(J());T.connect(),this.events=T}}postMessage(a,e){return this.worker.pipe(h(1),Q(t=>{t.postMessage(I({action:a},e))})).toPromise().then(()=>{})}postMessageWithOperation(a,e,t){let r=this.waitForOperationCompleted(t),n=this.postMessage(a,e);return Promise.all([n,r]).then(([,l])=>l)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let e;return typeof a=="string"?e=t=>t.type===a:e=t=>a.includes(t.type),this.events.pipe(f(e))}nextEventOfType(a){return this.eventsOfType(a).pipe(h(1))}waitForOperationCompleted(a){return this.eventsOfType("OPERATION_COMPLETED").pipe(f(e=>e.nonce===a),h(1),p(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},oa=(()=>{class o{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,this.pushManager=null,this.subscriptionChanges=new K,!e.isEnabled){this.messages=y,this.notificationClicks=y,this.subscription=y;return}this.messages=this.sw.eventsOfType("PUSH").pipe(p(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(p(r=>r.data)),this.pushManager=this.sw.registration.pipe(p(r=>r.pushManager));let t=this.pushManager.pipe(D(r=>r.getSubscription()));this.subscription=U(t,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(F));let t={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),n=new Uint8Array(new ArrayBuffer(r.length));for(let l=0;l<r.length;l++)n[l]=r.charCodeAt(l);return t.applicationServerKey=n,this.pushManager.pipe(D(l=>l.subscribe(t)),h(1)).toPromise().then(l=>(this.subscriptionChanges.next(l),l))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(F));let e=t=>{if(t===null)throw new Error("Not subscribed to push notifications.");return t.unsubscribe().then(r=>{if(!r)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(h(1),D(e)).toPromise()}decodeBase64(e){return atob(e)}static{this.\u0275fac=function(t){return new(t||o)(N(x))}}static{this.\u0275prov=C({token:o,factory:o.\u0275fac})}}return o})(),la=(()=>{class o{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=y,this.unrecoverable=y;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(F));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(F));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static{this.\u0275fac=function(t){return new(t||o)(N(x))}}static{this.\u0275prov=C({token:o,factory:o.\u0275fac})}}return o})();var Ze=new s("");function na(o,a,e,t){return()=>{if(!(R(t)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let r=o.get(j),n=o.get(V);r.runOutsideAngular(()=>{let c=navigator.serviceWorker,m=()=>c.controller?.postMessage({action:"INITIALIZE"});c.addEventListener("controllerchange",m),n.onDestroy(()=>{c.removeEventListener("controllerchange",m)})});let l;if(typeof e.registrationStrategy=="function")l=e.registrationStrategy();else{let[c,...m]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(c){case"registerImmediately":l=w(null);break;case"registerWithDelay":l=Je(+m[0]||0);break;case"registerWhenStable":let T=W(o.get(V).whenStable());l=m[0]?U(T,Je(+m[0])):T;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}r.runOutsideAngular(()=>l.pipe(h(1)).subscribe(()=>navigator.serviceWorker.register(a,{scope:e.scope}).catch(c=>console.error("Service worker registration failed with:",c))))}}function Je(o){return w(null).pipe(Z(o))}function ia(o,a){return new x(R(a)&&o.enabled!==!1?navigator.serviceWorker:void 0)}var M=class{};function k(o,a={}){return S([oa,la,{provide:Ze,useValue:o},{provide:M,useValue:a},{provide:x,useFactory:ia,deps:[M,B]},{provide:me,useFactory:na,deps:[ae,Ze,M,B],multi:!0}])}ue(We);var Qe={providers:[pe({eventCoalescing:!0}),xe(Ve),ve(),Me(Re),Le(Ke),ee(we),Ge(),Ye(),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"}),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"}),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"}),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"}),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"}),k("ngsw-worker.js",{enabled:!P(),registrationStrategy:"registerWhenStable:30000"})]};var E=class o{constructor(a,e,t){this.router=a;this.webdataService=e;this.sharedService=t}isCollapsed=!1;selectedMenu="";ngOnInit(){this.sharedService.selectedMenu$.subscribe(a=>{this.selectedMenu=a})}gohome(){this.sharedService.setSelectedMenu("home"),this.router.navigate(["/roadmap"])}onMenuItemClick(a){this.sharedService.setSelectedMenu(a),this.webdataService.name=a,this.router.navigate(["/welcome",a])}static \u0275fac=function(e){return new(e||o)(z(Se),z(Ne),z(Be))};static \u0275cmp=X({type:o,selectors:[["app-root"]],standalone:!0,features:[se],decls:33,vars:7,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"sidebar-logo"],["href","https://ng.ant.design/","target","_blank"],["src","https://ng.ant.design/assets/img/logo.svg","alt","logo"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-submenu","","nzOpen","","nzTitle","\u4F5B\u6CD5\u5C08\u984C","nzIcon","dashboard"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","","nzMatchRouter",""],[1,"app-header"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],[1,"inner-content"]],template:function(e,t){e&1&&(i(0,"nz-layout",0)(1,"nz-sider",1),de("nzCollapsedChange",function(n){return ce(t.isCollapsed,n)||(t.isCollapsed=n),n}),i(2,"div",2)(3,"a",3),A(4,"img",4),i(5,"h1"),Y(6,"\u898B\u8F1D\u5E2B\u7236\u5C0F\u5B78\u5802"),d()()(),i(7,"ul",5)(8,"li",6)(9,"ul")(10,"li",7),_("click",function(){return t.gohome()}),i(11,"a"),Y(12,"\u8AB2\u7A0B\u5C0E\u89BD"),d()(),i(13,"li",7),_("click",function(){return t.onMenuItemClick("\u5927\u4E58\u8D77\u4FE1\u8AD6")}),i(14,"a"),Y(15,"\u5927\u4E58\u8D77\u4FE1\u8AD6"),d()(),i(16,"li",7),_("click",function(){return t.onMenuItemClick("\u552F\u8B58\u5B78\u5C08\u984C")}),i(17,"a"),Y(18,"\u552F\u8B58\u5B78\u5C08\u984C"),d()(),i(19,"li",8)(20,"a"),Y(21,"\u83EF\u56B4\u7D93\u5C08\u984C"),d()(),i(22,"li",8)(23,"a"),Y(24,"\u695E\u56B4\u7D93\u5C08\u984C"),d()()()()()(),i(25,"nz-layout")(26,"nz-header")(27,"div",9)(28,"span",10),_("click",function(){return t.isCollapsed=!t.isCollapsed}),A(29,"span",11),d()()(),i(30,"nz-content")(31,"div",12),A(32,"router-outlet"),d()()()()),e&2&&(u(),ie("nzCollapsed",t.isCollapsed),g("nzTrigger",null),u(6),g("nzInlineCollapsed",t.isCollapsed),u(3),g("nzSelected",t.selectedMenu==="home"),u(3),g("nzSelected",t.selectedMenu==="\u5927\u4E58\u8D77\u4FE1\u8AD6"),u(3),g("nzSelected",t.selectedMenu==="\u552F\u8B58\u5B78\u5C08\u984C"),u(13),g("nzType",t.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[ge,ye,Fe,_e,Ue,He,Ie,Ee,Oe,Ae,ze,be,je],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh;overflow:hidden}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px #00152914}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%}"]})};ke(E,Qe).catch(o=>console.error(o));