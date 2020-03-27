(this["webpackJsonpreact-accessibility-dialog"]=this["webpackJsonpreact-accessibility-dialog"]||[]).push([[0],{203:function(e,t,a){e.exports=a(407)},401:function(e,t,a){},402:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);a(204),a(213);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),i=(a(401),a(131)),c=(a(402),a(438)),s=a(436),d=a(437),u=a(433),m=a(434),b=a(435),p=a(408),f=Object(s.a)({root:{display:"none"}}),E=function(e){var t=e.open,a=e.onClose,r=Object(n.useRef)(),o=Object(n.useRef)(),i=f({open:t});return l.a.createElement(d.a,{ref:function(e){r.current=e},open:t,classes:i,transitionDuration:0,"aria-labelledby":"simple-dialog-title","aria-describedby":"simple-dialog-content",PaperProps:{"aria-modal":!0,role:"alertdialog"},onEntered:function(){r.current.style.display="block",o.current.focus()}},l.a.createElement(u.a,{disableTypography:!0},l.a.createElement(p.a,{id:"simple-dialog-title",variant:"h5",component:"h2"},"Title of dialog")),l.a.createElement(m.a,{id:"simple-dialog-content"},l.a.createElement(p.a,null,"Some content to be read by the screen readers on browsers!"),l.a.createElement(p.a,null,"Maybe this line should be read later?")),l.a.createElement(b.a,null,l.a.createElement(c.a,{ref:o,onClick:a},"Cancel"),l.a.createElement(c.a,{onClick:a},"Confirm")))},g=Object(s.a)({root:{top:0,left:0,right:0,bottom:0,position:"fixed",display:"none",background:"rgba(0, 0, 0, 0.5)"},dialog:{margin:"4em",padding:"2em",border:"2px solid black",background:"#fff",textAlign:"left"}}),y=function(e){var t=e.open,a=e.onClose,r=Object(n.useRef)(),o=Object(n.useRef)();Object(n.useEffect)((function(){r.current&&(t?(r.current.style.display="block",o.current.focus()):r.current.style.display=void 0)}),[t]);var i=g();return t&&l.a.createElement("div",{ref:r,className:i.root},l.a.createElement("div",{className:i.dialog,"aria-labelledby":"some-id-title","aria-describedby":"some-id-content",role:"alertdialog","aria-modal":!0},l.a.createElement("div",null,l.a.createElement("h2",{id:"some-id-title"},"Title of dialog")),l.a.createElement("div",{id:"some-id-content"},l.a.createElement("p",null,"Some content to be read by the screen readers on browsers!"),l.a.createElement("p",null,"Maybe this line should be read later?")),l.a.createElement("div",null,l.a.createElement("button",{ref:o,onClick:a},"No"),l.a.createElement("button",{onClick:a},"Yes"))))};var h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(i.a)(o,2),d=s[0],u=s[1];return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("p",null,"Two implementations of ",l.a.createElement("strong",null,"Dialog")," based on"," ",l.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/alertdialog.html"},"standards")," ","provided by WCGA"),l.a.createElement("p",null,"CustomDialog: ",l.a.createElement(c.a,{onClick:function(){return u(!0)}},"Open")),l.a.createElement("p",null,"MUI Dialog: ",l.a.createElement(c.a,{onClick:function(){return r(!0)}},"Open"))),l.a.createElement(E,{open:a,onClose:function(){return r(!1)}}),l.a.createElement(y,{open:d,onClose:function(){return u(!1)}}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.b80780ed.chunk.js.map