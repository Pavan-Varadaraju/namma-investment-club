(this["webpackJsonpnamma-investment-club"]=this["webpackJsonpnamma-investment-club"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c,s=n(1),r=n.n(s),a=n(28),i=n.n(a),l=(n(104),n(105),n(29)),j=(n(93).a.initializeApp({apiKey:"AIzaSyDaG4QQ48jgjUBxWxTEZbFzne85zyDQcow",authDomain:"namma-investment-club-a21f1.firebaseapp.com",projectId:"namma-investment-club-a21f1",storageBucket:"namma-investment-club-a21f1.appspot.com",messagingSenderId:"79640507973",appId:"1:79640507973:web:af9fd30fb29d873954952c"}).database().ref(),n(88)),d=n(31),b=(n(114),n(75)),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UpdateInvestmentDetails":return t.data;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UpdateContributionDetails":return t.data;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UpdateClubDetails":return t.data;default:return e}},O=Object(b.a)({investmentDetails:o,contributionDetails:h,clubDetails:u}),x=Object(b.b)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=n(3),v=function(){c=Object(d.b)((function(e){return e.clubDetails}));var e=Object(s.useState)(c),t=Object(l.a)(e,2),n=t[0],r=(t[1],function(e){var t=0;return c.usersList&&c.totalContribution&&c.usersList.map((function(n){n.id===e&&(t=n.UserTotalContribution/c.totalContribution*100)})),t});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-secondary",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{colspan:"2",children:"% Shareholding"})})}),Object(m.jsx)("tbody",{children:n&&n.usersList&&n.usersList.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.FullName}),Object(m.jsx)("td",{children:r(e.id)})]})}))})]})})},p=function(e){return{type:"UpdateClubDetails",data:e}},N=function(e){x.dispatch({type:"UpdateContributionDetails",data:e})},f=[],g=[],C=0,y=function(e,t){var n=[];C=0,t&&t.length>0&&e&&e.length>0&&(t.map((function(t){var c=0;e.map((function(e){JSON.parse(e).Contributor.FullName===JSON.parse(t).FullName&&(c+=JSON.parse(e).ContributionAmount)}));var s=JSON.parse(t);s.UserTotalContribution=c,C+=c,n.push(s)})),function(e){var t=x.getState();t.clubDetails.totalContribution=e,x.dispatch(p(t.clubDetails))}(C),function(e){var t=x.getState();t.clubDetails.usersList=e,x.dispatch(p(t.clubDetails))}(n))};function I(e){e&&e.forEach((function(e,t){e.Contributors.forEach((function(e){f.push(JSON.stringify(e.Contributor)),g.push(JSON.stringify(e))}))})),f=f.filter((function(e,t,n){return n.indexOf(e)===t})),g=g.filter((function(e,t,n){return n.indexOf(e)===t})),y(g,f)}var w=function(){var e=Object(d.b)((function(e){return e.contributionDetails})),t=Object(s.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),b=i[0],o=i[1];Object(s.useEffect)((function(){e?(r(e),I(e),o(f)):fetch("https://my-json-server.typicode.com/Pavan-Varadaraju/react-admin/ContributionDetails").then((function(e){return e.json()})).then((function(e){r(e),I(e),o(f),N(e)}))}),[]);var h=function(e){var t=0;return c.forEach((function(n){n.Contributors.forEach((function(n,c){n.Contributor.id===e&&(t+=n.ContributionAmount)}))})),t};return Object(m.jsxs)(m.Fragment,{children:[c&&0===f.length&&I(c),Object(m.jsx)("div",{className:"py-4",children:Object(m.jsx)("div",{className:"container-fluid text-center",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h1",{className:"display-4",children:"Dashboard"})})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"text-center",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Club Member Name"}),Object(m.jsx)("th",{children:"Investment"}),Object(m.jsx)("th",{children:"Current Value"}),Object(m.jsx)("th",{children:"Gain"}),Object(m.jsx)("th",{children:"% Gain"})]})}),Object(m.jsx)("tbody",{children:b&&b.length>0&&b.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:JSON.parse(e).FullName}),Object(m.jsx)("td",{children:h(JSON.parse(e).id)}),Object(m.jsx)("td",{children:"6547.24"}),Object(m.jsx)("td",{className:"text-success",children:Object(m.jsx)("strong",{children:"547.24"})}),Object(m.jsx)("td",{children:"9.12"})]})}))})]})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)(v,{})}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-success",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{colspan:"2",children:"Club Inflow"})})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Member Investment"}),Object(m.jsx)("td",{children:"Other Income"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:C}),Object(m.jsx)("td",{children:"96"})]})]})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-warning",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{colspan:"2",children:"Club Investment"})})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Invested Amount"}),Object(m.jsx)("td",{children:"30000"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Current Gain"}),Object(m.jsx)("td",{children:"2641.50"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Current Value"}),Object(m.jsx)("td",{children:"32641.50"})]})]})]})})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-info",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Balance Cash"}),Object(m.jsx)("th",{children:"Total Networth"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{className:"text-center",children:[Object(m.jsx)("td",{children:"96"}),Object(m.jsx)("td",{children:"32736.2081"})]})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-secondary",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{colspan:"2",children:"Total Invested By"})})}),Object(m.jsxs)("tbody",{className:"text-center",children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Pavan"}),Object(m.jsx)("td",{children:"20000"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Manju"}),Object(m.jsx)("td",{children:"10000"})]})]})]})})]})]})},D=n(166),F=n(169),S=n(165),A=n(19),T=n(47),U=function(){var e=Object(A.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(D.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"box-shadow",children:[Object(m.jsx)(D.a.Brand,{className:"cursor-pointer",onClick:function(){e.push("/")},children:"Namma Investment Club"}),Object(m.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(D.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(F.a,{className:"mr-auto",children:[Object(m.jsx)(F.a.Link,{children:Object(m.jsx)(T.b,{to:"dashboard",children:"Dashboard"})}),Object(m.jsx)(F.a.Link,{children:Object(m.jsx)(T.b,{activeClassName:"current",to:"/namma-investment-club/investments",children:"Investments"})}),Object(m.jsxs)(S.a,{title:"More",id:"collasible-nav-dropdown",children:[Object(m.jsx)(S.a.Item,{children:Object(m.jsx)(T.b,{activeClassName:"current",to:"contributions",children:"Contributions"})}),Object(m.jsx)(S.a.Item,{children:Object(m.jsx)(T.b,{activeClassName:"current",to:"investments",children:"Documents"})}),Object(m.jsx)(S.a.Divider,{}),Object(m.jsx)(S.a.Item,{children:"About Us"})]})]}),Object(m.jsx)("span",{className:"text-white",children:Object(m.jsx)("strong",{children:"Pavan V"})})]})]})})},E=n(82),B="Quant Active Fund",M="Quant Small Cap Fund",V={responseStatus:200,responseData:[{InvestmentCategory:"MutualFund",FundName:B,SchemeCode:120823,InvestedOn:"26/04/2021",InvestedAmount:2e4,FolioNumber:"5103843783",Units:61.15,PurchasedNav:327.05,InvestedBy:"Pavan",CurrentNav:0,CurrentValue:0,CurrentGain:0},{InvestmentCategory:"MutualFund",FundName:B,SchemeCode:120823,InvestedOn:"07/05/2021",InvestedAmount:5e3,FolioNumber:"5104050426",Units:14.044,PurchasedNav:356.0139,InvestedBy:"Manju",CurrentNav:0,CurrentValue:0,CurrentGain:0},{InvestmentCategory:"MutualFund",FundName:M,SchemeCode:120828,InvestedOn:"08/06/2021",InvestedAmount:5e3,FolioNumber:"5104050426",Units:44.664,PurchasedNav:111.9424,InvestedBy:"Manju",CurrentNav:0,CurrentValue:0,CurrentGain:0}]},P=n(21),_=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(0),a=Object(l.a)(r,2),i=a[0],j=a[1],b=Object(s.useState)(0),o=Object(l.a)(b,2),h=o[0],u=o[1],O=Object(d.b)((function(e){return e.investmentDetails})),v=Object(s.useState)({}),p=Object(l.a)(v,2),N=p[0],f=p[1];return function(e){x.dispatch({type:"UpdateInvestmentDetails",data:e})}(V),Object(s.useEffect)((function(){var e=0,t=0,n=0;fetch("https://my-json-server.typicode.com/Pavan-Varadaraju/react-admin/ContributionDetails").then((function(e){return e.json()})).then((function(e){return console.log("resp data",e)})),O&&O.responseData&&(f(O),O.responseData.forEach((function(c,s){var r;e+=c.InvestedAmount,(r=c.SchemeCode,fetch("https://api.mfapi.in/mf/"+r).then((function(e){return e.json()})).then((function(e){return Number(e.data[0].nav)}),(function(e){console.error("Error",e)}))).then((function(e){c.CurrentNav=e,t+=e*c.Units,n+=e*c.Units-c.InvestedAmount,f([].concat(Object(E.a)(O.responseData.slice(0,s)),[c],Object(E.a)(O.responseData.slice(s+1)))),j(t),u(n.toFixed(2))}))}))),c(e)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"py-4",children:[Object(m.jsx)("div",{className:"container-fluid text-center",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h1",{className:"display-4",children:"Investments"})})}),Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:"Mutual Funds"})})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)("table",{className:"table table-borderless table-stripped border border-primary",children:[Object(m.jsx)("thead",{className:"thead-light text-center",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Fund Name"}),Object(m.jsx)("th",{children:"Invested Date"}),Object(m.jsx)("th",{children:"Amount"}),Object(m.jsx)("th",{children:"Folio Number"}),Object(m.jsx)("th",{children:"Units"}),Object(m.jsx)("th",{children:"Purchased NAV"}),Object(m.jsx)("th",{children:"Current NAV"}),Object(m.jsx)("th",{children:"Current Value"}),Object(m.jsx)("th",{children:"Current Gain"}),Object(m.jsx)("th",{children:"Invested By"})]})}),Object(m.jsx)("tbody",{children:N&&N.length>0&&N.map((function(e,t){var n=Number(e.Units*e.CurrentNav-e.InvestedAmount).toFixed(2),c=Number(e.Units*e.CurrentNav).toFixed(2);return Object(m.jsxs)("tr",{className:"text-center",children:[Object(m.jsx)("td",{className:"text-left",children:e.FundName}),Object(m.jsx)("td",{children:e.InvestedOn}),Object(m.jsx)("td",{children:e.InvestedAmount}),Object(m.jsx)("td",{children:e.FolioNumber}),Object(m.jsx)("td",{children:e.Units}),Object(m.jsx)("td",{children:e.PurchasedNav}),Object(m.jsx)("td",{children:e.CurrentNav}),Object(m.jsx)("td",{className:"text-right",children:c}),Object(m.jsx)("td",{className:n<0?"text-right text-danger":"text-right text-success",children:Object(m.jsx)("strong",{children:n})}),Object(m.jsx)("td",{children:e.InvestedBy})]})}))})]})})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)(P.a,{bg:"light",text:"dark",className:"text-center",children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)("strong",{children:"Total Investments"})}),Object(m.jsx)(P.a.Body,{children:Object(m.jsxs)(P.a.Title,{children:[" ",n.toFixed(2)," "]})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)(P.a,{bg:h>0?"success":"danger",text:"white",className:"text-center",children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)("strong",{children:" Total Gain "})}),Object(m.jsx)(P.a.Body,{children:Object(m.jsxs)(P.a.Title,{children:[" ",h," "]})})]})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)(P.a,{bg:"primary",text:"white",className:"text-center",children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)("strong",{children:"Total Investment Networth "})}),Object(m.jsx)(P.a.Body,{children:Object(m.jsxs)(P.a.Title,{children:[" ",i.toFixed(2)," "]})})]})})]})]})},k=n(156),L=n(167),J=n(170),G=n(168),z=n(160),H=n(162),Q=n(158),X=n(163),R=n(161),K=n(157),W=n(159),Z=n(164),q=n(92),Y=n.n(q),$=n(91),ee=n.n($),te=Object(k.a)({root:{"& > *":{borderBottom:"unset"}}});function ne(e){var t=e.row,n=r.a.useState(!1),c=Object(l.a)(n,2),s=c[0],a=c[1],i=te();return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsxs)(K.a,{className:i.root,children:[Object(m.jsx)(Q.a,{children:Object(m.jsx)(G.a,{"aria-label":"expand row",size:"small",onClick:function(){return a(!s)},children:s?Object(m.jsx)(ee.a,{}):Object(m.jsx)(Y.a,{})})}),Object(m.jsx)(Q.a,{component:"th",scope:"row",children:t.contributionMonth}),Object(m.jsx)(Q.a,{align:"center",children:t.totalContributionInMonth})]}),Object(m.jsx)(K.a,{children:Object(m.jsx)(Q.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(m.jsx)(J.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(m.jsxs)(L.a,{margin:1,children:[Object(m.jsx)(W.a,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),Object(m.jsxs)(z.a,{size:"small","aria-label":"purchases",className:"w-50",children:[Object(m.jsx)(R.a,{children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(Q.a,{className:"font-weight-bold",align:"center",children:"Date"}),Object(m.jsx)(Q.a,{className:"font-weight-bold",align:"center",children:"Contributor"}),Object(m.jsx)(Q.a,{className:"font-weight-bold",align:"center",children:"Amount"})]})}),Object(m.jsx)(H.a,{children:t.history.map((function(e){return Object(m.jsxs)(K.a,{children:[Object(m.jsx)(Q.a,{component:"th",scope:"row",align:"center",children:e.date}),Object(m.jsx)(Q.a,{align:"center",children:e.contributorFullName}),Object(m.jsx)(Q.a,{align:"right",children:e.amount})]},e.date)}))})]})]})})})})]})}var ce=[];function se(e){e&&e.map((function(e){var t=0;e.Contributors.map((function(e){t+=e.ContributionAmount})),ce.push(function(e,t){var n=[];return e.Contributors.map((function(e){n.push({date:e.ContributionDate,contributorFullName:e.Contributor.FullName,amount:e.ContributionAmount})})),{contributionMonth:e.ContributionMonth,totalContributionInMonth:t,history:n}}(e,t))}))}function re(){var e=Object(s.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(d.b)((function(e){return e.contributionDetails}));return Object(s.useEffect)((function(){c(r),!r&&fetch("https://my-json-server.typicode.com/Pavan-Varadaraju/react-admin/ContributionDetails").then((function(e){return e.json()})).then((function(e){c(e),N(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[ce&&0===ce.length&&se(n),Object(m.jsx)(X.a,{component:Z.a,children:Object(m.jsxs)(z.a,{"aria-label":"collapsible table",children:[Object(m.jsx)(R.a,{children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(Q.a,{}),Object(m.jsx)(Q.a,{className:"font-weight-bold",children:"Month"}),Object(m.jsx)(Q.a,{align:"center",className:"font-weight-bold",children:"Contributed Amount"})]})}),Object(m.jsx)(H.a,{children:ce.map((function(e){return Object(m.jsx)(ne,{row:e},e.name)}))})]})})]})}var ae=function(){var e=Object(d.b)((function(e){return e.clubDetails}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"py-4",children:Object(m.jsx)("div",{className:"container-fluid text-center",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h1",{className:"display-4",children:"Contributions"})})})}),Object(m.jsxs)(P.a,{bg:"success",text:"white",className:"text-center",children:[Object(m.jsx)(P.a.Header,{children:Object(m.jsx)("strong",{children:" Total Contribution "})}),Object(m.jsx)(P.a.Body,{children:Object(m.jsxs)(P.a.Title,{children:[" ",e.totalContribution," "]})})]}),Object(m.jsx)("div",{className:"box-shadow mt-4",children:Object(m.jsx)(re,{})})]})};n(124).config();var ie=function(){return Object(m.jsx)(d.a,{store:x,children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-8 offset-md-2 py-2",children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(U,{}),Object(m.jsx)("div",{children:Object(m.jsxs)(A.c,{children:[Object(m.jsx)(A.a,{path:"/namma-investment-club/dashboard",children:Object(m.jsx)(w,{})}),Object(m.jsx)(A.a,{path:"/namma-investment-club/investments",children:Object(m.jsx)(_,{})}),Object(m.jsx)(A.a,{path:"/namma-investment-club/contributions",children:Object(m.jsx)(ae,{})}),Object(m.jsx)(A.a,{path:"/namma-investment-club/",children:Object(m.jsx)(w,{})})]})})]})})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root")),le()}},[[128,1,2]]]);
//# sourceMappingURL=main.a62fd5bf.chunk.js.map