(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,n){},235:function(e,a,n){e.exports=n(348)},348:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n.n(t),i=n(9),o=n.n(i);n(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(355),c=n(358),u=n(232),s=n(16),m=n(17);function d(){var e=Object(s.a)(["\n  width: 50%;\n  margin: 10px;\n  padding: 5px;\n  line-height: 75px;\n  font-size: 30px;\n  background :#FFFF;\n"]);return d=function(){return e},e}function p(){var e=Object(s.a)([" \n  display: flex; \n  background : #F0F0DF;\n"]);return p=function(){return e},e}function h(){var e=Object(s.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: white;\n  border: none;\n  border-radius: 3px;\n  width : 250px;\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return g=function(){return e},e}function f(){var e=Object(s.a)(["\n  font-size: 1.5rem;\n  text-align: left;\n  color: #FF8F00;\n  padding: 0.5px;\n  margin: 2px 2px 25px 2px;\n"]);return f=function(){return e},e}var v=m.a.h1(f()),b=(m.a.button(g(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),m.a.input(h(),function(e){return e.inputColor||"palevioletred"}),m.a.div(p()),m.a.div(d()),function(){return r.a.createElement("h1",null,"Not found")}),E=n(353),y=function(){return r.a.createElement(E.a,{title:"Crea un diario de tus viajes"},r.a.createElement(E.a,{type:"inner",style:{width:300},title:"Registra tus viajes",cover:r.a.createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}),extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Registra tus viajes, las fechas y los lugares que visitados."),r.a.createElement(E.a,{style:{marginTop:16,width:450},type:"inner",cover:r.a.createElement("img",{alt:"example",src:"https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-545676.jpg"}),title:"Enumera tus proximos viajes",extra:r.a.createElement("a",{href:"https://ant.design/components/list/"},"More")},"Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares."))},j=n(19),k=n(20),w=n(45),O=n(21),S=n(46),C=(n(139),n(231)),L=n(352),x=n(351),F=n(166),I=n(87),M=n.n(I);var B=Object(F.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})(function(e){var a=e.classes;return r.a.createElement("div",null,r.a.createElement(M.a,{className:a.button},"TIMELINE"),r.a.createElement(M.a,{color:"primary",className:a.button},"Ordernar"),r.a.createElement("input",{accept:"image/*",className:a.input,id:"flat-button-file",multiple:!0,type:"file"}),r.a.createElement("label",{htmlFor:"flat-button-file"},r.a.createElement(M.a,{component:"span",className:a.button},"Upload")))}),N=n(356),z=n(42),A=function(e){function a(e){return Object(j.a)(this,a),Object(w.a)(this,Object(O.a)(a).call(this,e))}return Object(S.a)(a,e),Object(k.a)(a,[{key:"convertirFecha",value:function(e){if("string"==typeof e){var a=new Date(e),n=a.getFullYear();return a.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(n.toString())}return e}},{key:"render",value:function(){var e=this;console.log(this);var a=this.props.data.length-1;return r.a.createElement("div",{style:{marginLeft:10}},r.a.createElement(N.a,null,this.props.data.map(function(n,t){return e.PintarSegunIndice(t,n,a)})))}},{key:"PintarSegunIndice",value:function(e,a,n){return 0===e?r.a.createElement(N.a.Item,{dot:r.a.createElement(z.a,{type:"trophy",style:{fontSize:"26px"}}),color:"red"},"Tu viaje a ",a.pais," en  ",this.convertirFecha(a.annoDeLaVisita)):e===n?r.a.createElement(N.a.Item,{dot:r.a.createElement(z.a,{type:"compass",style:{fontSize:"26px"}}),color:"red"},"Tu viaje a ",a.pais," en  ",this.convertirFecha(a.annoDeLaVisita)):r.a.createElement(N.a.Item,{key:e+"."+a.idPais,color:"green"},"Tu viaje a ",a.pais," en  ",this.convertirFecha(a.annoDeLaVisita))}}]),a}(r.a.Component),T=C.a.TabPane,P=function(e){function a(e){var n;return Object(j.a)(this,a),(n=Object(w.a)(this,Object(O.a)(a).call(this,e))).state={initLoading:!0,data:[],error:""},n}return Object(S.a)(a,e),Object(k.a)(a,[{key:"eliminarPaisesDuplicados",value:function(e){var a=new Set,n=[];return e.forEach(function(e){!1===a.has(e.idPais)&&n.push(e),a.add(e.idPais)}),n}},{key:"componentDidCatch",value:function(e,a){console.log("componentDidCatch"),console.log(a.componentStack),console.log(e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips").then(function(e){return e.json()}).then(function(a){e.setState({initLoading:!1,data:a})}).catch(function(a){return e.setState({error:a.message})})}},{key:"render",value:function(){var e=this.state,a=e.initLoading,n=e.error,t=e.data,i=this.eliminarPaisesDuplicados(t);return n?r.a.createElement("div",null,"Lo sentimos algo salio mal:  ",n.message,"  "):r.a.createElement(C.a,{defaultActiveKey:"1",onChange:this.callback},r.a.createElement(T,{tab:"Historia de tus viajes",key:"1"},r.a.createElement(v,null,"El cronograma de tus viajes."),r.a.createElement(A,{data:t})),r.a.createElement(T,{tab:"Lista pa\xedses visitados",key:"2"},r.a.createElement(B,null),r.a.createElement(v,null,"Has visitado ",i.length," pa\xedses"),r.a.createElement(L.a,{style:{marginLeft:10},itemLayout:"horizontal",loading:a,dataSource:i,renderItem:function(e){return r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Item.Meta,{avatar:r.a.createElement(x.a,{src:e.urlFlag}),title:r.a.createElement("a",{href:"https://www.google.com/search?q="+e.pais,target:"_blank",rel:"noopener noreferrer"},e.pais)}))}})))}}]),a}(r.a.Component),D=n(72),G=n(357),U=(n(228),n(54)),R=function(e){function a(e){var n;return Object(j.a)(this,a),(n=Object(w.a)(this,Object(O.a)(a).call(this,e))).toggle=n.toggle.bind(Object(D.a)(Object(D.a)(n))),n.state={isOpen:!1},n}return Object(S.a)(a,e),Object(k.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.e,{color:"light",light:!0,expand:"md"},r.a.createElement(U.f,{href:"/"},"Mis pa\xedses por el mundo"),r.a.createElement(U.g,{onClick:this.toggle}),r.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(U.b,{className:"ml-auto",navbar:!0},r.a.createElement(U.c,null,r.a.createElement(U.d,{exact:!0,to:"/",className:"nav-link",activeclassname:"active",tag:G.a},"Home")),r.a.createElement(U.c,null,r.a.createElement(U.d,{actvieclassname:"active",to:"/marcas",tag:G.a},"Por visitar ")),r.a.createElement(U.c,null,r.a.createElement(U.d,{actvieclassname:"active",to:"/misviajes",tag:G.a}," Mis viajes"))))))}}]),a}(r.a.Component);function K(){var e=Object(s.a)(["\n  color: blue;\n\n  ::before {\n    content: '\ud83d\ude80';\n  }\n\n  :hover {\n    color: red;\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(s.a)(["\n    color: palevioletred;\n    font-weight: bold;\n  "]);return V=function(){return e},e}function H(){var e=Object(s.a)(["\n  color: tomato;\n  border-color: tomato;\n"]);return H=function(){return e},e}function W(){var e=Object(s.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return W=function(){return e},e}function q(){var e=Object(s.a)(["\n  padding: 4em;\n  background: #F0F0DF;\n"]);return q=function(){return e},e}function J(){var e=Object(s.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);return J=function(){return e},e}function Y(){var e=Object(s.a)(["\n  width: 100px;\n  height: 100px;\n  border: 10px solid chocolate;\n  border-radius: 10px;\n"]);return Y=function(){return e},e}var Z=m.a.div(Y()),_=m.a.h1(J()),Q=m.a.section(q()),$=m.a.button(W(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),X=Object(m.a)($)(H()),ee=function(e){var a=e.className,n=e.children;return r.a.createElement("a",{className:a},n)},ae=Object(m.a)(ee)(V()),ne=m.a.button(K()),te=(t.Component,n(53)),re=n(354),ie=function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{title:e.data,bordered:!1,style:{width:"100%",marginTop:10}},r.a.createElement("p",null,"Continente: NOMBRE CONTINENTE  "),r.a.createElement("p",null,"Capital: NOMBRE CAPITAL "),r.a.createElement("p",null,"Click here for information about   ",r.a.createElement("a",{href:"https://www.google.com/search?q="+e.data,target:"_blank",rel:"noopener noreferrer"},e.data)),r.a.createElement(re.a,{icon:"plus",size:"large"},"Add to list")))},oe=te.a.Option,le=[];["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"].forEach(function(e){le.push(r.a.createElement(oe,{key:e},e))});var ce=function(e){function a(e){var n;return Object(j.a)(this,a),(n=Object(w.a)(this,Object(O.a)(a).call(this,e))).handleChange=function(e){console.log("selected ".concat(e)),n.setState({value:e})},n.state={value:"",error:""},n}return Object(S.a)(a,e),Object(k.a)(a,[{key:"handleBlur",value:function(){console.log("blur")}},{key:"handleFocus",value:function(){console.log("focus")}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",null,r.a.createElement(te.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select a country",optionFilterProp:"children",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},le),""!==e?r.a.createElement(ie,{data:e}):null)}}]),a}(r.a.Component),ue=function(e){function a(e){var n;return Object(j.a)(this,a),(n=Object(w.a)(this,Object(O.a)(a).call(this,e))).state={initLoading:!0,data:[],error:""},n}return Object(S.a)(a,e),Object(k.a)(a,[{key:"convertirFecha",value:function(e){if("string"==typeof e){var a=new Date(e),n=a.getFullYear();return a.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(n.toString())}return e}},{key:"componentDidCatch",value:function(e,a){console.log("componentDidCatch"),console.log(a.componentStack),console.log(e)}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillUpdate",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this;fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips").then(function(e){return e.json()}).then(function(a){e.setState({initLoading:!1,data:a})}).catch(function(a){return e.setState({error:a.message})})}},{key:"render",value:function(){var e=this,a=this.state,n=a.initLoading,t=a.error,i=a.data;return t?r.a.createElement("div",null,"Lo sentimos algo salio mal:  ",t.message,"  "):r.a.createElement("div",null,r.a.createElement(v,null,"Tus futuros viajes "),r.a.createElement(L.a,{itemLayout:"horizontal",loading:n,dataSource:i,renderItem:function(a){return r.a.createElement(L.a.Item,null,r.a.createElement(L.a.Item.Meta,{avatar:r.a.createElement(x.a,{src:a.urlFlag}),title:r.a.createElement("a",{href:"https://www.google.com/search?q="+a.pais,target:"_blank",rel:"noopener noreferrer"},a.pais),description:"Tu viaje fue realizado en "+e.convertirFecha(a.annoDeLaVisita)}))}}))}}]),a}(r.a.Component),se=C.a.TabPane;function me(e){console.log(e)}var de=function(e){return r.a.createElement(C.a,{defaultActiveKey:"1",onChange:me},r.a.createElement(se,{tab:"Add to Wish List",key:"1"},r.a.createElement(Q,null,r.a.createElement(v,null,"Escoga pa\xedses por visitar"),r.a.createElement(ce,null))),r.a.createElement(se,{tab:"Wish list",key:"2"},r.a.createElement(ue,null)))},pe=function(e){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(c.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:y}),r.a.createElement(u.a,{exact:!0,path:"/marcas",component:de}),r.a.createElement(u.a,{exact:!0,path:"/misviajes",component:P}),r.a.createElement(u.a,{component:b}))))};o.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.5c97dc84.chunk.js.map