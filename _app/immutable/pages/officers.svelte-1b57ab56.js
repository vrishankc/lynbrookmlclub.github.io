import{S as re,i as ae,s as ne,l as S,u as k,a as W,m as b,p as I,v as D,h as N,c as x,q as R,X as K,b as ie,I as v,w as B,n as $,f as G,d as Re,t as Y,Y as ye,D as Oe,x as Ne,y as Se,z as be,A as we,B as Ie,C as Ae,g as Te}from"../chunks/index-0d9b1cd4.js";function Le(a){let t,n,f,c,s,m,d,o,h,i,r,e,u,l,g,y,_,A,L;return{c(){t=S("div"),n=S("div"),f=S("h1"),c=k(a[0]),s=W(),m=S("h2"),d=k(a[2]),o=W(),h=S("p"),i=S("small"),r=k(a[1]),e=W(),u=S("div"),l=S("p"),g=k(a[3]),y=W(),_=S("img"),this.h()},l(p){t=b(p,"DIV",{class:!0});var O=I(t);n=b(O,"DIV",{class:!0});var w=I(n);f=b(w,"H1",{class:!0});var j=I(f);c=D(j,a[0]),j.forEach(N),s=x(w),m=b(w,"H2",{class:!0});var M=I(m);d=D(M,a[2]),M.forEach(N),o=x(w),h=b(w,"P",{class:!0});var F=I(h);i=b(F,"SMALL",{class:!0});var U=I(i);r=D(U,a[1]),U.forEach(N),F.forEach(N),e=x(w),u=b(w,"DIV",{class:!0});var E=I(u);l=b(E,"P",{class:!0});var H=I(l);g=D(H,a[3]),H.forEach(N),y=x(E),_=b(E,"IMG",{src:!0,alt:!0,class:!0}),E.forEach(N),w.forEach(N),O.forEach(N),this.h()},h(){R(f,"class","main svelte-agx19x"),R(m,"class","title svelte-agx19x"),R(i,"class","short-phrase svelte-agx19x"),R(h,"class","short-phrase svelte-agx19x"),R(l,"class","blurb svelte-agx19x"),K(_.src,A=a[4])||R(_,"src",A),R(_,"alt",L="Photo of "+a[0]+", the "+a[2]+" of the ML Club this year."),R(_,"class","image svelte-agx19x"),R(u,"class","both svelte-agx19x"),R(n,"class","info-side svelte-agx19x"),R(t,"class","content svelte-agx19x")},m(p,O){ie(p,t,O),v(t,n),v(n,f),v(f,c),v(n,s),v(n,m),v(m,d),v(n,o),v(n,h),v(h,i),v(i,r),v(n,e),v(n,u),v(u,l),v(l,g),v(u,y),v(u,_)},p(p,[O]){O&1&&B(c,p[0]),O&4&&B(d,p[2]),O&2&&B(r,p[1]),O&8&&B(g,p[3]),O&16&&!K(_.src,A=p[4])&&R(_,"src",A),O&5&&L!==(L="Photo of "+p[0]+", the "+p[2]+" of the ML Club this year.")&&R(_,"alt",L)},i:$,o:$,d(p){p&&N(t)}}}function Ee(a,t,n){let{name:f}=t,{shortPhrase:c}=t,{title:s}=t,{grade:m}=t,{blurb:d}=t,{photoURL:o}=t,{photoLeft:h}=t,{imageright:i}=t;return console.log(f),a.$$set=r=>{"name"in r&&n(0,f=r.name),"shortPhrase"in r&&n(1,c=r.shortPhrase),"title"in r&&n(2,s=r.title),"grade"in r&&n(5,m=r.grade),"blurb"in r&&n(3,d=r.blurb),"photoURL"in r&&n(4,o=r.photoURL),"photoLeft"in r&&n(6,h=r.photoLeft),"imageright"in r&&n(7,i=r.imageright)},[f,c,s,d,o,m,h,i]}class Me extends re{constructor(t){super(),ae(this,t,Ee,Le,ne,{name:0,shortPhrase:1,title:2,grade:5,blurb:3,photoURL:4,photoLeft:6,imageright:7})}}var q={},T={};Object.defineProperty(T,"__esModule",{value:!0});T.FORMAT_PLAIN=T.FORMAT_HTML=T.FORMATS=void 0;var oe="html";T.FORMAT_HTML=oe;var se="plain";T.FORMAT_PLAIN=se;var Ue=[oe,se];T.FORMATS=Ue;var P={};Object.defineProperty(P,"__esModule",{value:!0});P.UNIT_WORDS=P.UNIT_WORD=P.UNIT_SENTENCES=P.UNIT_SENTENCE=P.UNIT_PARAGRAPHS=P.UNIT_PARAGRAPH=P.UNITS=void 0;var ue="words";P.UNIT_WORDS=ue;var le="word";P.UNIT_WORD=le;var fe="sentences";P.UNIT_SENTENCES=fe;var ce="sentence";P.UNIT_SENTENCE=ce;var de="paragraphs";P.UNIT_PARAGRAPHS=de;var me="paragraph";P.UNIT_PARAGRAPH=me;var ke=[ue,le,fe,ce,de,me];P.UNITS=ke;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.WORDS=void 0;var We=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];C.WORDS=We;var he={},z={};Object.defineProperty(z,"__esModule",{value:!0});z.LINE_ENDINGS=void 0;var De={POSIX:`
`,WIN32:`\r
`};z.LINE_ENDINGS=De;var ge={},Q={},ve={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(c){var s=c.trim();return s.charAt(0).toUpperCase()+s.slice(1)},n=t;a.default=n})(ve);var Z={exports:{}};(function(a,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return!!a.exports},f=n;t.default=f})(Z,Z.exports);var _e={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){var c=!1;try{c=navigator.product==="ReactNative"}catch{c=!1}return c},n=t;a.default=n})(_e);var pe={},V={};Object.defineProperty(V,"__esModule",{value:!0});V.SUPPORTED_PLATFORMS=void 0;var xe={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};V.SUPPORTED_PLATFORMS=xe;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=V,n=function(){var s=!1;try{s=process.platform===t.SUPPORTED_PLATFORMS.WIN32}catch{s=!1}return s},f=n;a.default=f})(pe);var J={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(c)).map(function(s,m){return m})},n=t;a.default=n})(J);var Pe={};(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n(J);function n(s){return s&&s.__esModule?s:{default:s}}var f=function(m,d){var o=(0,t.default)(m);return o.map(function(){return d()})},c=f;a.default=c})(Pe);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"capitalize",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(a,"isNode",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(a,"isReactNative",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(a,"isWindows",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(a,"makeArrayOfLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(a,"makeArrayOfStrings",{enumerable:!0,get:function(){return m.default}});var t=d(ve),n=d(Z.exports),f=d(_e),c=d(pe),s=d(J),m=d(Pe);function d(o){return o&&o.__esModule?o:{default:o}}})(Q);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=C,n=Q;function f(h,i){if(!(h instanceof i))throw new TypeError("Cannot call a class as a function")}function c(h,i){for(var r=0;r<i.length;r++){var e=i[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(h,e.key,e)}}function s(h,i,r){return i&&c(h.prototype,i),r&&c(h,r),Object.defineProperty(h,"prototype",{writable:!1}),h}function m(h,i,r){return i in h?Object.defineProperty(h,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):h[i]=r,h}var d=function(){function h(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=i.sentencesPerParagraph,e=r===void 0?{max:7,min:3}:r,u=i.wordsPerSentence,l=u===void 0?{max:15,min:5}:u,g=i.random;i.seed;var y=i.words,_=y===void 0?t.WORDS:y;if(f(this,h),m(this,"sentencesPerParagraph",void 0),m(this,"wordsPerSentence",void 0),m(this,"random",void 0),m(this,"words",void 0),e.min>e.max)throw new Error("Minimum number of sentences per paragraph (".concat(e.min,") cannot exceed maximum (").concat(e.max,")."));if(l.min>l.max)throw new Error("Minimum number of words per sentence (".concat(l.min,") cannot exceed maximum (").concat(l.max,")."));this.sentencesPerParagraph=e,this.words=_,this.wordsPerSentence=l,this.random=g||Math.random}return s(h,[{key:"generateRandomInteger",value:function(r,e){return Math.floor(this.random()*(e-r+1)+r)}},{key:"generateRandomWords",value:function(r){var e=this,u=this.wordsPerSentence,l=u.min,g=u.max,y=r||this.generateRandomInteger(l,g);return(0,n.makeArrayOfLength)(y).reduce(function(_,A){return"".concat(e.pluckRandomWord()," ").concat(_)},"").trim()}},{key:"generateRandomSentence",value:function(r){return"".concat((0,n.capitalize)(this.generateRandomWords(r)),".")}},{key:"generateRandomParagraph",value:function(r){var e=this,u=this.sentencesPerParagraph,l=u.min,g=u.max,y=r||this.generateRandomInteger(l,g);return(0,n.makeArrayOfLength)(y).reduce(function(_,A){return"".concat(e.generateRandomSentence()," ").concat(_)},"").trim()}},{key:"pluckRandomWord",value:function(){var r=0,e=this.words.length-1,u=this.generateRandomInteger(r,e);return this.words[u]}}]),h}(),o=d;a.default=o})(ge);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=T,n=z,f=s(ge),c=Q;function s(e){return e&&e.__esModule?e:{default:e}}function m(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}function d(e,u){for(var l=0;l<u.length;l++){var g=u[l];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(e,g.key,g)}}function o(e,u,l){return u&&d(e.prototype,u),l&&d(e,l),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,u,l){return u in e?Object.defineProperty(e,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[u]=l,e}var i=function(){function e(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.FORMAT_PLAIN,g=arguments.length>2?arguments[2]:void 0;if(m(this,e),this.format=l,this.suffix=g,h(this,"generator",void 0),t.FORMATS.indexOf(l.toLowerCase())===-1)throw new Error("".concat(l," is an invalid format. Please use ").concat(t.FORMATS.join(" or "),"."));this.generator=new f.default(u)}return o(e,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,c.isReactNative)()&&(0,c.isNode)()&&(0,c.isWindows)()?n.LINE_ENDINGS.WIN32:n.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(l){return this.format===t.FORMAT_HTML?"<p>".concat(l,"</p>"):l}},{key:"formatStrings",value:function(l){var g=this;return l.map(function(y){return g.formatString(y)})}},{key:"generateWords",value:function(l){return this.formatString(this.generator.generateRandomWords(l))}},{key:"generateSentences",value:function(l){return this.formatString(this.generator.generateRandomParagraph(l))}},{key:"generateParagraphs",value:function(l){var g=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,c.makeArrayOfStrings)(l,g)).join(this.getLineEnding())}}]),e}(),r=i;a.default=r})(he);(function(a){Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"LoremIpsum",{enumerable:!0,get:function(){return c.default}}),a.loremIpsum=void 0;var t=T,n=P,f=C,c=s(he);function s(d){return d&&d.__esModule?d:{default:d}}var m=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=o.count,i=h===void 0?1:h,r=o.format,e=r===void 0?t.FORMAT_PLAIN:r,u=o.paragraphLowerBound,l=u===void 0?3:u,g=o.paragraphUpperBound,y=g===void 0?7:g,_=o.random,A=o.sentenceLowerBound,L=A===void 0?5:A,p=o.sentenceUpperBound,O=p===void 0?15:p,w=o.units,j=w===void 0?n.UNIT_SENTENCES:w,M=o.words,F=M===void 0?f.WORDS:M,U=o.suffix,E=U===void 0?"":U,H={random:_,sentencesPerParagraph:{max:y,min:l},words:F,wordsPerSentence:{max:O,min:L}},X=new c.default(H,e,E);switch(j){case n.UNIT_PARAGRAPHS:case n.UNIT_PARAGRAPH:return X.generateParagraphs(i);case n.UNIT_SENTENCES:case n.UNIT_SENTENCE:return X.generateSentences(i);case n.UNIT_WORDS:case n.UNIT_WORD:return X.generateWords(i);default:return""}};a.loremIpsum=m})(q);function ee(a,t,n){const f=a.slice();return f[2]=t[n],f[4]=n,f}function te(a){let t,n;const f=[a[2],{imageright:!0},{photoLeft:!0}];let c={};for(let s=0;s<f.length;s+=1)c=Oe(c,f[s]);return t=new Me({props:c}),{c(){Ne(t.$$.fragment)},l(s){Se(t.$$.fragment,s)},m(s,m){be(t,s,m),n=!0},p(s,m){const d=m&1?we(f,[Ie(s[2]),f[1],f[2]]):{};t.$set(d)},i(s){n||(G(t.$$.fragment,s),n=!0)},o(s){Y(t.$$.fragment,s),n=!1},d(s){Ae(t,s)}}}function Ce(a){let t,n,f,c,s,m,d=a[0],o=[];for(let i=0;i<d.length;i+=1)o[i]=te(ee(a,d,i));const h=i=>Y(o[i],1,1,()=>{o[i]=null});return{c(){t=S("body"),n=S("h1"),f=k("Officer Team 2022"),c=W(),s=S("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){t=b(i,"BODY",{});var r=I(t);n=b(r,"H1",{class:!0});var e=I(n);f=D(e,"Officer Team 2022"),e.forEach(N),c=x(r),s=b(r,"DIV",{class:!0});var u=I(s);for(let l=0;l<o.length;l+=1)o[l].l(u);u.forEach(N),r.forEach(N),this.h()},h(){R(n,"class","officer-header svelte-1ebonly"),R(s,"class","officers-list svelte-1ebonly")},m(i,r){ie(i,t,r),v(t,n),v(n,f),v(t,c),v(t,s);for(let e=0;e<o.length;e+=1)o[e].m(s,null);m=!0},p(i,[r]){if(r&1){d=i[0];let e;for(e=0;e<d.length;e+=1){const u=ee(i,d,e);o[e]?(o[e].p(u,r),G(o[e],1)):(o[e]=te(u),o[e].c(),G(o[e],1),o[e].m(s,null))}for(Te(),e=d.length;e<o.length;e+=1)h(e);Re()}},i(i){if(!m){for(let r=0;r<d.length;r+=1)G(o[r]);m=!0}},o(i){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)Y(o[r]);m=!1},d(i){i&&N(t),ye(o,i)}}}function je(a){const t=q.loremIpsum()+q.loremIpsum()+q.loremIpsum();return[[{name:"Cindy Chou",shortPhrase:"it is what it is",title:"President",grade:12,blurb:"Hi I'm Cindy! I joined ML club as a sophomore and became interested in the applications of machine learning in the medical field. I'm super excited to serve as the president this year, and some of my hobbies include walking, listening to Yoyo Ma's cello playing, trying new cuisines, and watching food Youtube shorts.",photoURL:"https://drive.google.com/uc?export=view&id=17Fkt-vaPBc2IVPW6c4xsTOb5_zvwMrZ-"},{name:"Anish Lakkapragada",shortPhrase:"anish the chad",title:"Co-VP",grade:11,blurb:"Anish is a clumsy junior who still doesn\u2019t know how to center a div in HTML. He joined ML Club as a freshman and is excited to be an officer for two years. Aside from ML, he loves to work on websites and backends. Beyond coding, he enjoys photography and taking naps.",photoURL:"https://microsites.databricks.com/sites/default/files/media/images/dataaisummit_speaker/databricks_headshot_1652326493620001EFzD.jpg"},{name:"Marc Melyikan",shortPhrase:"enjoyer of ",title:"Co-VP",grade:11,blurb:t,photoURL:"https://www.poynter.org/wp-content/uploads/2022/02/AP_22036722864852-1.jpg"},{name:"Agnik",shortPhrase:"yeat he dont have one",title:"Secretary",grade:12,blurb:t,photoURL:"https://i.imgur.com/XqQZQZq.jpg"}]]}class He extends re{constructor(t){super(),ae(this,t,je,Ce,ne,{})}}export{He as default};
