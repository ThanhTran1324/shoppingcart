(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){e.exports=n(236)},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),i=n(9),s=n(10),l=n(12),u=n(11),m=n(13),p=n(37),d=n(23),h=Object(d.a)(),f=n(14),g=n(16),b=n(25),v=n(8),E=n.n(v),y=n(18),O=n(26),w=n.n(O),j=O.initializeApp({apiKey:"AIzaSyBHrGHhUGCs7Yl7ds_NFE8gffSJuEH0nJU",authDomain:"shoppingcart-f5bc6.firebaseapp.com",databaseURL:"https://shoppingcart-f5bc6.firebaseio.com",projectId:"shoppingcart-f5bc6",storageBucket:"shoppingcart-f5bc6.appspot.com",messagingSenderId:"1082620304721",appId:"1:1082620304721:web:dea202d8cf3595dc7c8770",measurementId:"G-HJ5G4DL8HB"}),N=function(){return function(){var e=Object(y.a)(E.a.mark((function e(t,n){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().auth.userId;case 2:if(a=e.sent,r={},null===a){e.next=9;break}return e.next=7,j.database().ref("/cart/Cart-".concat(a)).once("value").then((function(e){return e.val()}));case 7:r=e.sent,t({type:"CART_FETCH",payload:r});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},S=n(110),I=n.n(S),A=n(28),C=n.n(A),T=j.database().ref("items"),k=function(e,t){return function(){var n=Object(y.a)(E.a.mark((function n(a){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a({type:"SIGN_IN",payload:{userId:e,isAnonymous:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},x=function(){return function(){var e=Object(y.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n().auth.isSignedIn){e.next=3;break}return e.next=3,j.auth().signInAnonymously().catch((function(e){var t=e.message;console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},F=function(){return function(e){w.a.auth().signOut().then((function(){console.log("Signed Out")})).catch((function(e){console.log(e)})),e({type:"SIGN_OUT"}),e({type:"CART_CLEAN"}),h.push("/shoppingcart")}},P=function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.orderByChild("id").equalTo(e).once("value").then((function(e){return e.val()}));case 2:a=t.sent,n({type:"ITEM_FETCH",payload:a[e]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=function(e,t){return function(n,a){var r=[],c=a().items;switch(e){case"name":r="0"===t?A.sortBy(Object.values(c),[function(e){return e.name}]):A.sortBy(Object.values(c),[function(e){return e.name}]).reverse();break;case"price":"0"===t?(r=Object.values(c).sort((function(e,t){return e.price-t.price})),console.log("low to high")):r=Object.values(c).sort((function(e,t){return e.price-t.price})).reverse();break;case"time":r="0"===t?Object.values(c).sort((function(e,t){return e.createdTime-t.createdTime})):Object.values(c).sort((function(e,t){return e.createdTime-t.createdTime})).reverse();break;default:console.log("no sort")}n({type:"ITEM_SORTED",payload:r})}},_=n(238),R=n(237),D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderSelecter=function(e){e.name;var t=e.input,a=e.label,c=e.option;return r.a.createElement("div",{className:"ui form"},r.a.createElement("select",Object.assign({},t,{onChange:n.handleChange,className:"ui dropdown"}),r.a.createElement("option",{value:"-1",defaultValue:!0},a),c.map((function(e,t){return r.a.createElement("option",{value:t,key:t},e)}))))},n.handleChange=function(e){e.target&&n.props.itemSorted(e.target.name,e.target.value)},n.handleOnSearch=function(e){console.log(e)},n.renderSearch=function(e){var t=e.input;e.name;return r.a.createElement("form",{onSubmit:n.props.handleSubmit(n.handleOnSearch)},r.a.createElement("div",{className:"ui input ",style:{width:"100%"}},r.a.createElement("input",Object.assign({},t,{type:"text",placeholder:"Search..."}))," ",r.a.createElement("button",{className:"ui button my-search-button"},r.a.createElement("i",{className:"search icon"}))))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"four wide column"},r.a.createElement(_.a,{name:"search",component:this.renderSearch})),r.a.createElement("div",{className:"four wide column"},r.a.createElement(_.a,{name:"price",label:"Price",component:this.renderSelecter,option:["Low To High","High To Low"]})),r.a.createElement("div",{className:"four wide column"},r.a.createElement(_.a,{name:"time",label:"Time",component:this.renderSelecter,option:["Old To New","New To Old"]})),r.a.createElement("div",{className:"four wide column"},r.a.createElement(_.a,{name:"name",label:"Name",component:this.renderSelecter,option:["A-Z","Z-A"]}))))}}]),t}(a.Component),U=Object(f.b)((function(e){return{items:e.items}}),{itemSorted:L})(D),B=Object(R.a)({form:"SortAndFilterForm"})(U),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderAdmin=function(e){if(e.userId===n.props.currentUserId)return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"ui large two buttons"},r.a.createElement(g.a,{to:"/shoppingcart/items/delete/".concat(e.id),className:"ui inverted red button ",style:{whiteSpace:"nowrap"}},r.a.createElement("i",{className:"icon trash alternate"}),"Delete"),r.a.createElement("div",{className:"or"}),r.a.createElement(g.a,{to:"/shoppingcart/items/edit/".concat(e.id),className:"ui inverted blue button "},r.a.createElement("i",{className:"edit icon"}),"Edit")))},n.addToCartHandler=function(e){n.props.signInAsAnonymous(),n.props.cartAdd(e)},n.renderList=function(){return Object.values(n.props.items).map((function(e){return r.a.createElement("div",{className:"card  ",key:e.id},r.a.createElement("div",{className:"blurring dimmable image ",style:{overflow:"hidden"}},r.a.createElement("img",{className:"imageCartList  ",style:{width:"100%",height:"290px",objectFit:"fill"},src:e.images?e.images:"https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28",alt:"hinh"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:" ui buttons right floated"},r.a.createElement("button",{className:"ui button primary",onClick:function(){return n.addToCartHandler(e)}},r.a.createElement("i",{className:"shopping cart icon"}),"Add")),r.a.createElement("div",{className:"header",style:{overflow:"hidden",textTransform:"capitalize"}},e.name),r.a.createElement("div",{className:"meta"},r.a.createElement("span",{className:"price",style:{color:"#FF9200",fontSize:"18px"}},"$",e.price)),r.a.createElement("div",{className:"extra content"},n.renderAdmin(e))))}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemsFetch()}},{key:"render",value:function(){return 0!==Object.keys(this.props.items).length||this.props.sortAndFilterFormValue?r.a.createElement("div",{className:"ui fluid container  ",style:{marginTop:"5px"}},r.a.createElement(B,null),r.a.createElement("div",{className:"ui special cards centered"},this.renderList())):r.a.createElement("div",{className:"ui fluid container "},r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active dimmer",style:{height:"100vh"}},r.a.createElement("div",{className:"ui massive text loader"},"Loading...")),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("p",null)))}}]),t}(a.Component),H=Object(f.b)((function(e){return{items:e.items,currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn,sortAndFilterFormValue:e.form.SortAndFilterForm}}),{itemsFetch:function(){return function(){var e=Object(y.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.once("value").then((function(e){return e.val()}));case 2:n=e.sent,t({type:"ITEMS_FETCH",payload:n}),t(L("time","1"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},cartAdd:function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=a().auth.userId)){t.next=5;break}return t.next=4,j.database().ref("/cart/Cart-".concat(r,"/").concat(e.id)).set(e);case 4:n({type:"CART_ADD",payload:e});case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},signInAsAnonymous:x})(V),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui one column grid"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui raised segment"},r.a.createElement("p",{className:"ui red ribbon label"},this.props.banner),r.a.createElement("p",null),r.a.createElement("div",null,"Please"," ",r.a.createElement(g.a,{className:"ui teal button",to:"/shoppingcart/login"},"Login"),this.props.content,r.a.createElement("button",{onClick:this.props.signInAsAnonymous,className:"ui teal google button my-google-login"},r.a.createElement("i",{className:"user secret icon"}),"Login As Guest User"))))))}}]),t}(r.a.Component),G=Object(f.b)(null,{signInAsAnonymous:x})(M),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={selectedFile:null,imageLink:null,uploadPercent:0,imageName:null},n.renderInput=function(e){var t=e.input,n=e.meta,a=e.label,c=e.type,o=n.error&&n.touched,i="field ".concat(o?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a,"".concat(o?"Requited":"")),r.a.createElement("input",Object.assign({},t,{type:c})))},n.renderImageInput=function(e){e.input,e.meta;var t=e.label,a=e.uploadPercent;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,t),r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:n.fileSelectedHandler}),r.a.createElement("div",{onClick:n.fileUploadHandler,className:"ui labeled button",tabIndex:"0"},r.a.createElement("div",{id:"uploadButton",className:"ui button  "},r.a.createElement("i",{className:"upload icon "})," Upload"),r.a.createElement("p",{className:"ui basic label"},parseFloat(a).toFixed(2),"%"))))},n.convertImage=function(e){console.log("converting");var t=new FileReader;t.readAsDataURL(e),t.name=e.name,t.size=e.size,t.onload=function(e){var t=new Image;t.src=e.target.result,t.name=e.target.name,t.size=e.target.size,t.onload=function(){var e=Object(y.a)(E.a.mark((function e(t){var a,r,c,o,i,s,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=document.createElement("canvas"),r=600/t.target.width,a.width=600,a.height=t.target.height*r,(c=a.getContext("2d")).drawImage(t.target,0,0,a.width,a.height),o=c.canvas.toDataURL(t.target,"image/jpeg",0),i=atob(o.split(",")[1]),s=[],l=0;l<i.length;l++)s.push(i.charCodeAt(l));n.setState({selectedFile:new Blob([new Uint8Array(s)],{type:"image/jpeg"})});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},n.fileSelectedHandler=function(e){e.target.files.length>0&&(n.setState({imageName:e.target.files[0].name}),n.convertImage(e.target.files[0]),document.getElementById("submitButton").disabled=!0,document.getElementById("uploadButton").classList.add("green"))},n.fileUploadHandler=function(e){e.preventDefault();var t=n.state.imageName,a=j.storage().ref("/images/"+t).put(n.state.selectedFile);a.on("state_changed",(function(e){n.setState({uploadPercent:e.bytesTransferred/e.totalBytes*100})}),(function(e){console.log(e)}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){n.setState({imageLink:e}),document.getElementById("submitButton").disabled=!1}))}))},n.onSubmit=function(e){var t=new Date;e.createdTime=t.getTime(),e.images=n.state.imageLink,e.price=parseFloat(e.price),n.props.onSubmit(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(_.a,{name:"name",component:this.renderInput,label:"Name : "}),r.a.createElement(_.a,{name:"price",component:this.renderInput,label:"Price: ",type:"number"}),r.a.createElement(_.a,{name:"images",component:this.renderImageInput,label:"Images: ",uploadPercent:this.state.uploadPercent}),r.a.createElement("button",{id:"submitButton",className:"ui green approve right button"},"Submit")))}}]),t}(a.Component),W=Object(R.a)({form:"ItemForm",validate:function(e){var t={};return e.name||(t.name="Requite Value!"),e.price||(t.price="Requite Value!"),t}})(z),q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){console.log(e),n.props.itemCreate(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.isSignedIn&&!this.props.isAnonymous?r.a.createElement(W,{onSubmit:this.onSubmit}):this.props.isAnonymous?r.a.createElement(G,{banner:"Please Login",content:"You Are Shopping As Guest User!\n        Please Login To Have Better Service."}):r.a.createElement(G,{banner:"Please Login",content:"To Start Selling"})}}]),t}(a.Component),J=Object(f.b)((function(e){return{isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{itemCreate:function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n,a){var r,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,c=Object(b.a)({},e,{userId:r,id:I()()}),j.database().ref("items/".concat(c.id)).set(c),t.next=5,j.database().ref("items/".concat(c.id)).once("value").then((function(e){return e.val()}));case 5:o=t.sent,n({type:"ITEM_CREATE",payload:o}),h.push("/shoppingcart");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}})(q),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).id=n.props.match.params.id,n.onSubmit=function(e){n.props.itemEdit(n.id,e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return this.props.item?r.a.createElement(W,{onSubmit:this.onSubmit,initialValues:C.a.pick(this.props.item,"name","price")}):"loading"}}]),t}(a.Component),K=Object(f.b)((function(e,t){return{item:e.items[t.match.params.id],items:e.items}}),{itemFetch:P,itemEdit:function(e,t){return function(){var n=Object(y.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j.database().ref("items/".concat(e)).update(t),n.next=4,j.database().ref("items/".concat(e)).once("value").then((function(e){return e.val()}));case 4:r=n.sent,a({type:"ITEM_EDIT",payload:r}),h.push("/shoppingcart");case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Y),X=function(e){return o.a.createPortal(r.a.createElement("div",{onClick:function(){return h.push("/")},className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.header),r.a.createElement("div",{className:"content"}," ",e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).actions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{to:"/shoppingcart",className:"ui button"},"Cancel"),r.a.createElement("button",{className:"ui button primary",onClick:function(){return n.props.itemDelete(n.props.match.params.id)}},"Delete"))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(X,{actions:this.actions(),header:"Delete Item",content:"Do you want to delete   ".concat(this.props.item?this.props.item.name:"","?")}))}}]),t}(a.Component),Z=Object(f.b)((function(e,t){return console.log(t.match.params.id),{item:e.items[t.match.params.id]}}),{itemFetch:P,itemDelete:function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.database().ref("items/".concat(e));case 2:t.sent.remove().then((function(){n({type:"ITEM_DELETE",payload:e})})).catch((function(e){console.log(e)})),h.push("/shoppingcart");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})($),Q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"view")}}]),t}(a.Component),ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=Object(y.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.auth().onAuthStateChanged((function(e){e&&(n.props.signIn(e.uid,e.isAnonymous),n.props.cartFetch())}));case 2:case"end":return e.stop()}}),e)}))),n.renderCartBadge=function(){var e="0";return n.props.cart&&(e=Object.values(n.props.cart).length),r.a.createElement("div",null,"Cart ",r.a.createElement("i",{className:" icon shopping cart"}),r.a.createElement("span",{className:"badge"}," ( ".concat(e,")")))},n.renderAuthButton=function(){return n.props.isSignedIn&&!n.props.isAnonymous?r.a.createElement(g.a,{to:"/shoppingcart",onClick:n.props.signOut,className:"item "},"Logout"):r.a.createElement(g.a,{to:"/shoppingcart/login/",className:"item"},"Login")},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui teal four item inverted menu"},r.a.createElement(g.a,{to:"/shoppingcart/",className:" item"},"Home"),r.a.createElement(g.a,{to:"/shoppingcart/items/new",className:"item"},"Create Item"),r.a.createElement(g.a,{id:"cart",to:"/shoppingcart/cart/view",className:"item"},this.renderCartBadge()),this.renderAuthButton()))}}]),t}(r.a.Component),te=Object(f.b)((function(e){return{cart:e.cart,isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{cartFetch:N,signIn:k,signOut:F})(ee),ne=(n(235),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderInput=function(e){var t=e.input,n=e.meta,a=e.label,c=e.type,o=n.error&&n.touched,i="field textbox ".concat(o?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null,a,"".concat(o?n.error:"")),r.a.createElement("input",Object.assign({},t,{type:c,autoComplete:t.name})))},n.onSubmit=function(e){if(n.state.showVerifyPassword)if(n.props.isSignedIn&&n.props.isAnonymous){var t=w.a.auth.EmailAuthProvider.credential(e.email,e.password);w.a.auth().currentUser.linkWithCredential(t).then((function(e){var t=e.user;console.log("Anonymous account successfully upgraded",t)}),(function(e){console.log("Error upgrading anonymous account",e)}))}else w.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){h.push("/shoppingcart")})).catch((function(e){var t=e.code;n.setState({error:t})}));else w.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){n.setState({error:"Login Success"}),h.push("/shoppingcart")})).catch((function(e){var t=e.code;n.setState({error:t})}))},n.renderErrorFromServer=function(){switch(n.state.error){case"auth/user-not-found":case"auth/wrong-password":return r.a.createElement("div",null,"Wrong User or Password");default:return r.a.createElement("div",null,n.state.error)}},n.googleLogin=function(){var e=new w.a.auth.GoogleAuthProvider;w.a.auth().signInWithPopup(e).then((function(e){e.user&&h.push("/shoppingcart")})).catch((function(e){}))},n.renderVerifyPassword=function(){if(n.state.showVerifyPassword)return r.a.createElement(_.a,{type:"password",name:"verifyPassword",label:"Verify Password",component:n.renderInput})},n.renderForgetPassword=function(){if(!n.state.showVerifyPassword)return r.a.createElement(g.a,{to:"/shoppingcart/forgotpassword",className:"my_forgot_password_text"},"Forgot Your Password")},n.SignInSignUpSwitch=function(e){n.setState({showVerifyPassword:e})},n.state={error:"",showVerifyPassword:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui  container "},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"ui equal width center aligned padded grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" green column",onClick:function(){return e.SignInSignUpSwitch(!1)},style:{cursor:"pointer"}},"Welcome Back"),r.a.createElement("div",{className:"blue column",onClick:function(){return e.SignInSignUpSwitch(!0)},style:{cursor:"pointer"}},"Sign Up"))),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(_.a,{name:"email",label:"Email",component:this.renderInput}),r.a.createElement(_.a,{type:"password",name:"password",label:"Password",component:this.renderInput}),this.renderForgetPassword(),this.renderVerifyPassword(),this.renderErrorFromServer(),r.a.createElement("button",{type:"submit",className:"ui approve  button  my-login-button ".concat(this.state.showVerifyPassword?"blue":"green")},this.state.showVerifyPassword?"Sign Up":"Log In"))),r.a.createElement("button",{onClick:this.googleLogin,className:"ui red google button my-google-login"},r.a.createElement("i",{className:"google icon"}),"Google Login"),r.a.createElement("button",{onClick:this.props.signInAsAnonymous,className:"ui teal google button my-google-login"},r.a.createElement("i",{className:"user secret icon"}),"Login As Guest User")))}}]),t}(a.Component)),ae=Object(f.b)((function(e){return{isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{signIn:k,signOut:F,signInAsAnonymous:x})(ne),re=Object(R.a)({form:"userForm",validate:function(e){var t={};return e.email?e.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)||(t.email=" Wrong Format !"):t.email=" Requite Value !",e.password||(t.password=" Requite Value !"),e.verifyPassword!==e.password&&(t.verifyPassword=" : Wrong Verify Password"),e.verifyPassword||(t.verifyPassword=" Requite Value !"),t}})(ae),ce=n(113);function oe(e){return r.a.createElement(ce.PayPalButton,{paypalOptions:{clientId:"AYI5Th6t7An5aFVx5rkUvvbo68XhT-ol3iXLVdyBbkiTzYUo9RaNZJoCcpVUKv3fGNQnGXzpF3J_Bd4a",intent:"capture"},buttonStyles:{layout:"vertical",shape:"rect"},amount:e.price})}var ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={total:0},n.renderList=function(e){return e.map((function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("div",{style:{color:"#FF9200",float:"right"}},"/$",e.price),r.a.createElement("img",{className:"ui avatar image",src:e.images,alt:e.name}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header",style:{color:"#0167C0",textTransform:"capitalize"}},e.name),r.a.createElement("button",{onClick:function(){return n.props.cartRemove(e.id)},className:"ui  mini  button "},"Remove")))}))},n.renderTotal=function(){var e=0;return null!==n.props.cart&&Object.values(n.props.cart).map((function(t){return e+=parseInt(t.price)})),r.a.createElement("span",{style:{color:"#FF9200",fontSize:"30px"}}," $",e)},n.countTotal=function(){var e=0;return Object.values(n.props.cart).map((function(t){return e+=parseInt(t.price)})),e},n.renderWarningPanelForlAnonymoust=function(){if(n.props.isAnonymous)return r.a.createElement(G,{banner:"Please Login",content:"You Are Shopping As Guest User!\n          Please Login To Have Better Service."})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.cartFetch()}},{key:"render",value:function(){return this.props.isSignedIn?null!==this.props.cart?r.a.createElement("div",{className:"ui container",style:{justifyContent:"center"}},this.renderWarningPanelForlAnonymoust(),r.a.createElement("div",{className:"ui celled massive list"},this.renderList(Object.values(this.props.cart))),r.a.createElement("div",{className:"ui container ",style:{width:"500px"}}," ",r.a.createElement("h3",null,"Subtotal (",Object.keys(this.props.cart).length," item):",this.renderTotal()),0!==this.countTotal()?r.a.createElement(oe,{description:"item cui bap",price:this.countTotal()}):"")):r.a.createElement("div",null,"Your Cart is empty !"):r.a.createElement(G,{banner:"Please Login",content:"To Start Shopping"})}}]),t}(a.Component),se=Object(f.b)((function(e){return{cart:e.cart,isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{cartRemove:function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=a().auth.userId)&&(j.database().ref("/cart/Cart-".concat(r,"/")).child(e).remove(),n({type:"CART_REMOVE",payload:e}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},cartFetch:N})(ie),le=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).componentWillMount=function(){},n.content=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Enter the email address for your account we'll email you a link to reset your password."),r.a.createElement("p",null),r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email address: "),r.a.createElement("input",{type:"text",id:"email",autoComplete:"off",style:{width:"300px"}}),r.a.createElement("button",{onClick:n.handleSubmit,className:"ui interted teal button ",style:{marginLeft:"5px"}},"Sent Reset Password Email"),r.a.createElement("h2",{id:"output"}," "))),r.a.createElement("p",null))},n.handleSubmit=function(e){e.preventDefault();var t=w.a.auth(),n=document.getElementById("email").value;t.sendPasswordResetEmail(n).then((function(){console.log("email sent"),document.getElementById("output").innerHTML="Email has been sent!"})).catch((function(e){document.getElementById("output").innerHTML=e}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(G,{banner:"Forgot your password ? ",content:this.content()})}}]),t}(a.Component),ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui fluid container"},r.a.createElement(p.b,{history:h},r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/shoppingcart/",exact:!0,component:H}),r.a.createElement(p.a,{path:"/shoppingcart/items/new",exact:!0,component:J}),r.a.createElement(p.a,{path:"/shoppingcart/items/edit/:id",exact:!0,component:K}),r.a.createElement(p.a,{path:"/shoppingcart/items/delete/:id",exact:!0,component:Z}),r.a.createElement(p.a,{path:"/shoppingcart/items/view/:id",exact:!0,component:Q}),r.a.createElement(p.a,{path:"/shoppingcart/cart/view",exact:!0,component:se}),r.a.createElement(p.a,{path:"/shoppingcart/login",exact:!0,component:re}),r.a.createElement(p.a,{path:"/shoppingcart/forgotpassword",exact:!0,component:le})))))}}]),t}(r.a.Component),me=n(15),pe=n(114),de={isSignedIn:null,userId:null,isAnonymous:!1},he=n(239),fe=n(36),ge={},be=Object(me.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(b.a)({},e,{isSignedIn:!0,isAnonymous:t.payload.isAnonymous,userId:t.payload.userId});case"SIGN_OUT":return Object(b.a)({},e,{isSignedIn:!1,isAnonymous:!1,userId:null});default:return e}},form:he.a,items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_CREATE":case"ITEM_EDIT":case"ITEM_FETCH":return Object(b.a)({},e,Object(fe.a)({},t.payload.id,t.payload));case"ITEMS_FETCH":return Object(b.a)({},C.a.mapKeys(t.payload,"id"));case"ITEM_DELETE":return C.a.omit(e,t.payload);case"ITEM_SORTED":return C.a.mapKeys(t.payload,"id");default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD":return Object(b.a)({},e,Object(fe.a)({},t.payload.id,t.payload));case"CART_FETCH":return Object(b.a)({},e,{},C.a.mapKeys(t.payload,"id"));case"CART_REMOVE":return C.a.omit(e,t.payload);case"CART_CLEAN":return null;default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,Ee=Object(me.e)(be,ve(Object(me.a)(pe.a)));o.a.render(r.a.createElement(f.a,{store:Ee},r.a.createElement(ue,null)),document.querySelector("#root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.98e9d0cb.chunk.js.map