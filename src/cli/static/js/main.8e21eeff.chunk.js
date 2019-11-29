(this["webpackJsonpxunit-viewer"]=this["webpackJsonpxunit-viewer"]||[]).push([[0],{147:function(e,t,a){e.exports=a(318)},155:function(e,t,a){},286:function(e,t){},288:function(e,t){},318:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(144),c=a.n(i),r=(a(152),a(153),a(155),a(27)),l=a(33),o=a.n(l),u=a(55),p=a(34),m=a.n(p),d=a(35),v=a.n(d),f=function(){return n.a.createElement("svg",{className:"logo",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("rect",{width:"64",height:"64",fill:"#2C3E50"}),n.a.createElement("path",{d:"M19.0625 28.9688L24.5156 20.25H28.0469L20.8594 31.5312L28.2188 43H24.6562L19.0625 34.125L13.4375 43H9.89062L17.2656 31.5312L10.0625 20.25H13.5781L19.0625 28.9688Z",fill:"#0DBF1F"}),n.a.createElement("path",{d:"M42.4344 39.0156L48.9344 20.25H52.2156L43.7781 43H41.1219L32.7 20.25H35.9656L42.4344 39.0156Z",fill:"#B32010"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64L4 60V4H60L64 0H4H0V4V64Z",fill:"#0DBF1F"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64H60H64V60V0L60 4V60H4L0 64Z",fill:"#B32010"}))},E=a(145),g=function(e){var t=e.active,a=e.onClick;return n.a.createElement("section",{className:"hero is-black"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column is-1"},n.a.createElement(E.Slider,{className:"button",active:t,onClick:a,borderRadius:4,color:"#fff"})),n.a.createElement("div",{className:"column is-11"},n.a.createElement("div",{className:"hero-center"},n.a.createElement(f,null),n.a.createElement("h1",{className:"title"},"Xunit Viewer"))))))},b=function(e){var t=e.active,a=e.onIcon,s=e.offIcon,i=e.onLabel,c=e.offLabel,r=e.disabled,l=void 0!==r&&r,o=e.onChange,u=void 0===o?function(){}:o,p=e.className,m=void 0===p?"":p;return n.a.createElement("button",{onClick:function(){u(!t)},disabled:l,className:"button toggle is-".concat(t?"active":"inactive"," ").concat(m)},n.a.createElement("div",{className:"toggle-rail"},n.a.createElement("div",{className:"toggle-handle"})),t?a:s,n.a.createElement("span",null,t?i:c))},h=function(e){var t=e.label,a=e.dispatch;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-suites",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},N=function(e){var t=e.count,a=e.total;return n.a.createElement("div",{className:"options-total"},n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},w=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},y=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},k=function(e){var t=e.suitesExpanded,a=void 0===t||t,s=e.count,i=void 0===s?0:s,c=e.total,r=void 0===c?0:c,l=e.dispatch,o=e.active,u=void 0!==o&&o;return n.a.createElement("div",{className:"options card ".concat(u?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement(h,{label:"Suites",dispatch:l}),n.a.createElement("button",{onClick:function(){return l({type:"toggle-suite-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(N,{count:i,total:r})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content"},u?n.a.createElement(b,{onChange:function(){return l({type:"toggle-all-suites"})},active:a,onLabel:"Expanded",offLabel:"Contracted",offIcon:n.a.createElement(w,null),onIcon:n.a.createElement(y,null)}):null))},O={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},j=function(e){var t=e.label,a=e.dispatch;e.suite,e.id;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-tests",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},x=function(e){var t=e.count,a=e.total,s=e.icon;return n.a.createElement("div",{className:"options-total"},s?n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(O[s]||O.unknown),"aria-hidden":"true"})):null,n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},S=function(e,t,a){return(e[t]||{})[a]||0},T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye"})))},C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye-slash"})))},L=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-star"}))},_=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-code"}))},A=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},I=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},H=function(e){var t=e.testCounts,a=e.status;return S(t,a,"total")>0?n.a.createElement(x,{count:S(t,a,"count"),total:S(t,a,"total"),icon:a}):null},V=function(e){var t=e.status,a=e.label,s=e.dispatch,i=e.visible,c=void 0===i||i,r=e.expanded,l=void 0===r||r,o=e.raw,u=void 0===o||o;return n.a.createElement("div",{className:"test-options-toggle-row"},n.a.createElement("div",{className:"test-options-toggle-row-label"},"all"!==t?n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(O[t]||O.unknown),"aria-hidden":"true"})):n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"far fa-circle","aria-hidden":"true"})),n.a.createElement("span",null,a)),n.a.createElement(b,{onChange:function(){s({type:"toggle-test-visibility",payload:{status:t,active:!c}})},active:c,onLabel:"Visible",offLabel:"Hidden",onIcon:n.a.createElement(T,null),offIcon:n.a.createElement(C,null)}),n.a.createElement(b,{onChange:function(){s({type:"toggle-test-expanded",payload:{status:t,active:!l}})},active:l,onLabel:"Exanded",offLabel:"Contracted",onIcon:n.a.createElement(I,null),offIcon:n.a.createElement(A,null)}),n.a.createElement(b,{onChange:function(){s({type:"toggle-test-raw",payload:{status:t,active:!u}})},active:u,onLabel:"Raw",offLabel:"Pretty",onIcon:n.a.createElement(_,null),offIcon:n.a.createElement(L,null)}))},F=function(e){var t=e.testCounts,a=void 0===t?{}:t,s=e.testToggles,i=void 0===s?{}:s,c=e.count,r=void 0===c?0:c,l=e.total,o=void 0===l?0:l,u=e.dispatch,p=e.active,m=void 0!==p&&p;return n.a.createElement("div",{className:"options card ".concat(m?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement(j,{label:"Tests",dispatch:u}),n.a.createElement("button",{onClick:function(){return u({type:"toggle-test-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(x,{count:r,total:o}),n.a.createElement(H,{testCounts:a,status:"passed"}),n.a.createElement(H,{testCounts:a,status:"failure"}),n.a.createElement(H,{testCounts:a,status:"error"}),n.a.createElement(H,{testCounts:a,status:"skipped"}),n.a.createElement(H,{testCounts:a,status:"unknown"})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content options-toggles"},m?n.a.createElement(n.a.Fragment,null,n.a.createElement(V,Object.assign({status:"all",label:"All",dispatch:u},i.all)),n.a.createElement(V,Object.assign({status:"passed",label:"Passed",dispatch:u},i.passed)),n.a.createElement(V,Object.assign({status:"failure",label:"Failure",dispatch:u},i.failure)),n.a.createElement(V,Object.assign({status:"error",label:"Error",dispatch:u},i.error)),n.a.createElement(V,Object.assign({status:"skipped",label:"Skipped",dispatch:u},i.skipped)),n.a.createElement(V,Object.assign({status:"unknown",label:"Uknown",dispatch:u},i.unknown))):null))},$=function(e){var t=e.label,a=e.dispatch;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-properties",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},R=function(e){var t=e.count,a=e.total;return n.a.createElement("div",{className:"options-total"},n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},B=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye"}))},P=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye-slash"}))},M=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},Z=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},q=function(e){var t=e.count,a=void 0===t?0:t,s=e.total,i=void 0===s?0:s,c=e.active,r=void 0!==c&&c,l=e.dispatch,o=e.propertiesExpanded,u=void 0===o||o,p=e.propertiesVisible,m=void 0===p||p;return n.a.createElement("div",{className:"options card ".concat(r?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement($,{label:"Propeties",dispatch:l}),n.a.createElement("button",{onClick:function(){return l({type:"toggle-properties-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(R,{count:a,total:i})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content"},r?n.a.createElement("div",null,n.a.createElement(b,{className:"properties-options-toggle",active:m,onChange:function(){l({type:"toggle-properties-visbility",payload:{active:!m}})},onLabel:"Visible",offLabel:"Hidden",onIcon:n.a.createElement(B,null),offIcon:n.a.createElement(P,null)}),n.a.createElement(b,{onChange:function(){l({type:"toggle-all-properties",payload:{active:!u}})},className:"properties-options-toggle",active:u,onLabel:"Expanded",offLabel:"Contracted",offIcon:n.a.createElement(M,null),onIcon:n.a.createElement(Z,null)})):null))},D=(a(146),a(254),a(255),a(97)),J={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},U=function(e){var t=e.properties,a=e.active,s=void 0===a||a,i=e.dispatch,c=e.suite;return n.a.createElement("div",{className:"properties card is-".concat(s?"active":"inactive")},n.a.createElement("button",{className:"card-header",onClick:function(){i({type:"toggle-properties",payload:{suite:c,active:!s}})}},n.a.createElement("p",{className:"card-header-title"},"Properties"),n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),s?n.a.createElement("div",{className:"card-content"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Property"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,Object.keys(t).filter((function(e){return"_active"!==e&&"_visible"!==e})).map((function(e){return n.a.createElement("tr",{key:e},n.a.createElement("td",null,e),n.a.createElement("td",null,t[e]))}))))):null)},X=function(e){var t=e.messages;return n.a.createElement("div",{className:"raw-content"},t.map((function(e,t){return n.a.createElement("pre",{key:"test-message-".concat(t)},e)})))},z=function(e){var t=e.messages;return n.a.createElement("div",{className:"pretty-content"},t.map((function(e,t){return n.a.createElement("div",{key:"test-message-".concat(t),dangerouslySetInnerHTML:{__html:e}})})))},G=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-star"}))},K=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-code"}))},Q=function(e){var t=e.id,a=e.messages,s=e.status,i=e.time,c=e.name,r=e.active,l=void 0===r||r,o=e.raw,u=void 0===o||o,p=e.dispatch,m=e.suite;return n.a.createElement("div",{className:"test card is-".concat(l?"active":"inactive"," is-").concat(s," is-").concat(0===a.length?"empty":"populated")},n.a.createElement("button",{className:"card-header",onClick:function(){p({type:"toggle-test",payload:{suite:m,id:t,active:!l}})},disabled:0===a.length},n.a.createElement("p",{className:"card-header-title"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(J[s]||J.unknown),"aria-hidden":"true"})),n.a.createElement("span",null,Object(D.title)(c)),i?n.a.createElement("small",null,"time = ",i):null),a.length>0?n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"}))):null),l&&a.length>0?n.a.createElement("div",{className:"card-content"},n.a.createElement(b,{active:u,onLabel:"raw",onIcon:n.a.createElement(K,null),offIcon:n.a.createElement(G,null),offLabel:"pretty",onChange:function(){return p({type:"toggle-test-mode",payload:{suite:m,id:t,raw:!u}})}}),u?n.a.createElement(X,{messages:a}):n.a.createElement(z,{messages:a})):null)},W=function(e){var t=e.count,a=e.type;return t>0?n.a.createElement("span",{className:"suite-count"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(J[a]),"aria-hidden":"true"})),t):null},Y=function(e){var t=e.id,a=e.name,s=e.active,i=void 0!==s&&s,c=e.properties,r=void 0===c?{}:c,l=e.time,o=e.tests,u=void 0===o?{}:o,p=e.dispatch,m=0,d=0,v=0,f=0,E=0;Object.keys(u).forEach((function(e){var t=u[e].status;"passed"===t?m+=1:"failure"===t?d+=1:"skipped"===t?v+=1:"error"===t?f+=1:E+=1}));var g=Object.keys(u).length>0&&Object.values(u).some((function(e){return e.visible})),b="_visible"in r&&r._visible&&Object.keys(r).filter((function(e){return"_active"!==e&&"_visible"!==e})).length>0,h=g||b;return n.a.createElement("div",{className:"card suite is-".concat(i?"active":"inactive"," is-").concat(h?"populated":"empty")},n.a.createElement("button",{className:"card-header",onClick:function(){h&&p({type:"toggle-suite",payload:{id:t,active:!i}})},disabled:!h},n.a.createElement("p",{className:"card-header-title"},n.a.createElement("span",null,Object(D.title)(a)),l?n.a.createElement("small",null,"time = ",l):null),h?n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"}))):null,h?n.a.createElement("p",{className:"suite-count-container"},n.a.createElement(W,{type:"failure",count:d}),n.a.createElement(W,{type:"error",count:f}),n.a.createElement(W,{type:"passed",count:m}),n.a.createElement(W,{type:"skipped",count:v}),n.a.createElement(W,{type:"unknown",count:E})):null),i&&h?n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"content"},b?n.a.createElement(U,{properties:r,suite:t,dispatch:p,active:r._active}):null,n.a.createElement("div",null,Object.keys(u).filter((function(e){return u[e].visible&&"failure"===u[e].status})).map((function(e){return n.a.createElement(Q,Object.assign({key:e},u[e],{suite:t,dispatch:p}))})),Object.keys(u).filter((function(e){return u[e].visible&&"error"===u[e].status})).map((function(e){return n.a.createElement(Q,Object.assign({key:e},u[e],{suite:t,dispatch:p}))})),Object.keys(u).filter((function(e){return u[e].visible&&"passed"===u[e].status})).map((function(e){return n.a.createElement(Q,Object.assign({key:e},u[e],{suite:t,dispatch:p}))})),Object.keys(u).filter((function(e){return u[e].visible&&"skipped"===u[e].status})).map((function(e){return n.a.createElement(Q,Object.assign({key:e},u[e],{suite:t,dispatch:p}))})),Object.keys(u).filter((function(e){return u[e].visible&&!["failure","error","passed","skipped"].includes(u[e].status)})).map((function(e){return n.a.createElement(Q,Object.assign({key:e},u[e],{suite:t,dispatch:p}))}))))):null)},ee=a(271),te=function(e){return new Promise((function(t,a){ee.parseString(e,(function(e,s){e?a(new Error(e)):t(s)}))}))},ae=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t},se=function e(t,a,s){a.tests=a.tests||{},s.forEach((function(s){var n=s.$||{},i=n.name||"No Name",c=n.time||0,r=ae(i),l=a.tests[r]||{id:r,name:i,messages:[],visible:!0};if(l.time=c,"string"===typeof s&&l.messages.push(s.trim()),s._&&l.messages.push(s._.trim()),n.message&&l.messages.push(s.$.message.trim()),"string"!==typeof s){var o=Object.keys(s).filter((function(e){return"$"!==e&&"_"!==e&&"testcase"!==e}))[0];o&&function(e,t){t.forEach((function(t){t._&&e.messages.push(t._.trim()),t.$&&t.$.message&&e.messages.push(t.$.message.trim())}))}(l,s[o]),l.status=o||"passed"}l.messages=l.messages.filter((function(e){return""!==e})),a.tests[r]=l,"undefined"!==typeof s.testcase&&e(t,a,s.testcase),"undefined"!==typeof s.testsuite&&ne(t,s.testsuite)}))},ne=function(e,t){Array.isArray(t)||(t=[t]),t.forEach((function(t){var a=function(e,t){var a=t.$||{},s=a.name||"No Name",n=ae(s),i=e.suites[n]||{};return i.tests=i.tests||{},i.properties=i.properties||{_visible:!0},i.id=n,i.name=s,i.time=a.time||0,i}(e,t);"undefined"!==typeof t.properties&&function(e,t){e.properties=e.properties||{},t.properties.forEach((function(t){"string"===typeof t?""!==(t=t.trim())&&(e.properties["No Name"]=e.properties["No Name"]||[],e.properties["No Name"].push(t)):t.property.forEach((function(t){var a=t.$||{},s=a.name||"No Name",n=a.value||t._;"string"===typeof t&&(n=t),n=(n=n||"").trim(),e.properties[s]=e.properties[s]||[],n&&e.properties[s].push(n)}))}))}(a,t),"undefined"!==typeof t.testcase&&se(e,a,t.testcase),e.suites[a.id]=a}))},ie=function e(t,a){Array.isArray(a)||(a=[a]),a.forEach((function(a){ne(t,a),"undefined"!==typeof a.testsuite&&e(t,a.testsuite)}))},ce=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={suites:{}},e.next=3,te(t);case 3:return(s=e.sent).testsuites?(n=s.testsuites.testsuite,ie(a,n)):s.testsuite&&ie(a,s.testsuite),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(u.a)(o.a.mark((function e(t,a,s){var n,i,c,r,l,u,p,d,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=!1,c=void 0,e.prev=3,r=a[Symbol.iterator]();case 5:if(n=(l=r.next()).done){e.next=22;break}return u=l.value,p=u.file,d=u.contents,e.prev=9,e.next=12,ce(d);case 12:v=e.sent,s=m.a.recursive(!0,s,v),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(9),console.log("Failed to parse",p,"\n",e.t0.message);case 19:n=!0,e.next=5;break;case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(3),i=!0,c=e.t1;case 28:e.prev=28,e.prev=29,n||null==r.return||r.return();case 31:if(e.prev=31,!i){e.next=34;break}throw c;case 34:return e.finish(31);case 35:return e.finish(28);case 36:t({type:"parse-suites",payload:{suites:s.suites}});case 37:case"end":return e.stop()}}),e,null,[[3,24,28,36],[9,16],[29,,31,35]])})));return function(t,a,s){return e.apply(this,arguments)}}(),le=function(e,t){var a=t.type,s=t.payload;console.log(a,s);var n={};return n.currentSuites=e.currentSuites,"parse-suites"===a?((e=m.a.recursive(!0,{},e)).suites=s.suites,e.currentSuites=s.suites,Object.values(e.currentSuites).forEach((function(e){(Object.keys(e.tests).length>0||Object.keys(e.properties).length>0)&&(e.active=!0)})),e):("search-suites"===a&&(Object.values(e.suites).forEach((function(t){var a=t.name,i=t.id;v.a.test(s.value.toLowerCase(),a.toLowerCase())?(n.currentSuites[i]=n.currentSuites[i]||m.a.recursive(!0,{},e.suites[i]),"active"in n.currentSuites[i]||(n.currentSuites[i].active=!0)):delete n.currentSuites[i]})),n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"search-tests"===a&&Object.values(e.suites).forEach((function(t){Object.values(t.tests).forEach((function(a){v.a.test(s.value.toLowerCase(),a.name.toLowerCase())||a.messages.some((function(e){return v.a.test(s.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(a.id in n.currentSuites[t.id].tests)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].tests[a.id]=m.a.recursive(!0,{},e.suites[t.id].tests[a.id]),n.currentSuites[t.id].tests[a.id].active=!0,n.currentSuites[t.id].tests[a.id].visible=!0,n.currentSuites[t.id].tests[a.id].raw=!0):n.currentSuites[t.id]&&delete n.currentSuites[t.id].tests[a.id]}))})),"search-properties"===a&&(Object.values(e.suites).forEach((function(t){Object.entries(t.properties).forEach((function(a){var i=Object(r.a)(a,2),c=i[0],l=i[1];!0===(l=l||[])&&(l=[]),v.a.test(s.value.toLowerCase(),c.toLowerCase())||l.some((function(e){return v.a.test(s.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(c in n.currentSuites[t.id].properties)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].properties[c]=[].concat(e.suites[t.id].properties[c]),n.currentSuites[t.id].properties._active=!0,n.currentSuites[t.id].properties._visible=!0,n.propertiesExpanded=!1):delete n.currentSuites[t.id].properties[c]}))})),n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1})),n.propertiesVisible=Object.values(n.currentSuites).some((function(e){return e.properties._visible||!1}))),"toggle-all-suites"===a&&(n.suitesExpanded=!e.suitesExpanded,Object.values(n.currentSuites).forEach((function(e){e.active=n.suitesExpanded}))),"toggle-menu"===a&&(n.menuActive=!e.menuActive),"toggle-suite-options"===a&&(n.suiteOptionsActive=!e.suiteOptionsActive),"toggle-test-options"===a&&(n.testOptionsActive=!e.testOptionsActive),"toggle-properties-options"===a&&(n.propertiesOptionsActive=!e.propertiesOptionsActive),"toggle-files"===a&&(n.activeFiles=!e.activeFiles),"toggle-suite"===a&&(n.currentSuites[s.id].active=s.active,n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"toggle-all-properties"===a&&(Object.values(n.currentSuites).forEach((function(e){e.properties._active=s.active})),n.propertiesExpanded=s.active),"toggle-properties"===a&&(n.currentSuites[s.suite].properties._active=s.active,n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1}))),"toggle-properties-visbility"===a&&(Object.values(n.currentSuites).forEach((function(e){e.properties._visible=s.active})),n.propertiesVisible=s.active),"toggle-test"===a&&(n.currentSuites[s.suite].tests[s.id].active=s.active),"toggle-test-mode"===a&&(n.currentSuites[s.suite].tests[s.id].raw=s.raw),"toggle-test-visibility"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].visible=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"all"===s.status?e.visible=s.active:s.status===e.status?e.visible=s.active:"undefined"===typeof e.status&&"unknown"===s.status&&(e.visible=s.active)}))})),"all"===s.status?(n.testToggles.passed.visible=s.active,n.testToggles.failure.visible=s.active,n.testToggles.error.visible=s.active,n.testToggles.skipped.visible=s.active,n.testToggles.unknown.visible=s.active):(n.testToggles.passed.visible||n.testToggles.failure.visible||n.testToggles.error.visible||n.testToggles.skipped.visible||n.testToggles.unknown.visible)&&(n.testToggles.all.visible=!0)),"toggle-test-expanded"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].expanded=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"all"===s.status?e.active=s.active:s.status===e.status?e.active=s.active:"undefined"===typeof e.status&&"unknown"===s.status&&(e.active=s.active)}))})),"all"===s.status?(n.testToggles.passed.expanded=s.active,n.testToggles.failure.expanded=s.active,n.testToggles.error.expanded=s.active,n.testToggles.skipped.expanded=s.active,n.testToggles.unknown.expanded=s.active):(n.testToggles.passed.expanded||n.testToggles.failure.expanded||n.testToggles.error.expanded||n.testToggles.skipped.expanded||n.testToggles.unknown.expanded)&&(n.testToggles.all.expanded=!0)),"toggle-test-raw"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].raw=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"all"===s.status?e.raw=s.active:s.status===e.status?e.raw=s.active:"undefined"===typeof e.status&&"unknown"===s.status&&(e.raw=s.active)}))})),"all"===s.status?(n.testToggles.passed.raw=s.active,n.testToggles.failure.raw=s.active,n.testToggles.error.raw=s.active,n.testToggles.skipped.raw=s.active,n.testToggles.unknown.raw=s.active):(n.testToggles.passed.raw||n.testToggles.failure.raw||n.testToggles.error.raw||n.testToggles.skipped.raw||n.testToggles.unknown.raw)&&(n.testToggles.all.raw=!0)),m.a.recursive(!0,e,n))},oe={suites:{},currentSuites:{},menuActive:!1,suiteOptionsActive:!1,testOptionsActive:!1,propertiesOptionsActive:!1,activeFiles:!1,suitesExpanded:!0,propertiesExpanded:!0,propertiesVisible:!0,testToggles:{all:{visible:!0,expanded:!0,raw:!0},passed:{visible:!0,expanded:!0,raw:!0},failure:{visible:!0,expanded:!0,raw:!0},error:{visible:!0,expanded:!0,raw:!0},skipped:{visible:!0,expanded:!0,raw:!0},unknown:{visible:!0,expanded:!0,raw:!0}}},ue=function(e){var t=e.files,a=Object(s.useReducer)(le,oe),i=Object(r.a)(a,2),c=i[0],l=i[1];0===Object.keys(c.suites).length&&re(l,t,{});var o=0,u=0;Object.entries(c.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1]);o+=Object.keys(a.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length})),Object.entries(c.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1]);u+=Object.keys(a.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length}));var p={},m=0,d=0;Object.entries(c.currentSuites).forEach((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1]);Object.entries(a.tests).forEach((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1].status||"unknown");p[a]=p[a]||{},p[a].count=p[a].count||0,p[a].total=p[a].total||0,p[a].count+=1,p[a].total+=1,d+=1,m+=1}))}));var v=function(e){var t=e.files;re(l,t,{})};return window.sockets=window.sockets||null,Object(s.useEffect)((function(){null===window.sockets&&"io"in window&&(window.sockets=window.io(),window.sockets.on("update",v))})),n.a.createElement("div",null,n.a.createElement(g,{active:c.menuActive,onClick:function(){l({type:"toggle-menu"})}}),n.a.createElement("header",{className:"is-".concat(c.menuActive?"shown":"hidden")},n.a.createElement("div",{className:"container"},n.a.createElement(k,{active:c.suiteOptionsActive,suitesExpanded:c.suitesExpanded,dispatch:l,count:Object.keys(c.currentSuites).length,total:Object.keys(c.suites).length}),n.a.createElement(F,{active:c.testOptionsActive,testToggles:c.testToggles,testCounts:p,count:m,total:d,dispatch:l}),n.a.createElement(q,{propertiesExpanded:c.propertiesExpanded,propertiesVisible:c.propertiesVisible,active:c.propertiesOptionsActive,count:o,total:u,dispatch:l}),null)),n.a.createElement("main",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,Object.values(c.currentSuites).map((function(e){return n.a.createElement(Y,Object.assign({key:e.id},e,{dispatch:l}))}))))))},pe=window.files||[];c.a.render(n.a.createElement(ue,{files:pe}),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.8e21eeff.chunk.js.map