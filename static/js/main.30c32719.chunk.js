(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,n){e.exports=n(234)},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(41),i=n.n(c),o=n(10),s=n(11),u=n(14),l=n(12),p=n(15),m=n(35),d=n(22),f=Object(d.a)(),h=n(13),b=n(26),g=n(25),v=n(8),O=n.n(v),E=n(21),y=n(33),j=n.n(y),w=y.initializeApp({apiKey:"AIzaSyBHrGHhUGCs7Yl7ds_NFE8gffSJuEH0nJU",authDomain:"shoppingcart-f5bc6.firebaseapp.com",databaseURL:"https://shoppingcart-f5bc6.firebaseio.com",projectId:"shoppingcart-f5bc6",storageBucket:"shoppingcart-f5bc6.appspot.com",messagingSenderId:"1082620304721",appId:"1:1082620304721:web:dea202d8cf3595dc7c8770",measurementId:"G-HJ5G4DL8HB"}),I=function(){return function(){var e=Object(E.a)(O.a.mark((function e(t,n){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().auth.userId;case 2:null!==(a=e.sent)&&w.database().ref("/cart/Cart-".concat(a)).on("value",(function(e){t({type:"CART_FETCH",payload:e.val()})}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},N=n(109),S=n.n(N);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=w.database().ref("items"),D=function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SIGN_IN",payload:e}),f.push("/shoppingcart");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(){return function(e){j.a.auth().signOut().then((function(){console.log("Signed Out")})).catch((function(e){console.log(e)})),e({type:"SIGN_OUT"}),e({type:"CART_CLEAN"}),f.push("/shoppingcart")}},A=function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.once("value").then((function(t){return t.val()[e]}));case 2:a=t.sent,n({type:"ITEM_FETCH",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).renderAdmin=function(e){if(e.userId===n.props.currentUserId)return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"ui large two buttons"},r.a.createElement(b.a,{to:"/shoppingcart/items/delete/".concat(e.id),className:"ui  negative button ",style:{whiteSpace:"nowrap"}},r.a.createElement("i",{className:"icon trash alternate"}),"Delete"),r.a.createElement("div",{className:"or"}),r.a.createElement(b.a,{to:"/shoppingcart/items/edit/".concat(e.id),className:"ui  positive button "},r.a.createElement("i",{className:"edit icon"}),"Edit")))},n.renderList=function(){return Object.values(n.props.items).map((function(e){return r.a.createElement("div",{className:"card  ",key:e.id},r.a.createElement("div",{className:"blurring dimmable image"},r.a.createElement("img",{className:"imageCartList",style:{width:"100%",height:"290px",objectFit:"fill"},src:void 0===e.images?"https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28":e.images,alt:"hinh"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:" ui buttons right floated"},r.a.createElement("button",{className:"ui button primary",onClick:function(){return n.props.cartAdd(e)}},r.a.createElement("i",{className:"shopping cart icon"}),"Add")),r.a.createElement("div",{className:"header",style:{overflow:"hidden"}},e.name),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"price"},"$",e.price)),r.a.createElement("div",{className:"extra content"},n.renderAdmin(e))))}))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemsFetch()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui fluid container  ",style:{marginTop:"5px"}},r.a.createElement("div",{className:"ui special cards centered"},this.renderList()))}}]),t}(a.Component),_=Object(h.b)((function(e){return{items:e.items,currentUserId:e.auth.userId}}),{itemsFetch:function(){return function(e){k.on("value",(function(t){e({type:"ITEMS_FETCH",payload:t.val()})}))}},cartAdd:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n,a){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,w.database().ref("/cart/Cart-".concat(r,"/").concat(e.id)).set(e);case 3:n({type:"CART_ADD",payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(x),F=n(236),L=n(235),R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={selectedFile:null,imageLink:null,uploadPercent:0,imageName:null},n.renderInput=function(e){var t=e.input,n=e.meta,a=e.label,c=e.type,i=n.error&&n.touched,o="field ".concat(i?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,a,"".concat(i?"Requited":"")),r.a.createElement("input",Object.assign({},t,{type:c})))},n.renderImageInput=function(e){e.input,e.meta;var t=e.label,a=e.uploadPercent;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,t),r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:n.fileSelectedHandler}),r.a.createElement("div",{onClick:n.fileUploadHandler,className:"ui labeled button",tabIndex:"0"},r.a.createElement("div",{id:"uploadButton",className:"ui button  "},r.a.createElement("i",{className:"upload icon "})," Upload"),r.a.createElement("p",{className:"ui basic label"},parseFloat(a).toFixed(2),"%"))))},n.convertImage=function(e){console.log("converting");var t=new FileReader;t.readAsDataURL(e),t.name=e.name,t.size=e.size,t.onload=function(e){var t=new Image;t.src=e.target.result,t.name=e.target.name,t.size=e.target.size,t.onload=function(){var e=Object(E.a)(O.a.mark((function e(t){var a,r,c,i,o,s,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=document.createElement("canvas"),r=600/t.target.width,a.width=600,a.height=t.target.height*r,(c=a.getContext("2d")).drawImage(t.target,0,0,a.width,a.height),i=c.canvas.toDataURL(t.target,"image/jpeg",0),o=atob(i.split(",")[1]),s=[],u=0;u<o.length;u++)s.push(o.charCodeAt(u));n.setState({selectedFile:new Blob([new Uint8Array(s)],{type:"image/jpeg"})});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},n.fileSelectedHandler=function(e){e.target.files.length>0&&(n.setState({imageName:e.target.files[0].name}),n.convertImage(e.target.files[0]),document.getElementById("submitButton").disabled=!0,document.getElementById("uploadButton").classList.add("green"))},n.fileUploadHandler=function(e){e.preventDefault();var t=n.state.imageName,a=w.storage().ref("/images/"+t).put(n.state.selectedFile);a.on("state_changed",(function(e){n.setState({uploadPercent:e.bytesTransferred/e.totalBytes*100})}),(function(e){console.log(e)}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){n.setState({imageLink:e}),document.getElementById("submitButton").disabled=!1}))}))},n.onSubmit=function(e){e.images=n.state.imageLink,e.price=parseInt(e.price),n.props.onSubmit(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(F.a,{name:"name",component:this.renderInput,label:"Name : "}),r.a.createElement(F.a,{name:"price",component:this.renderInput,label:"Price: ",type:"number"}),r.a.createElement(F.a,{name:"images",component:this.renderImageInput,label:"Images: ",uploadPercent:this.state.uploadPercent}),r.a.createElement("button",{id:"submitButton",className:"ui green approve right button"},"Submit")))}}]),t}(a.Component),M=Object(L.a)({form:"ItemForm",validate:function(e){var t={};return e.name||(t.name="Requite Value!"),e.price||(t.price="Requite Value!"),t}})(R),B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.itemCreate(e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.isSignedIn?r.a.createElement(M,{onSubmit:this.onSubmit}):r.a.createElement("div",{className:"ui  container "},"Please Login To Create New Item !")}}]),t}(a.Component),H=Object(h.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{itemCreate:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n,a){var r,c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,c=P({},e,{userId:r,id:S()()}),w.database().ref("items/".concat(c.id)).set(c),t.next=5,w.database().ref("items/".concat(c.id)).once("value").then((function(e){return e.val()}));case 5:i=t.sent,n({type:"ITEM_CREATE",payload:i}),f.push("/shoppingcart");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(B),U=n(34),G=n.n(U),V=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).id=n.props.match.params.id,n.onSubmit=function(e){n.props.itemEdit(n.id,e)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return this.props.item?r.a.createElement(M,{onSubmit:this.onSubmit,initialValues:G.a.pick(this.props.item,"name","price")}):"loading"}}]),t}(a.Component),q=Object(h.b)((function(e,t){return{item:e.items[t.match.params.id]}}),{itemFetch:A,itemEdit:function(e,t){return function(){var n=Object(E.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w.database().ref("items/".concat(e)).update(t),n.next=4,w.database().ref("items/".concat(e)).once("value").then((function(e){return e.val()}));case 4:r=n.sent,a({type:"ITEM_EDIT",payload:r}),f.push("/shoppingcart");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(V),z=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:function(){return f.push("/")},className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.header),r.a.createElement("div",{className:"content"}," ",e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},J=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).actions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{to:"/shoppingcart",className:"ui button"},"Cancel"),r.a.createElement("button",{className:"ui button primary",onClick:function(){return n.props.itemDelete(n.props.match.params.id)}},"Delete"))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{actions:this.actions(),header:"Delete Item",content:"Do you want to delete   ".concat(this.props.item?this.props.item.name:"","?")}))}}]),t}(a.Component),W=Object(h.b)((function(e,t){return console.log(t.match.params.id),{item:e.items[t.match.params.id]}}),{itemFetch:A,itemDelete:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.database().ref("items/".concat(e));case 2:t.sent.remove().then((function(){n({type:"ITEM_DELETE",payload:e})})).catch((function(e){console.log(e)})),f.push("/shoppingcart");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(J),$=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"view")}}]),t}(a.Component),K=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=Object(E.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.auth().onAuthStateChanged((function(e){e&&(n.props.signIn(e.uid),n.props.cartFetch())}));case 2:case"end":return e.stop()}}),e)}))),n.renderCartBadge=function(){return r.a.createElement("div",null,"Cart ",r.a.createElement("i",{className:" icon shopping cart"}),r.a.createElement("span",{className:"badge"}," ( ".concat(n.props.cart?Object.values(n.props.cart).length:"0",")")))},n.renderAuthButton=function(){return n.props.isSignedIn?r.a.createElement(b.a,{to:"/shoppingcart",onClick:n.props.signOut,className:"item "},"Logout"):r.a.createElement(b.a,{to:"/shoppingcart/login/",className:"item"},"Login")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui teal four item inverted menu"},r.a.createElement(b.a,{to:"/shoppingcart/",className:" item"},"Home"),r.a.createElement(b.a,{to:"/shoppingcart/items/new",className:"item"},"Create Item"),r.a.createElement(b.a,{id:"cart",to:"/shoppingcart/cart/view",className:"item"},this.renderCartBadge()),this.renderAuthButton()))}}]),t}(r.a.Component),X=Object(h.b)((function(e){return{cart:e.cart,isSignedIn:e.auth.isSignedIn}}),{cartFetch:I,signIn:D,signOut:T})(K),Y=(n(233),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).switchSignIn=function(e){e.preventDefault(),n.setState({signInSwitch:!n.state.signInSwitch}),console.log(n.state.signInSwitch)},n.renderInput=function(e){var t=e.input,n=e.meta,a=e.label,c=e.type,i=n.error&&n.touched,o="field textbox ".concat(i?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,a,"".concat(i?n.error:"")),r.a.createElement("input",Object.assign({},t,{type:c})))},n.onSubmit=function(e){j.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){n.setState({error:"Login Success"}),n.props.signIn(e.user.uid)})).catch((function(e){var t=e.code;n.setState({error:t})}))},n.renderErrorFromServer=function(){switch(n.state.error){case"auth/user-not-found":case"auth/wrong-password":return r.a.createElement("div",null,"Wrong User or Password");default:return r.a.createElement("div",null,n.state.error)}},n.googleLogin=function(){var e=new j.a.auth.GoogleAuthProvider;j.a.auth().signInWithPopup(e).then((function(e){})).catch((function(e){}))},n.state={error:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui  container "},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-box"},r.a.createElement("h1",null,"login"),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(F.a,{name:"email",label:"Email",component:this.renderInput}),r.a.createElement(F.a,{type:"password",name:"password",label:"Password",component:this.renderInput}),this.renderErrorFromServer(),r.a.createElement("button",{type:"submit",className:"ui teal approve  button  my-login-button"},"Sign In"))),r.a.createElement("button",{onClick:this.googleLogin,className:"ui red google button my-google-login"},r.a.createElement("i",{className:"google icon"}),"Google Login")))}}]),t}(a.Component)),Q=Object(h.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:D,signOut:T})(Y),Z=Object(L.a)({form:"userForm",validate:function(e){var t={};return e.email?e.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)||(t.email=" Wrong Format !"):t.email=" Requite Value !",e.password||(t.password=" Requite Value !"),t}})(Q),ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).renderList=function(){return null!==n.props.cart?Object.values(n.props.cart).map((function(e){return r.a.createElement("div",{key:e.id,className:"item"},e.name,"/$",e.price,r.a.createElement("div",{className:" ui buttons right floated"},r.a.createElement("button",{onClick:function(){return n.props.cartRemove(e.id)},className:"ui negative button right floated"},"Remove")))})):r.a.createElement("div",null,"Your Cart is empty !")},n.total=function(){var e=0;return null!==n.props.cart&&Object.values(n.props.cart).map((function(t){return e+=parseInt(t.price)})),e},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.cartFetch()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui celled list"},this.renderList()),r.a.createElement("div",{className:"ui right floated"},r.a.createElement("h3",null," Total: $",this.total()),r.a.createElement("button",{className:"fluid ui button positive "},"Pay")))}}]),t}(a.Component),te=Object(h.b)((function(e){return{cart:e.cart}}),{cartRemove:function(e){return function(){var t=Object(E.a)(O.a.mark((function t(n,a){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a().auth.userId,w.database().ref("/cart/Cart-".concat(r,"/")).child(e).remove(),n({type:"CART_REMOVE",payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},cartFetch:I})(ee),ne=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui fluid container"},r.a.createElement(m.b,{history:f},r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/shoppingcart/",exact:!0,component:_}),r.a.createElement(m.a,{path:"/shoppingcart/items/new",exact:!0,component:H}),r.a.createElement(m.a,{path:"/shoppingcart/items/edit/:id",exact:!0,component:q}),r.a.createElement(m.a,{path:"/shoppingcart/items/delete/:id",exact:!0,component:W}),r.a.createElement(m.a,{path:"/shoppingcart/items/view/:id",exact:!0,component:$}),r.a.createElement(m.a,{path:"/shoppingcart/cart/view",exact:!0,component:te}),r.a.createElement(m.a,{path:"/shoppingcart/login",exact:!0,component:Z})))))}}]),t}(r.a.Component),ae=n(9),re=n(112);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe={isSignedIn:null,userId:null},se=n(237);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de={},fe=Object(ae.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return ie({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return ie({},e,{isSignedIn:!1,userId:null});default:return e}},form:se.a,items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_CREATE":case"ITEM_EDIT":case"ITEM_FETCH":return le({},e,Object(g.a)({},t.payload.id,t.payload));case"ITEMS_FETCH":return le({},e,{},G.a.mapKeys(t.payload,"id"));case"ITEM_DELETE":return G.a.omit(e,t.payload);default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD":return me({},e,Object(g.a)({},t.payload.id,t.payload));case"CART_FETCH":return me({},G.a.mapKeys(t.payload,"id"));case"CART_REMOVE":return G.a.omit(e,t.payload);case"CART_CLEAN":return null;default:return e}}}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,be=Object(ae.e)(fe,he(Object(ae.a)(re.a)));i.a.render(r.a.createElement(h.a,{store:be},r.a.createElement(ne,null)),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.30c32719.chunk.js.map