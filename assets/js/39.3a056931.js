(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{557:function(n,t,e){"use strict";e.r(t);e(32),e(119),e(217),e(83),e(435),e(9),e(439),e(30),e(420),e(40);var o=e(385),c=e(476),i=e.n(c),r=(e(477),e(405)),a=e.n(r),l=(e(407),{components:Object(o.a)({},i.a.name,i.a),data:function(){return this.theme=a.a,{text:"\n# heading 1\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n## heading 2\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n### heading 3\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n## heading 2\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n\n### heading 3\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\ncontentcontentcontent\n",titles:[]}},mounted:function(){var n=this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6"),t=Array.from(n).filter((function(n){return!!n.innerText.trim()}));if(t.length){var e=Array.from(new Set(t.map((function(n){return n.tagName})))).sort();this.titles=t.map((function(n){return{title:n.innerText,lineIndex:n.getAttribute("data-v-md-line"),indent:e.indexOf(n.tagName)}}))}else this.titles=[]},methods:{handleAnchorClick:function(n){var t=this.$refs.preview,e=n.lineIndex,o=t.$el.querySelector('[data-v-md-line="'.concat(e,'"]'));o&&t.scrollToTarget({target:o,scrollContainer:window,top:60})}}}),s=e(54),d=Object(s.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._l(n.titles,(function(t){return e("div",{style:{padding:"10px 0 10px "+20*t.indent+"px"},on:{click:function(e){return n.handleAnchorClick(t)}}},[e("a",{staticStyle:{cursor:"pointer"}},[n._v(n._s(t.title))])])})),n._v(" "),e("v-md-preview",{ref:"preview",attrs:{text:n.text,theme:n.theme}})],2)}),[],!1,null,null,null);t.default=d.exports}}]);