(this["webpackJsonpmissao-newton-react-boilerplate"]=this["webpackJsonpmissao-newton-react-boilerplate"]||[]).push([[0],{121:function(e,t,n){e.exports=n(261)},126:function(e,t,n){},261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),i=(n(126),n(28)),l=n(104),s=n.n(l),u=n(67),p=n(11),d=n(118),h=n.n(d),b=n(19),m=n(20),f=n(23),O=n(21),j=n(24),g=n(50),v=n(108),y=n.n(v),E=n(109),k=n.n(E),w=n(65),x=n.n(w),C=n(70),T=n.n(C),D=n(35),P=n(110),I=n.n(P),S=n(111),N=n.n(S),R=n(64),A=n.n(R),B=n(42),L=n(36);function W(){var e=Object(g.a)(["\n  display:flex;\n  justify-content:center;\n  vertical-align:middle;\n  margin-top: 10vh;\n"]);return W=function(){return e},e}var J=B.a.div(W()),M=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={inputTodo:""},n.handleChange=function(e){return function(t){n.setState(Object(i.a)({},e,t.target.value))}},n.onClickEnviar=function(){n.props.addTodo(n.state.inputTodo),console.log(n.state.inputTodo)},n}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(y.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(x.a,{variant:"h6",color:"inherit",noWrap:!0},"Tasks 4U"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(I.a,null)),r.a.createElement(T.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput}})))),r.a.createElement(J,null,r.a.createElement(A.a,{className:e.root,elevation:1},r.a.createElement(T.a,{className:e.inputInput,placeholder:"Deseja lembrar de algo?",onChange:this.handleChange("inputTodo")}),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:this.onClickEnviar,className:e.button},"Salvar"))))}}]),t}(r.a.Component),_=Object(L.b)(null,(function(e){return{addTodo:function(t){return e(function(e){return{type:"ADD_TODO",payload:{text:e}}}(t))}}}))(Object(p.withStyles)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400,alignSeld:"center"},search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),button:{margin:e.spacing.unit},searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(i.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:400}),sectionDesktop:Object(i.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})}}))(M)),G=n(51),U=n(112),q=n.n(U),z=n(115),F=n.n(z),H=n(114),K=n.n(H),Q=n(113),V=n.n(Q),X=n(49),Y=n.n(X),Z=n(116),$=n.n(Z),ee=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={checked:[0]},n.handleToggle=function(e){return function(){var t=n.state.checked,a=t.indexOf(e),r=Object(G.a)(t);-1===a?r.push(e):r.splice(a,1),n.setState({checked:r})}},n}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(q.a,{role:void 0,dense:!0,button:!0,onClick:this.handleToggle()},r.a.createElement(V.a,{checked:-1!==this.state.checked.indexOf(),tabIndex:-1,disableRipple:!0}),r.a.createElement(K.a,null," ",this.props.todo.text),r.a.createElement(F.a,null,r.a.createElement(Y.a,null,r.a.createElement($.a,null))))}}]),t}(r.a.Component),te=Object(p.withStyles)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}))(ee),ne=n(66),ae=n.n(ne);function re(){var e=Object(g.a)(["\n  display:flex;\n  justify-content:center;\n  vertical-align:middle;\n  margin-top:10px;\n"]);return re=function(){return e},e}var ce=B.a.div(re()),oe=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"super",value:function(e){this.state={checked:[0]}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ce,null,r.a.createElement(ae.a,{className:e.root},this.props.todos.map((function(e){return r.a.createElement(te,{todo:e})}))))}}]),t}(r.a.Component);var ie=Object(L.b)((function(e){return{todos:e.todos}}))(Object(p.withStyles)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}))(oe)),le=function(e){function t(e){return Object(b.a)(this,t),Object(f.a)(this,Object(O.a)(t).call(this,e))}return Object(j.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(ie,null))}}]),t}(r.a.Component),se=n(22),ue=[{id:1,text:"teste1"},{id:2,text:"teste2"}],pe=Object(se.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"ADD_TODO":var n={text:t.payload.text,id:Date.now()};return[n].concat(Object(G.a)(e));default:return e}}}),de=n(117);function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var be=Object(p.createGenerateClassName)(),me=Object(u.create)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(p.jssPreset)(),{insertionPoint:document.getElementById("jss-insertion-point")})),fe=Object(p.createMuiTheme)(),Oe=Object(se.d)(pe,Object(se.a)(de.a));var je=function(){return r.a.createElement(s.a,{jss:me,generateClassName:be},r.a.createElement(p.MuiThemeProvider,{theme:fe},r.a.createElement(h.a,null),r.a.createElement(L.a,{store:Oe},r.a.createElement(le,null))))};o.a.render(r.a.createElement(je,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.f3c86e7d.chunk.js.map