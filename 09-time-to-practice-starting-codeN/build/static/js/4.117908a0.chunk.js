(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={comments:"Comments_comments__wpHMJ"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2qaGT",loading:"NewCommentForm_loading___i4zT",control:"NewCommentForm_control__2IhTx",actions:"NewCommentForm_actions__2tBFm"}},49:function(e,t,c){e.exports={item:"CommentItem_item__380ek"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__3fqF9"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__3uHvj"}},56:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(38),m=c(39),r=c(40),j=c(47),i=c.n(j),d=c(48),u=c.n(d),l=c(14),b=c(1),x=function(e){var t=Object(n.useRef)(),c=Object(a.a)(m.a),s=c.sendRequest,o=c.status,r=c.error,j=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||r||j()}),[o,r,j]);var i=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:i,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:i,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],o=t[1],j=Object(s.j)().quoteId,d=Object(a.a)(m.c),u=d.sendRequest,O=d.status,h=d.data;Object(n.useEffect)((function(){u(j)}),[j,u]);var f,p=Object(n.useCallback)((function(){u(j)}),[u,j]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})})),"completed"===O&&h&&h.length>0&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No comments yet"})),Object(b.jsxs)("section",{className:i.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:j,onAddedComment:p}),f]})},C=c(51),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(a.a)(m.e,!0),r=c.sendRequest,j=c.status,i=c.data,d=c.error;return Object(n.useEffect)((function(){r(t)}),[r,t]),"pending"===j?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}):d?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)("p",{children:d})}):i.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{text:i.text,author:i.author}),Object(b.jsx)(s.c,{path:e.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"quote not found"})}}}]);
//# sourceMappingURL=4.117908a0.chunk.js.map