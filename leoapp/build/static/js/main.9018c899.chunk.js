(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},193:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},200:function(e,t,a){e.exports=a(378)},378:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n);a(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(205);var i=a(1),o=a.n(i),c=a(389),s=a(197),l=a(16),u=a(17),h=a(19),d=a(18),p=a(20),m=a(385),g=a(384),v=function(){return o.a.createElement(m.a,{title:"Crea un diario de tus viajes"},o.a.createElement(m.a,{type:"inner",style:{width:300},title:"Registra tus viajes",cover:o.a.createElement("img",{alt:"example",src:"https://yourtripssite.z19.web.core.windows.net/img/travel1.jpg"}),extra:o.a.createElement(g.a,{exact:!0,to:"/misviajes",className:"nav-link",activeclassname:"active"},"More")},"Registra tus viajes, las fechas y los lugares que visitados."),o.a.createElement(m.a,{style:{marginTop:16,width:300},type:"inner",cover:o.a.createElement("img",{alt:"example",src:"https://yourtripssite.z19.web.core.windows.net/img/traveltime.jpg"}),title:"Registra tus pr\xf3ximos destinos",extra:o.a.createElement(g.a,{exact:!0,to:"/porvisitar",className:"nav-link",activeclassname:"active"},"More")},"Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares."))},f=a(64),b=a(32),E=a(11),y=a(381),k=m.a.Meta,j=function(){return o.a.createElement("div",{style:{background:"#F0F0DF",padding:"30px"}},o.a.createElement(f.a,{gutter:16},o.a.createElement(b.a,{span:8},o.a.createElement(m.a,{title:"Registra tus viajes",cover:o.a.createElement("img",{alt:"example",src:"https://yourtripssite.z19.web.core.windows.net/img/travel1.jpg"}),extra:o.a.createElement(g.a,{exact:!0,to:"/misviajes",className:"nav-link",activeclassname:"active"},"More")},"Registra tus viajes, las fechas y los lugares que visitados.")),o.a.createElement(b.a,{span:8},o.a.createElement(m.a,{cover:o.a.createElement("img",{alt:"example",src:"https://yourtripssite.z19.web.core.windows.net/img/traveltime.jpg"}),title:"Registra tus pr\xf3ximos destinos",extra:o.a.createElement(g.a,{exact:!0,to:"/porvisitar",className:"nav-link",activeclassname:"active"},"More")},"Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.")),o.a.createElement(b.a,{span:8},o.a.createElement(m.a,{cover:o.a.createElement("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[o.a.createElement(E.a,{type:"setting"}),o.a.createElement(E.a,{type:"edit"}),o.a.createElement(E.a,{type:"ellipsis"})]},o.a.createElement(k,{avatar:o.a.createElement(y.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"})))))},w=a(132),O=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){this.props.auth.login()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.BrowserView,null,o.a.createElement(j,null)),o.a.createElement(w.MobileView,null,o.a.createElement(v,null)))}}]),t}(i.Component),A=(a(272),a(141)),x=a(30),T=a(31);function C(){var e=Object(x.a)(["\n  width: 50%;\n  margin: 10px;\n  padding: 5px;\n  line-height: 75px;\n  font-size: 30px;\n  background :#FFFF;\n"]);return C=function(){return e},e}function I(){var e=Object(x.a)([" \n  display: flex; \n  background : #F0F0DF;\n"]);return I=function(){return e},e}function L(){var e=Object(x.a)(["\n  padding: 0.5em;\n  margin: 0.5em;\n  color: ",";\n  background: white;\n  border: none;\n  border-radius: 3px;\n  width : 250px;\n"]);return L=function(){return e},e}function S(){var e=Object(x.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return S=function(){return e},e}function F(){var e=Object(x.a)(["\n  font-size: 1.5rem;\n  text-align: left;\n  color: #FF8F00;\n  padding: 0.5px;\n  margin: 2px 2px 25px 2px;\n"]);return F=function(){return e},e}var P=T.a.h1(F()),D=(T.a.button(S(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),T.a.input(L(),function(e){return e.inputColor||"palevioletred"}),T.a.div(I()),T.a.div(C()),a(387)),z=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"convertirFecha",value:function(e){if("string"==typeof e){var t=new Date(e),a=t.getFullYear();return t.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(a.toString())}return e}},{key:"render",value:function(){var e=this;if(null===this.props.data.data)return null;var t=this.props.data.data.data,a=t.length-1;return o.a.createElement("div",{style:{marginLeft:10}},o.a.createElement(D.a,null,t.map(function(t,n){return e.PintarSegunIndice(n,t,a)})))}},{key:"PintarSegunIndice",value:function(e,t,a){return 0===e?o.a.createElement(D.a.Item,{key:e+"."+t.idPais,dot:o.a.createElement(E.a,{type:"trophy",style:{fontSize:"26px"}}),color:"red"},"Tu ultimo viaje a ",t.pais," en  ",this.convertirFecha(t.annoDeLaVisita)):e===a?o.a.createElement(D.a.Item,{key:e+"."+t.idPais,dot:o.a.createElement(E.a,{type:"compass",style:{fontSize:"26px"}}),color:"red"},"Tu primer viaje a ",t.pais," en  ",this.convertirFecha(t.annoDeLaVisita)):o.a.createElement(D.a.Item,{key:e+"."+t.idPais,color:"green"},t.pais," en  ",this.convertirFecha(t.annoDeLaVisita))}}]),t}(o.a.Component),N=a(383),M=a(188),W=a(135),R=a.n(W);var _=Object(M.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})(function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(R.a,{className:t.button},"Add country"),o.a.createElement(R.a,{color:"primary",className:t.button},"Ordernar"))});var U=function(e){if(null===e.data.data)return null;var t=e.data.data,a=t.initLoading,n=function(e){var t=new Set,a=[];return e.forEach(function(e){!1===t.has(e.idPais)&&a.push(e),t.add(e.idPais)}),a}(t.data);return o.a.createElement("div",null,o.a.createElement(_,null),o.a.createElement(P,null,"Has visitado ",n.length," pa\xedses"),o.a.createElement(N.a,{style:{marginLeft:10},itemLayout:"horizontal",loading:a,dataSource:n,renderItem:function(e){return o.a.createElement(N.a.Item,null,o.a.createElement(N.a.Item.Meta,{avatar:o.a.createElement(y.a,{src:e.urlFlag}),title:o.a.createElement("a",{href:"https://www.google.com/search?q="+e.pais,target:"_blank",rel:"noopener noreferrer"},e.pais)}))}}))},V=A.a.TabPane,B=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(A.a,{defaultActiveKey:"1",onChange:this.callback},o.a.createElement(V,{tab:"Lista pa\xedses visitados",key:"1"},o.a.createElement(U,{data:this.props})),o.a.createElement(V,{tab:"Historia de tus viajes",key:"2"},o.a.createElement(P,null,"El cronograma de tus viajes."),o.a.createElement(z,{data:this.props})))}}]),t}(o.a.Component),q={rootAPI:"https://tripsapi20181211043716.azurewebsites.net/api",rootWebSite:"https://yourtripssite.z19.web.core.windows.net"},H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={initLoading:!0,data:[],error:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){this.props.auth.login()}},{key:"componentDidMount",value:function(){var e=this;if(this.props.auth.isAuthenticated()){var t="".concat(q.rootAPI,"/travelers/").concat(this.props.auth.userProfile,"/trips"),a={headers:{Authorization:"Bearer ".concat(this.props.auth.getAccessToken())}};fetch(t,a).then(function(e){return e.json()}).then(function(t){e.setState({initLoading:!1,data:t})}).catch(function(t){return e.setState({error:t.message})})}}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated,t=this.state.error;return!1===e()?o.a.createElement("div",null,o.a.createElement("h4",null,"You are not logged in! Please"," ",o.a.createElement("button",{style:{cursor:"pointer"},onClick:this.login.bind(this)},"Log In")," ","to continue.")):t?o.a.createElement("div",null,o.a.createElement(B,{data:null}),o.a.createElement("p",null,"Lo sentimos algo salio mal:  ",t.message),"  "):o.a.createElement(B,{data:this.state})}}]),t}(o.a.Component),J=a(386),Y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).convertirFecha=function(e){if("string"==typeof e){var t=new Date(e),a=t.getFullYear();return t.toLocaleString("en-us",{month:"long"}).toString().concat(" ").concat(a.toString())}return e},a.remove=function(e){a.props.data.onDeleteItem(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.data.state,a=t.initLoading,n=t.datawishlist;return console.log("Rendering"),o.a.createElement("div",null,o.a.createElement(P,null,"Tus futuros viajes "),o.a.createElement(N.a,{itemLayout:"horizontal",style:{marginLeft:10},loading:a,dataSource:n,renderItem:function(t){return o.a.createElement(N.a.Item,{actions:[o.a.createElement(E.a,{key:t.idTrip,type:"close-circle",theme:"filled",onClick:e.remove.bind(e,t.idTrip)})]},o.a.createElement(N.a.Item.Meta,{avatar:o.a.createElement(y.a,{src:t.urlFlag}),title:o.a.createElement("a",{href:"https://www.google.com/search?q="+t.pais,target:"_blank",rel:"noopener noreferrer"},t.pais),description:"Viaje a ".concat(t.name," planeado en  ")+e.convertirFecha(t.annoDeLaVisita)}))}}))}}]),t}(o.a.Component);function K(){var e=Object(x.a)(["\n  color: blue;\n\n  ::before {\n    content: '\ud83d\ude80';\n  }\n\n  :hover {\n    color: red;\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(x.a)(["\n    color: palevioletred;\n    font-weight: bold;\n  "]);return X=function(){return e},e}function G(){var e=Object(x.a)(["\n  color: tomato;\n  border-color: tomato;\n"]);return G=function(){return e},e}function Q(){var e=Object(x.a)(["\n  /* Adapt the colors based on primary prop */\n  background: ",";\n  color: ",";\n\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n"]);return Q=function(){return e},e}function $(){var e=Object(x.a)(["\n  padding: 4em;\n  background: #F0F0DF;\n"]);return $=function(){return e},e}function Z(){var e=Object(x.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);return Z=function(){return e},e}function ee(){var e=Object(x.a)(["\n  width: 100px;\n  height: 100px;\n  border: 10px solid chocolate;\n  border-radius: 10px;\n"]);return ee=function(){return e},e}var te=T.a.div(ee()),ae=T.a.h1(Z()),ne=T.a.section($()),re=T.a.button(Q(),function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),ie=Object(T.a)(re)(G()),oe=function(e){var t=e.className,a=e.children;return o.a.createElement("a",{className:t},a)},ce=Object(T.a)(oe)(X()),se=T.a.button(K()),le=(i.Component,a(71)),ue=a(82),he=a(382),de=a(388),pe=a(13),me=a.n(pe),ge=me()(),ve=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).AddItemToWishList=function(){var e={IdPais:a.props.valor.key,DateTrip:ge,ClientId:a.props.props.data.data.data.auth.userProfile},t="".concat(q.rootAPI,"/travelers/").concat(e.ClientId,"/wishlists"),n={headers:{Authorization:"Bearer ".concat(a.props.props.data.data.data.auth.getAccessToken()),Accept:"application/json","Content-Type":"application/json"},method:"post",body:JSON.stringify(e)};fetch(t,n).then(function(e){e.ok?(J.a.success("successfully added"),a.props.props.data.onAddItem()):J.a.error("Try again")}).catch(function(e){console.log(e),J.a.error("Try again")})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onChange",value:function(e){ge=e}},{key:"render",value:function(){var e=this.props.valor;return o.a.createElement("div",null,o.a.createElement(m.a,{title:e.label,bordered:!1,style:{width:"100%",marginTop:10}},o.a.createElement("p",null,"Continente: ",e.label,"  "),o.a.createElement("p",null,"Capital: ",e.label," "),o.a.createElement("p",null,"More information about   ",o.a.createElement("a",{href:"https://www.google.com/search?q="+e.label,target:"_blank",rel:"noopener noreferrer"},e.label)),o.a.createElement(he.a,{defaultValue:me()().add(60,"days"),onChange:this.onChange}),o.a.createElement(de.a,{style:{marginLeft:10},icon:"plus",onClick:this.AddItemToWishList},"Add to list")))}}]),t}(o.a.Component),fe=ue.a.Option,be=[],Ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState({selectedvalue:e})},a.state={selectedvalue:{key:-1,label:""},error:""},be.length=0,console.log(Object(le.a)(a)),a.props.data.data.state.datacountries.forEach(function(e){be.push(o.a.createElement(fe,{key:e.idCountry},e.name))}),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(ue.a,{labelInValue:!0,showSearch:!0,style:{width:"100%"},placeholder:"Select a country",optionFilterProp:"children",onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},be),""!==this.state.selectedvalue.label?o.a.createElement(ve,{props:this.props,valor:this.state.selectedvalue}):null)}}]),t}(o.a.Component),ye=A.a.TabPane,ke=function(e){return e.data.state.error?o.a.createElement("div",null,o.a.createElement(A.a,{defaultActiveKey:"1",onChange:e.callback},o.a.createElement(ye,{tab:"Wish list",key:"1"},o.a.createElement("p",null,"Lo sentimos algo salio mal:  ",e.data.state.error)),o.a.createElement(ye,{tab:"Add to Wish List",key:"2"},o.a.createElement("p",null,"Lo sentimos algo salio mal:  ",e.data.state.error)))):o.a.createElement("div",null,o.a.createElement(A.a,{defaultActiveKey:"1",onChange:e.callback},o.a.createElement(ye,{tab:"Wish list",key:"1"},o.a.createElement(Y,{data:e})),o.a.createElement(ye,{tab:"Add to Wish List",key:"2"},o.a.createElement(ne,null,o.a.createElement(P,null,"Pa\xedses por visitar"),o.a.createElement(Ee,{data:e})))))},je=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).callback=function(){},a.ListAllCountries=function(){var e="".concat(q.rootAPI,"/paises");fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({datacountries:e})}).catch(function(e){return a.setState({error:e.message})})},a.handleAddedCountry=function(){a.ObtainWishList()},a.handleRemoveItem=function(e){var t="".concat(q.rootAPI,"/travelers/").concat(a.props.auth.userProfile,"/wishlists/").concat(e),n={headers:{Authorization:"Bearer ".concat(a.props.auth.getAccessToken())},method:"DELETE"};fetch(t,n).then(function(t){t.ok?(J.a.success("Deleted"),a.refreshData(e)):J.a.error("Try again")}).catch(function(e){console.log(e),J.a.error("Try again")})},a.state={initLoading:!0,datacountries:[],datawishlist:[],error:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){this.ObtainWishList(),this.ListAllCountries()}},{key:"ObtainWishList",value:function(){var e=this,t=this.props,a="".concat(q.rootAPI,"/travelers/").concat(t.auth.userProfile,"/wishlists"),n={headers:{Authorization:"Bearer ".concat(t.auth.getAccessToken())}};fetch(a,n).then(function(e){return e.json()}).then(function(t){e.setState({initLoading:!1,datawishlist:t})}).catch(function(t){return e.setState({error:t.message})})}},{key:"login",value:function(){this.props.auth.login()}},{key:"refreshData",value:function(e){var t=this.state.datawishlist.filter(function(t){return t.idTrip!==e});this.setState({datawishlist:t,error:""})}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated,t={data:this.props,state:this.state};return o.a.createElement("div",null,e()&&o.a.createElement(ke,{data:t,onDeleteItem:this.handleRemoveItem,onAddItem:this.handleAddedCountry}),!e()&&o.a.createElement("h4",null,"You are not logged in! Please"," ",o.a.createElement("button",{style:{cursor:"pointer"},onClick:this.login.bind(this)},"Log In")," ","to continue."))}}]),t}(o.a.Component),we=a(193),Oe=a.n(we),Ae=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},o.a.createElement("img",{src:Oe.a,alt:"loading"}))}}]),t}(i.Component),xe=a(194),Te=a.n(xe)()(),Ce=a(195),Ie={domain:"leogatgens.auth0.com",clientId:"3QMygDL8__3P7JaP5SkPYD8_RUSKwDU8",callbackUrl:"https://yourtripssite.z19.web.core.windows.net/callback"},Le=function(){function e(){var t=this;Object(l.a)(this,e),this.userProfile={},this.auth0=new Ce.a.WebAuth({domain:Ie.domain,clientID:Ie.clientId,redirectUri:Ie.callbackUrl,responseType:"token id_token",audience:"https://leogatgens.auth0.com/api/v2/",scope:"openid profile read:messages"}),this.RegisterUser=function(e){var t={FirstName:e.given_name,LastName:e.family_name,ClientId:e.sub};fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return console.log(e),e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},this.IsNewUser=function(e){fetch("https://tripsapi20181211043716.azurewebsites.net/api/travelers/".concat(e.sub),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(a){404===a.status&&t.RegisterUser(e)}).catch(function(e){return console.log(e)})},this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(u.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(Te.replace("/home"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){var t=this;localStorage.setItem("isLoggedIn","true");var a=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=a,this.auth0.client.userInfo(e.accessToken,function(e,a){a&&(t.userProfile=a.sub,t.IsNewUser(a))}),Te.replace("/home")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),Te.replace("/home")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}(),Se=(a(377),a(27)),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).toggle=a.toggle.bind(Object(le.a)(a)),a.state={isOpen:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"goTo",value:function(e){this.props.history.replace("/".concat(e))}},{key:"login",value:function(){this.props.auth.login()}},{key:"logout",value:function(){this.props.auth.logout()}},{key:"componentDidMount",value:function(){var e=this.props.auth.renewSession;"true"===localStorage.getItem("isLoggedIn")&&e()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Se.e,{color:"light",light:!0,expand:"md"},o.a.createElement(Se.f,{exact:!0,to:"/home",className:"nav-link",activeclassname:"active",tag:g.a},"Mis pa\xedses por el mundo"),o.a.createElement(Se.g,{onClick:this.toggle}),o.a.createElement(Se.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(Se.b,{className:"ml-auto",navbar:!0},!e()&&o.a.createElement(Se.c,null,o.a.createElement(Se.d,{actvieclassname:"active",to:"/",onClick:this.login.bind(this),tag:g.a},"Login ")),e()&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Se.c,null,o.a.createElement(Se.d,{exact:!0,to:"/home",className:"nav-link",activeclassname:"active",tag:g.a},"Home")),o.a.createElement(Se.c,null,o.a.createElement(Se.d,{actvieclassname:"active",to:"/porvisitar",tag:g.a},"Por visitar ")),o.a.createElement(Se.c,null,o.a.createElement(Se.d,{actvieclassname:"active",to:"/misviajes",tag:g.a}," Mis viajes")),o.a.createElement(Se.c,null,o.a.createElement(Se.d,{actvieclassname:"active",to:"/",onClick:this.logout.bind(this),tag:g.a},"Logout ")))))))}}]),t}(i.Component),Pe=new Le,De=o.a.createElement(c.a,{history:Te},o.a.createElement("div",null,o.a.createElement(s.a,{path:"/",render:function(e){return o.a.createElement(Fe,Object.assign({auth:Pe},e))}}),o.a.createElement(s.a,{path:"/home",render:function(e){return o.a.createElement(O,Object.assign({auth:Pe},e))}}),o.a.createElement(s.a,{path:"/porvisitar",render:function(e){return o.a.createElement(je,Object.assign({auth:Pe},e))}}),o.a.createElement(s.a,{path:"/misviajes",render:function(e){return o.a.createElement(H,Object.assign({auth:Pe},e))}}),o.a.createElement(s.a,{path:"/callback",render:function(e){return function(e){var t=e.location;console.log("handleAuthentication"),/access_token|id_token|error/.test(t.hash)&&Pe.handleAuthentication()}(e),o.a.createElement(Ae,e)}})));r.a.render(De,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,1,2]]]);
//# sourceMappingURL=main.9018c899.chunk.js.map