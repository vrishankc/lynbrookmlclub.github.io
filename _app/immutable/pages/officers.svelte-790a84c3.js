import{S as Pe,i as ye,s as we,l as O,u as B,a as C,m as S,p as k,v as G,h as L,c as j,q as y,Q as me,b as $,I as P,w as X,f as T,g as ee,d as te,t as U,Y as Re,D as ae,x as re,y as ne,z as ie,A as oe,B as se,C as le}from"../chunks/index-c1c31a0a.js";import{a as he,F as Ie,f as ge}from"../chunks/faEnvelope-94d513d2.js";function _e(i,e,t){const o=i.slice();return o[5]=e[t][0],o[11]=e[t][1],o}function He(i){let e,t;const o=[i[6],{icon:he.faEnvelope}];let f={};for(let a=0;a<o.length;a+=1)f=ae(f,o[a]);return e=new Ie({props:f}),{c(){re(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,c){ie(e,a,c),t=!0},p(a,c){const m=c&64?oe(o,[c&64&&se(a[6]),c&0&&{icon:he.faEnvelope}]):{};e.$set(m)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function Fe(i){let e,t;const o=[i[6],{icon:ge.faGithub}];let f={};for(let a=0;a<o.length;a+=1)f=ae(f,o[a]);return e=new Ie({props:f}),{c(){re(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,c){ie(e,a,c),t=!0},p(a,c){const m=c&64?oe(o,[c&64&&se(a[6]),c&0&&{icon:ge.faGithub}]):{};e.$set(m)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function ve(i){let e,t,o,f,a,c;const m=[Fe,He],s=[];function h(r,l){return r[5]==="github"?0:r[5]=="email"?1:-1}return~(t=h(i))&&(o=s[t]=m[t](i)),{c(){e=O("a"),o&&o.c(),f=C(),this.h()},l(r){e=S(r,"A",{href:!0,class:!0});var l=k(e);o&&o.l(l),f=j(l),l.forEach(L),this.h()},h(){y(e,"href",a=i[11]),y(e,"class","links svelte-1mmg4ww")},m(r,l){$(r,e,l),~t&&s[t].m(e,null),P(e,f),c=!0},p(r,l){let n=t;t=h(r),t===n?~t&&s[t].p(r,l):(o&&(ee(),U(s[n],1,1,()=>{s[n]=null}),te()),~t?(o=s[t],o?o.p(r,l):(o=s[t]=m[t](r),o.c()),T(o,1),o.m(e,f)):o=null),(!c||l&16&&a!==(a=r[11]))&&y(e,"href",a)},i(r){c||(T(o),c=!0)},o(r){U(o),c=!1},d(r){r&&L(e),~t&&s[t].d()}}}function Be(i){let e,t,o,f,a,c,m,s,h,r,l,n,u,d,v,R,A,I,H,D,N,E=Object.entries(i[4]),p=[];for(let g=0;g<E.length;g+=1)p[g]=ve(_e(i,E,g));const V=g=>U(p[g],1,1,()=>{p[g]=null});return{c(){e=O("div"),t=O("div"),o=O("h1"),f=B(i[5]),a=C(),c=O("h2"),m=B(i[1]),s=C(),h=O("p"),r=O("small"),l=B(i[0]),n=C();for(let g=0;g<p.length;g+=1)p[g].c();u=C(),d=O("div"),v=O("p"),R=B(i[2]),A=C(),I=O("img"),this.h()},l(g){e=S(g,"DIV",{class:!0});var b=k(e);t=S(b,"DIV",{class:!0});var _=k(t);o=S(_,"H1",{class:!0});var W=k(o);f=G(W,i[5]),W.forEach(L),a=j(_),c=S(_,"H2",{class:!0});var F=k(c);m=G(F,i[1]),F.forEach(L),s=j(_),h=S(_,"P",{class:!0});var z=k(h);r=S(z,"SMALL",{class:!0});var ce=k(r);l=G(ce,i[0]),ce.forEach(L),n=j(z);for(let x=0;x<p.length;x+=1)p[x].l(z);z.forEach(L),u=j(_),d=S(_,"DIV",{class:!0});var Y=k(d);v=S(Y,"P",{class:!0});var de=k(v);R=G(de,i[2]),de.forEach(L),A=j(Y),I=S(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(L),_.forEach(L),b.forEach(L),this.h()},h(){y(o,"class","main svelte-1mmg4ww"),y(c,"class","title svelte-1mmg4ww"),y(r,"class","short-phrase svelte-1mmg4ww"),y(h,"class","short-phrase svelte-1mmg4ww"),y(v,"class","blurb svelte-1mmg4ww"),me(I.src,H=i[3])||y(I,"src",H),y(I,"alt",D="Photo of "+i[5]+", the "+i[1]+" of the ML Club this year."),y(I,"class","image svelte-1mmg4ww"),y(d,"class","both svelte-1mmg4ww"),y(t,"class","info-side svelte-1mmg4ww"),y(e,"class","content svelte-1mmg4ww")},m(g,b){$(g,e,b),P(e,t),P(t,o),P(o,f),P(t,a),P(t,c),P(c,m),P(t,s),P(t,h),P(h,r),P(r,l),P(h,n);for(let _=0;_<p.length;_+=1)p[_].m(h,null);P(t,u),P(t,d),P(d,v),P(v,R),P(d,A),P(d,I),N=!0},p(g,[b]){if((!N||b&32)&&X(f,g[5]),(!N||b&2)&&X(m,g[1]),(!N||b&1)&&X(l,g[0]),b&80){E=Object.entries(g[4]);let _;for(_=0;_<E.length;_+=1){const W=_e(g,E,_);p[_]?(p[_].p(W,b),T(p[_],1)):(p[_]=ve(W),p[_].c(),T(p[_],1),p[_].m(h,null))}for(ee(),_=E.length;_<p.length;_+=1)V(_);te()}(!N||b&4)&&X(R,g[2]),(!N||b&8&&!me(I.src,H=g[3]))&&y(I,"src",H),(!N||b&34&&D!==(D="Photo of "+g[5]+", the "+g[1]+" of the ML Club this year."))&&y(I,"alt",D)},i(g){if(!N){for(let b=0;b<E.length;b+=1)T(p[b]);N=!0}},o(g){p=p.filter(Boolean);for(let b=0;b<p.length;b+=1)U(p[b]);N=!1},d(g){g&&L(e),Re(p,g)}}}function Ge(i,e,t){let{name:o}=e,{shortPhrase:f}=e,{title:a}=e,{grade:c}=e,{blurb:m}=e,{photoURL:s}=e,{photoLeft:h}=e,{imageright:r}=e,{infoLinks:l}=e;console.log(l);const n={primaryColor:"black",scale:1.3};return console.log(o),i.$$set=u=>{"name"in u&&t(5,o=u.name),"shortPhrase"in u&&t(0,f=u.shortPhrase),"title"in u&&t(1,a=u.title),"grade"in u&&t(7,c=u.grade),"blurb"in u&&t(2,m=u.blurb),"photoURL"in u&&t(3,s=u.photoURL),"photoLeft"in u&&t(8,h=u.photoLeft),"imageright"in u&&t(9,r=u.imageright),"infoLinks"in u&&t(4,l=u.infoLinks)},[f,a,m,s,l,o,n,c,h,r]}class qe extends Pe{constructor(e){super(),ye(this,e,Ge,Be,we,{name:5,shortPhrase:0,title:1,grade:7,blurb:2,photoURL:3,photoLeft:8,imageright:9,infoLinks:4})}}var K={},M={};Object.defineProperty(M,"__esModule",{value:!0});M.FORMAT_PLAIN=M.FORMAT_HTML=M.FORMATS=void 0;var Le="html";M.FORMAT_HTML=Le;var Oe="plain";M.FORMAT_PLAIN=Oe;var Ve=[Le,Oe];M.FORMATS=Ve;var w={};Object.defineProperty(w,"__esModule",{value:!0});w.UNIT_WORDS=w.UNIT_WORD=w.UNIT_SENTENCES=w.UNIT_SENTENCE=w.UNIT_PARAGRAPHS=w.UNIT_PARAGRAPH=w.UNITS=void 0;var Se="words";w.UNIT_WORDS=Se;var Ne="word";w.UNIT_WORD=Ne;var ke="sentences";w.UNIT_SENTENCES=ke;var Ae="sentence";w.UNIT_SENTENCE=Ae;var Te="paragraphs";w.UNIT_PARAGRAPHS=Te;var Ee="paragraph";w.UNIT_PARAGRAPH=Ee;var ze=[Se,Ne,ke,Ae,Te,Ee];w.UNITS=ze;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.WORDS=void 0;var Ye=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];q.WORDS=Ye;var Me={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.LINE_ENDINGS=void 0;var Xe={POSIX:`
`,WIN32:`\r
`};Q.LINE_ENDINGS=Xe;var Ue={},ue={},De={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(f){var a=f.trim();return a.charAt(0).toUpperCase()+a.slice(1)},t=e;i.default=t})(De);var J={exports:{}};(function(i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return!!i.exports},o=t;e.default=o})(J,J.exports);var We={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){var f=!1;try{f=navigator.product==="ReactNative"}catch{f=!1}return f},t=e;i.default=t})(We);var Ce={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.SUPPORTED_PLATFORMS=void 0;var Ke={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};Z.SUPPORTED_PLATFORMS=Ke;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=Z,t=function(){var a=!1;try{a=process.platform===e.SUPPORTED_PLATFORMS.WIN32}catch{a=!1}return a},o=t;i.default=o})(Ce);var fe={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(f)).map(function(a,c){return c})},t=e;i.default=t})(fe);var je={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=t(fe);function t(a){return a&&a.__esModule?a:{default:a}}var o=function(c,m){var s=(0,e.default)(c);return s.map(function(){return m()})},f=o;i.default=f})(je);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"capitalize",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(i,"isNode",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"isReactNative",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(i,"isWindows",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(i,"makeArrayOfLength",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(i,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var e=m(De),t=m(J.exports),o=m(We),f=m(Ce),a=m(fe),c=m(je);function m(s){return s&&s.__esModule?s:{default:s}}})(ue);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=q,t=ue;function o(h,r){if(!(h instanceof r))throw new TypeError("Cannot call a class as a function")}function f(h,r){for(var l=0;l<r.length;l++){var n=r[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(h,n.key,n)}}function a(h,r,l){return r&&f(h.prototype,r),l&&f(h,l),Object.defineProperty(h,"prototype",{writable:!1}),h}function c(h,r,l){return r in h?Object.defineProperty(h,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):h[r]=l,h}var m=function(){function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=r.sentencesPerParagraph,n=l===void 0?{max:7,min:3}:l,u=r.wordsPerSentence,d=u===void 0?{max:15,min:5}:u,v=r.random;r.seed;var R=r.words,A=R===void 0?e.WORDS:R;if(o(this,h),c(this,"sentencesPerParagraph",void 0),c(this,"wordsPerSentence",void 0),c(this,"random",void 0),c(this,"words",void 0),n.min>n.max)throw new Error("Minimum number of sentences per paragraph (".concat(n.min,") cannot exceed maximum (").concat(n.max,")."));if(d.min>d.max)throw new Error("Minimum number of words per sentence (".concat(d.min,") cannot exceed maximum (").concat(d.max,")."));this.sentencesPerParagraph=n,this.words=A,this.wordsPerSentence=d,this.random=v||Math.random}return a(h,[{key:"generateRandomInteger",value:function(l,n){return Math.floor(this.random()*(n-l+1)+l)}},{key:"generateRandomWords",value:function(l){var n=this,u=this.wordsPerSentence,d=u.min,v=u.max,R=l||this.generateRandomInteger(d,v);return(0,t.makeArrayOfLength)(R).reduce(function(A,I){return"".concat(n.pluckRandomWord()," ").concat(A)},"").trim()}},{key:"generateRandomSentence",value:function(l){return"".concat((0,t.capitalize)(this.generateRandomWords(l)),".")}},{key:"generateRandomParagraph",value:function(l){var n=this,u=this.sentencesPerParagraph,d=u.min,v=u.max,R=l||this.generateRandomInteger(d,v);return(0,t.makeArrayOfLength)(R).reduce(function(A,I){return"".concat(n.generateRandomSentence()," ").concat(A)},"").trim()}},{key:"pluckRandomWord",value:function(){var l=0,n=this.words.length-1,u=this.generateRandomInteger(l,n);return this.words[u]}}]),h}(),s=m;i.default=s})(Ue);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=M,t=Q,o=a(Ue),f=ue;function a(n){return n&&n.__esModule?n:{default:n}}function c(n,u){if(!(n instanceof u))throw new TypeError("Cannot call a class as a function")}function m(n,u){for(var d=0;d<u.length;d++){var v=u[d];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(n,v.key,v)}}function s(n,u,d){return u&&m(n.prototype,u),d&&m(n,d),Object.defineProperty(n,"prototype",{writable:!1}),n}function h(n,u,d){return u in n?Object.defineProperty(n,u,{value:d,enumerable:!0,configurable:!0,writable:!0}):n[u]=d,n}var r=function(){function n(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.FORMAT_PLAIN,v=arguments.length>2?arguments[2]:void 0;if(c(this,n),this.format=d,this.suffix=v,h(this,"generator",void 0),e.FORMATS.indexOf(d.toLowerCase())===-1)throw new Error("".concat(d," is an invalid format. Please use ").concat(e.FORMATS.join(" or "),"."));this.generator=new o.default(u)}return s(n,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,f.isReactNative)()&&(0,f.isNode)()&&(0,f.isWindows)()?t.LINE_ENDINGS.WIN32:t.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(d){return this.format===e.FORMAT_HTML?"<p>".concat(d,"</p>"):d}},{key:"formatStrings",value:function(d){var v=this;return d.map(function(R){return v.formatString(R)})}},{key:"generateWords",value:function(d){return this.formatString(this.generator.generateRandomWords(d))}},{key:"generateSentences",value:function(d){return this.formatString(this.generator.generateRandomParagraph(d))}},{key:"generateParagraphs",value:function(d){var v=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,f.makeArrayOfStrings)(d,v)).join(this.getLineEnding())}}]),n}(),l=r;i.default=l})(Me);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"LoremIpsum",{enumerable:!0,get:function(){return f.default}}),i.loremIpsum=void 0;var e=M,t=w,o=q,f=a(Me);function a(m){return m&&m.__esModule?m:{default:m}}var c=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=s.count,r=h===void 0?1:h,l=s.format,n=l===void 0?e.FORMAT_PLAIN:l,u=s.paragraphLowerBound,d=u===void 0?3:u,v=s.paragraphUpperBound,R=v===void 0?7:v,A=s.random,I=s.sentenceLowerBound,H=I===void 0?5:I,D=s.sentenceUpperBound,N=D===void 0?15:D,E=s.units,p=E===void 0?t.UNIT_SENTENCES:E,V=s.words,g=V===void 0?o.WORDS:V,b=s.suffix,_=b===void 0?"":b,W={random:A,sentencesPerParagraph:{max:R,min:d},words:g,wordsPerSentence:{max:N,min:H}},F=new f.default(W,n,_);switch(p){case t.UNIT_PARAGRAPHS:case t.UNIT_PARAGRAPH:return F.generateParagraphs(r);case t.UNIT_SENTENCES:case t.UNIT_SENTENCE:return F.generateSentences(r);case t.UNIT_WORDS:case t.UNIT_WORD:return F.generateWords(r);default:return""}};i.loremIpsum=c})(K);function pe(i,e,t){const o=i.slice();return o[3]=e[t],o[5]=t,o}function be(i){let e,t;const o=[i[3],{imageright:!0},{photoLeft:!0}];let f={};for(let a=0;a<o.length;a+=1)f=ae(f,o[a]);return e=new qe({props:f}),{c(){re(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,c){ie(e,a,c),t=!0},p(a,c){const m=c&1?oe(o,[se(a[3]),o[1],o[2]]):{};e.$set(m)},i(a){t||(T(e.$$.fragment,a),t=!0)},o(a){U(e.$$.fragment,a),t=!1},d(a){le(e,a)}}}function Qe(i){let e,t,o,f,a,c,m=i[0],s=[];for(let r=0;r<m.length;r+=1)s[r]=be(pe(i,m,r));const h=r=>U(s[r],1,1,()=>{s[r]=null});return{c(){e=O("body"),t=O("h1"),o=B("Officer Team 2022"),f=C(),a=O("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=S(r,"BODY",{});var l=k(e);t=S(l,"H1",{class:!0});var n=k(t);o=G(n,"Officer Team 2022"),n.forEach(L),f=j(l),a=S(l,"DIV",{class:!0});var u=k(a);for(let d=0;d<s.length;d+=1)s[d].l(u);u.forEach(L),l.forEach(L),this.h()},h(){y(t,"class","officer-header svelte-1ebonly"),y(a,"class","officers-list svelte-1ebonly")},m(r,l){$(r,e,l),P(e,t),P(t,o),P(e,f),P(e,a);for(let n=0;n<s.length;n+=1)s[n].m(a,null);c=!0},p(r,[l]){if(l&1){m=r[0];let n;for(n=0;n<m.length;n+=1){const u=pe(r,m,n);s[n]?(s[n].p(u,l),T(s[n],1)):(s[n]=be(u),s[n].c(),T(s[n],1),s[n].m(a,null))}for(ee(),n=m.length;n<s.length;n+=1)h(n);te()}},i(r){if(!c){for(let l=0;l<m.length;l+=1)T(s[l]);c=!0}},o(r){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)U(s[l]);c=!1},d(r){r&&L(e),Re(s,r)}}}function Ze(i){const e=K.loremIpsum()+K.loremIpsum()+K.loremIpsum(),t=[{name:"Cindy Chou",shortPhrase:"it is what it is",title:"President",grade:12,blurb:"Hi I'm Cindy! I joined ML club as a sophomore and became interested in the applications of machine learning in the medical field. I'm super excited to serve as the president this year, and some of my hobbies include walking, listening to Yoyo Ma's cello playing, trying new cuisines, and watching food Youtube shorts.",photoURL:"/cindy.png",infoLinks:{email:"cindychou8@gmail.com"}},{name:"Anish Lakkapragada",shortPhrase:"anish the chad",title:"Co-VP",grade:11,blurb:"Hey there! I'm Anish. Anish is a clumsy junior who still doesn't know how to center a div in HTML. He joined ML Club as a freshman and is excited to be an officer for two years. Aside from ML, he loves to work on websites and backends. Beyond coding, he enjoys photography and taking naps.",photoURL:"https://microsites.databricks.com/sites/default/files/media/images/dataaisummit_speaker/databricks_headshot_1652326493620001EFzD.jpg",infoLinks:{github:"anish-lakkapragada",email:"anish.lakkapragada@gmail.com"}},{name:"Marc Melikyan",shortPhrase:"enjoyer of ",title:"Co-VP",grade:11,blurb:e,photoURL:"https://petitelamb65.qoom.space/Pellis/images/Marc.png",infoLinks:{github:"novak-99",email:"marc.melikyan@gmail.com"}},{name:"Agnik Banerjee",shortPhrase:"i like trains and turtle",title:"Secretary",grade:12,blurb:"Hi guys! I'm Agnik, and am excited to be Secretary this year. One of my big interests in ML at the moment is privacy-preserving AI and deploying healthcare-based models in edge environments. In my free time, I love playing tennis, listening to music, and hanging out with my dog.",photoURL:"https://ca.slack-edge.com/E7SAV7LAD-U02403V7Z6K-2c0edfdb104a-512",infoLinks:{email:"agnik42@gmail.com"}},{name:"Lillian Yu",shortPhrase:"if it works, don't change it",title:"Treasurer",grade:12,blurb:"Hi there! I'm Lillian, and I am beyond thrilled to serve as the treasurer this year. I started developing an interest in ML my freshman year and I have been a passionate ML enthusiast eversince. Currently, I am conducting research in computational neurobiology using ML applications. Some fun facts about me are that I enjoy running, listening to cdrama OSTs, sketching and I have a cat named Leo.",photoURL:"/lillian.png",infoLinks:{email:"leeleeian89@gmail.com"}},{name:"Vipra Bindal",shortPhrase:"we need one",title:"Public Relations",grade:11,blurb:"Hey, I\u2019m Vipra (your PR officer this year)! I joined ML Club as a freshman and am enthralled with ML\u2019s limitless applications. In my free time, I like reading about new ML applications, watching political news, and going on walks. So excited for everything in store this year!",photoURL:"/vipra.png",infoLinks:{email:"viprabind@gmail.com"}}],o={email:"mailto:",github:"https://github.com/"};for(const f of t){const{infoLinks:a}=f;for(const[c,m]of Object.entries(a)){const s=o[c];f.infoLinks[c]=s+f.infoLinks[c]}}return console.log(t),[t]}class $e extends Pe{constructor(e){super(),ye(this,e,Ze,Qe,we,{})}}export{$e as default};
