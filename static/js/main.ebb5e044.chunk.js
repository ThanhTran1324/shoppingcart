(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){e.exports=a.p+"static/media/thanh_logo.f9b63344.jpg"},127:function(e,t,a){e.exports=a(265)},258:function(e,t,a){},260:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),o=a.n(i),c=a(6),s=a(7),u=a(8),l=a(9),m=a(34),p=a(21),d=Object(p.a)(),h=a(10),f=a(15),g=a(23),b=a(13),v=a.n(b),E=a(18),y=a(61),w=a.n(y),N=(a(89),a(136),a(137),a(139),w.a.initializeApp({apiKey:"AIzaSyBHrGHhUGCs7Yl7ds_NFE8gffSJuEH0nJU",authDomain:"shoppingcart-f5bc6.firebaseapp.com",databaseURL:"https://shoppingcart-f5bc6.firebaseio.com",projectId:"shoppingcart-f5bc6",storageBucket:"shoppingcart-f5bc6.appspot.com",messagingSenderId:"1082620304721",appId:"1:1082620304721:web:dea202d8cf3595dc7c8770",measurementId:"G-HJ5G4DL8HB"})),O=a(16),S=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n().auth.userId)){t.next=8;break}return t.next=4,N.database().ref("/cart/Cart-".concat(r,"/").concat(e.id)).set(e);case 4:a({type:"CART_ADD",payload:e}),O.NotificationManager.success("You have added a new Item!","Successful!",2e3),t.next=9;break;case 8:O.NotificationManager.error("Please Login !","Warning",2e3);case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().auth.userId;case 2:if(n=e.sent,r={},null===n){e.next=9;break}return e.next=7,N.database().ref("/cart/Cart-".concat(n)).once("value").then((function(e){return e.val()}));case 7:r=e.sent,t({type:"CART_FETCH",payload:r});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},j=a(269),C=a(121),A=a.n(C),k=a(25),T=a.n(k),x=N.database().ref("items"),P=function(e,t){return function(){var a=Object(E.a)(v.a.mark((function a(n){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t?O.NotificationManager.success("Your Shopping Cart Items Will Be Added When You Create a New Account.","Anonymous Login Success",5e3):O.NotificationManager.success("Login Success","Success",2e3),a.next=3,n({type:"SIGN_IN",payload:{userId:e,isAnonymous:t}});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},L=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a().auth.isSignedIn){e.next=5;break}return n=null,e.next=4,N.auth().signInAnonymously().catch((function(e){n=e.message,O.NotificationManager.error(n,"Error",2e3)}));case 4:d.push("/shoppingcart");case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},F=function(){return function(e){A.a.auth().signOut().then((function(){O.NotificationManager.success("","Logout Successful",2e3)})).catch((function(e){console.log(e),O.NotificationManager.error(e.errorMessage,"Error",2e3)})),e({type:"SIGN_OUT"}),e({type:"CART_CLEAN"}),d.push("/shoppingcart")}},M=function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.orderByChild("id").equalTo(e).once("value").then((function(e){return e.val()}));case 2:n=t.sent,a({type:"ITEM_FETCH",payload:n[e]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){N.storage().refFromURL(e).delete().then((function(){console.log("image deleted")})).catch((function(){console.log("unable to delete image")}))}},R=function(e,t){return function(a,n){var r=[],i=n().items;switch(e){case"name":r="0"===t?k.sortBy(Object.values(i),[function(e){return e.name}]):k.sortBy(Object.values(i),[function(e){return e.name}]).reverse();break;case"price":r="0"===t?Object.values(i).sort((function(e,t){return e.price-t.price})):Object.values(i).sort((function(e,t){return e.price-t.price})).reverse();break;case"time":r="0"===t?Object.values(i).sort((function(e,t){return e.createdTime-t.createdTime})):Object.values(i).sort((function(e,t){return e.createdTime-t.createdTime})).reverse()}a({type:"ITEM_SORTED",payload:r})}},_=a(268),B=a(267),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderSelecter=function(t){t.name;var a=t.input,n=t.label,i=t.option;return r.a.createElement("div",{className:"ui four column form noPadding"},r.a.createElement("select",Object.assign({},a,{onChange:e.handleChange,className:"ui dropdown"}),r.a.createElement("option",{value:"-1",defaultValue:!0},n),i.map((function(e,t){return r.a.createElement("option",{value:t,key:t},e)}))))},e.handleChange=function(t){t.target&&e.props.itemSorted(t.target.name,t.target.value)},e.handleOnSearch=function(t){e.props.itemSearch(t.search)},e.renderSearch=function(t){var a=t.input;t.name;return r.a.createElement("div",{className:"ui  ui four column form noPadding"},r.a.createElement("form",{onSubmit:e.props.handleSubmit(e.handleOnSearch)},r.a.createElement("div",{className:"ui search"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",Object.assign({type:"text",placeholder:"Search..."},a)),r.a.createElement("i",{className:"search icon"})))))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui grid container myFilterContainer",style:{marginTop:"10px",marginBottom:"10px"}},r.a.createElement("div",{className:"four column row ",style:{backgroundColor:"rgba(208, 214, 214, 0.514)",borderRadius:"5px"}},r.a.createElement(_.a,{name:"search",component:this.renderSearch,initialValues:{search:"hello"}}),r.a.createElement(_.a,{name:"price",label:"Price",component:this.renderSelecter,option:["Low To High","High To Low"]}),r.a.createElement(_.a,{name:"time",label:"Time",component:this.renderSelecter,option:["Old To New","New To Old"]}),r.a.createElement(_.a,{name:"name",label:"Name",component:this.renderSelecter,option:["A-Z","Z-A"]})))}}]),a}(n.Component),U=Object(h.b)((function(e){return{items:e.items}}),{itemSorted:R,itemSearch:function(e){return function(t){t(void 0===e?{type:"ITEMSEARCH",payload:{isSearching:!1}}:{type:"ITEMSEARCH",payload:{searchKey:e,isSearching:!0}})}}})(V),H=Object(B.a)({form:"SortAndFilterForm"})(U),q=function(){return r.a.createElement("div",{className:"ui active active dimmer"},r.a.createElement("div",{className:"ui large text loader"},"Loading ..."))},G=function(e,t){return e.length<=t?e:e.slice(0,t)+"..."},W=(a(258),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderAdmin=function(t){if(t.userId===e.props.currentUserId)return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"ui large two buttons"},r.a.createElement(f.a,{to:"/shoppingcart/items/delete/".concat(t.id),className:"ui inverted red button "},r.a.createElement("i",{className:"icon trash alternate"}),"Delete"),r.a.createElement("div",{className:"or"}),r.a.createElement(f.a,{to:"/shoppingcart/items/edit/".concat(t.id),className:"ui inverted blue button "},r.a.createElement("i",{className:"edit icon"}),"Edit")))},e.addToCartHandler=function(t){e.props.isSignedIn?e.props.cartAdd(t):d.push("/shoppingcart/loginprompt")},e.renderList=function(t){return 0===t.length?r.a.createElement("h1",null,"Sorry, We don't have the Item you need !!!"):t.map((function(t){return r.a.createElement("div",{className:"card  ",key:t.id},r.a.createElement("div",{className:"myImageContainer",style:{backgroundColor:"white"}},r.a.createElement(f.a,{to:"/shoppingcart/item/view/".concat(t.id)},r.a.createElement("img",{className:"imageCartList  myImageCardList",src:t.images?t.images:"https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28",alt:"hinh"})),r.a.createElement("button",{className:"ui button primary myAddButton",onClick:function(){return e.addToCartHandler(t)}},r.a.createElement("i",{className:"shopping cart icon"}),"Add")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header myItemName"},r.a.createElement(f.a,{to:"/shoppingcart/item/view/".concat(t.id)},G(t.name,50))),r.a.createElement("div",{className:"meta"},r.a.createElement("p",{className:"myPrice"},"$",t.price)),r.a.createElement("div",{className:"extra content"},e.renderAdmin(t))))}))},e.myFilter=function(t){return e.props.isSearching?t.filter((function(t){return t.name.toLowerCase().includes(e.props.searchKey.toLowerCase())})):t},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.itemsFetch()}},{key:"render",value:function(){return 0===Object.keys(this.props.items).length?r.a.createElement(q,null):r.a.createElement("div",{className:"ui fluid container "},r.a.createElement(H,{initialValues:{search:this.props.searchKey}}),r.a.createElement("div",{className:"ui special cards centered"},this.renderList(this.myFilter(Object.values(this.props.items)))))}}]),a}(n.Component)),K=Object(h.b)((function(e){return{items:e.items,searchform:e.form.SortAndFilterForm,currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn,isSearching:e.filter.isSearching,searchKey:e.filter.searchKey}}),{itemsFetch:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.once("value").then((function(e){return e.val()}));case 2:a=e.sent,t({type:"ITEMS_FETCH",payload:a}),t(R("time","1"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},cartAdd:S,signInAsAnonymous:L})(W),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return this.props.isSignedIn?this.props.isAnonymous?r.a.createElement(f.a,{to:"/shoppingcart/login/",className:"ui blue google button my-google-login"},r.a.createElement("i",{className:"user secret icon"}),"Upgrade to permanent user"):void 0:r.a.createElement("button",{onClick:this.props.signInAsAnonymous,className:"ui teal google button my-google-login"},r.a.createElement("i",{className:"user secret icon",style:{fontSize:"25px",color:"red"}}),"Anonymous Login")}}]),a}(n.Component),Y=Object(h.b)((function(e){return{isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{signInAsAnonymous:L})(z),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui one column grid"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui raised segment"},r.a.createElement("p",{className:"ui red ribbon label"},this.props.banner),r.a.createElement("p",null),r.a.createElement("div",null,"Please"," ",r.a.createElement(f.a,{className:"ui teal button",to:"/shoppingcart/login"},"Login"),this.props.content,r.a.createElement(Y,null))))))}}]),a}(r.a.Component),X=Object(h.b)(null)(J),$=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={selectedFile:null,imageLink:null,uploadPercent:0,imageName:null},e.componentDidMount=function(){e.props.initialValues&&e.setState({imageLink:e.props.initialValues.images})},e.renderInput=function(e){var t=e.input,a=e.meta,n=e.label,i=e.type,o=a.error&&a.touched,c="field ".concat(o?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n," :","".concat(o?"Requited":"")),r.a.createElement("input",Object.assign({},t,{type:i,placeholder:n})))},e.renderPreImage=function(){if(e.props.initialValues)return r.a.createElement("div",null,r.a.createElement("img",{className:"ui medium centered rounded image ",src:e.props.initialValues.images,alt:"Item"}),r.a.createElement("p",null," Click Choose File to update new image :"))},e.renderImageInput=function(t){t.input,t.meta;var a=t.label,n=t.uploadPercent;return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,a," :"),e.renderPreImage(),r.a.createElement("div",null,r.a.createElement("input",{type:"file",onChange:e.fileSelectedHandler}),r.a.createElement("div",{onClick:e.fileUploadHandler,className:"ui labeled button",tabIndex:"0"},r.a.createElement("div",{id:"uploadButton",className:"ui button  "},r.a.createElement("i",{className:"upload icon "})," Upload"),r.a.createElement("p",{className:"ui basic label"},parseFloat(n).toFixed(2),"%"))))},e.convertImage=function(t){var a=new FileReader;a.readAsDataURL(t),a.name=t.name,a.size=t.size,a.onload=function(t){var a=new Image;a.src=t.target.result,a.name=t.target.name,a.size=t.target.size,a.onload=function(){var t=Object(E.a)(v.a.mark((function t(a){var n,r,i,o,c,s,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=document.createElement("canvas"),r=600/a.target.width,n.width=600,n.height=a.target.height*r,(i=n.getContext("2d")).drawImage(a.target,0,0,n.width,n.height),o=i.canvas.toDataURL(a.target,"image/jpeg",0),c=atob(o.split(",")[1]),s=[],u=0;u<c.length;u++)s.push(c.charCodeAt(u));e.setState({selectedFile:new Blob([new Uint8Array(s)],{type:"image/jpeg"})});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},e.fileSelectedHandler=function(t){t.target.files.length>0&&(e.setState({imageName:t.target.files[0].name}),e.convertImage(t.target.files[0]),O.NotificationManager.success(" ".concat(parseFloat(t.target.files[0].size/1024/1024).toFixed(2)," MB "),"Converting Your Image",2e3),document.getElementById("submitButton").disabled=!0,document.getElementById("uploadButton").classList.add("green"))},e.fileUploadHandler=function(t){var a=Math.floor(Math.random()*Math.floor(1e3));t.preventDefault();var n=e.state.imageName,r=N.storage().ref("/images/"+a+n).put(e.state.selectedFile);r.on("state_changed",(function(t){e.setState({uploadPercent:t.bytesTransferred/t.totalBytes*100})}),(function(e){console.log(e)}),(function(){r.snapshot.ref.getDownloadURL().then((function(t){e.setState({imageLink:t}),document.getElementById("submitButton").disabled=!1}))}))},e.onSubmit=function(t){var a=new Date;t.createdTime=a.getTime(),t.images=e.state.imageLink,t.price=parseFloat(t.price),e.props.onSubmit(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui  container segment"},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(_.a,{name:"name",component:this.renderInput,label:"Name"}),r.a.createElement(_.a,{name:"price",component:this.renderInput,label:"Price",type:"number"}),r.a.createElement(_.a,{name:"images",component:this.renderImageInput,label:"Images",uploadPercent:this.state.uploadPercent}),r.a.createElement("button",{id:"submitButton",className:"ui green approve right button"},"Submit")))}}]),a}(n.Component),Z=Object(B.a)({form:"ItemForm",validate:function(e){var t={};return e.name||(t.name="Requite Value!"),e.price||(t.price="Requite Value!"),t}})($),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.itemCreate(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return this.props.isSignedIn&&!this.props.isAnonymous?r.a.createElement(Z,{onSubmit:this.onSubmit}):this.props.isAnonymous?r.a.createElement(X,{banner:"Please Login",content:"You Are Shopping As Guest User!\n        Please Login To Have Better Service."}):r.a.createElement(X,{banner:"Please Login",content:"To Start Selling"})}}]),a}(n.Component),ee=Object(h.b)((function(e){return{isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{itemCreate:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,i,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,i=Object(g.a)({},e,{userId:r,id:Object(j.a)()}),N.database().ref("items/".concat(i.id)).set(i),t.next=5,N.database().ref("items/".concat(i.id)).once("value").then((function(e){return e.val()}));case 5:(o=t.sent)&&O.NotificationManager.success("","New Item Created",2e3),a({type:"ITEM_CREATE",payload:o}),d.push("/shoppingcart");case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})(Q),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).id=e.props.match.params.id,e.onSubmit=function(t){t.images!==e.props.item.images&&e.props.itemImageDelete(e.props.item.images),e.props.itemEdit(e.id,t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return this.props.item?r.a.createElement(Z,{onSubmit:this.onSubmit,initialValues:T.a.pick(this.props.item,"name","price","images")}):"loading"}}]),a}(n.Component),ae=Object(h.b)((function(e,t){return{item:e.items[t.match.params.id],items:e.items}}),{itemFetch:M,itemEdit:function(e,t){return function(){var a=Object(E.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return N.database().ref("items/".concat(e)).update(t),a.next=4,N.database().ref("items/".concat(e)).once("value").then((function(e){return e.val()}));case 4:r=a.sent,n({type:"ITEM_EDIT",payload:r}),d.push("/shoppingcart");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},itemImageDelete:D})(te),ne=function(e){return o.a.createPortal(r.a.createElement("div",{onClick:function(){return d.goBack()},className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.header),r.a.createElement("div",{className:"content"}," ",e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},re=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).actions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{to:"/shoppingcart",className:"ui button"},"Cancel"),r.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.itemDelete(e.props.match.params.id)}},"Delete"))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne,{actions:this.actions(),header:"Delete Item",content:"Do you want to delete   ".concat(this.props.item?this.props.item.name:"","?")}))}}]),a}(n.Component),ie=Object(h.b)((function(e,t){return{item:e.items[t.match.params.id]}}),{itemFetch:M,itemDelete:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.database().ref("items/".concat(e));case 2:t.sent.remove().then((function(){n().items[e].images&&D(n().items[e].images),O.NotificationManager.success("","Item Deleted",2e3),a({type:"ITEM_DELETE",payload:e})})).catch((function(e){console.log(e),O.NotificationManager.error(e.errorMessage,"Error",2e3)})),d.push("/shoppingcart");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}})(re),oe=(a(260),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).addToCartHandler=function(t){e.props.isSignedIn?(e.props.cartAdd(t),d.goBack()):d.push("/shoppingcart/loginprompt")},e.actions=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return d.goBack()},className:"ui button"},"Cancel"),r.a.createElement("button",{className:"ui button primary",onClick:function(){return e.addToCartHandler(e.props.item)}},"Add To Cart"))},e.renderItemInfo=function(e){return r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"six wide column"},r.a.createElement("img",{className:"ui large image",src:e.images,alt:e.name+"photo"})),r.a.createElement("div",{className:"ten wide column"},r.a.createElement("p",{className:"myItemViewPrice"},"$ ",e.price)," & FREE Shipping",r.a.createElement("h2",{style:{margin:0}},"Product Information"),r.a.createElement("p",{className:"myItemInfo"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil expedita dolores, debitis animi sequi ullam blanditiis. Et tenetur, temporibus beatae dolores illo accusantium excepturi recusandae rerum laborum necessitatibus deserunt.")))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.itemFetch(this.props.match.params.id)}},{key:"render",value:function(){if(this.props.item){var e=this.props.item;return r.a.createElement("div",null,r.a.createElement(ne,{actions:this.actions(),header:e.name,content:this.renderItemInfo(e)}))}return r.a.createElement(q,null)}}]),a}(n.Component)),ce=Object(h.b)((function(e,t){return{item:e.items[t.match.params.id],isSignedIn:e.auth.isSignedIn}}),{itemFetch:M,cartAdd:S})(oe),se=a(124),ue=a.n(se),le=(a(261),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=Object(E.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N.analytics(),t.next=3,N.auth().onAuthStateChanged((function(t){t&&(e.props.signIn(t.uid,t.isAnonymous),e.props.cartFetch())}));case 3:case"end":return t.stop()}}),t)}))),e.renderCartBadge=function(){var t="0";return e.props.cart&&(t=Object.values(e.props.cart).length),r.a.createElement("div",null,"Cart ",r.a.createElement("i",{className:" icon shopping cart"}),r.a.createElement("span",{className:"badge"}," ( ".concat(t,")")))},e.renderAuthButton=function(){return e.props.isSignedIn&&!e.props.isAnonymous?r.a.createElement(f.a,{to:"/shoppingcart",onClick:e.props.signOut,className:"item "},"Logout"):r.a.createElement(f.a,{to:"/shoppingcart/login/",className:"item"},"Login")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"myNavBar"},r.a.createElement("div",{className:"ui teal four item inverted menu myNavBarLink"},r.a.createElement(f.a,{to:"/shoppingcart/",className:" item"},r.a.createElement("img",{src:ue.a,alt:"thanh_logo",className:"  thanhLogo"}),"Home"),r.a.createElement(f.a,{to:"/shoppingcart/items/new",className:"item"},"Create Item"),r.a.createElement(f.a,{id:"cart",to:"/shoppingcart/cart/view",className:"item"},this.renderCartBadge()),this.renderAuthButton()))}}]),a}(r.a.Component)),me=Object(h.b)((function(e){return{cart:e.cart,isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{cartFetch:I,signIn:P,signOut:F})(le),pe=(a(262),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).renderInput=function(e){var t=e.input,a=e.meta,n=e.label,i=e.type,o=a.error&&a.touched,c="field textbox ".concat(o?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n,"".concat(o?a.error:"")),r.a.createElement("input",Object.assign({},t,{type:i,autoComplete:t.name})))},n.onSubmit=function(e){if(n.state.showVerifyPassword)if(n.props.isSignedIn&&n.props.isAnonymous){var t=N.auth.EmailAuthProvider.credential(e.email,e.password);N.auth().currentUser.linkWithCredential(t).then((function(e){O.NotificationManager.success("Anonymous account successfully upgraded ","Successful!",2e3),d.push("/shoppingcart")}),(function(e){O.NotificationManager.error(e.message,"Error!",2e3)}))}else N.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){d.push("/shoppingcart")})).catch((function(e){var t=e.code;n.setState({error:t})}));else N.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){n.setState({error:"Login Success"}),d.push("/shoppingcart")})).catch((function(e){var t=e.code;n.setState({error:t})}))},n.renderErrorFromServer=function(){switch(n.state.error){case"auth/user-not-found":case"auth/wrong-password":return r.a.createElement("div",null,"Wrong User or Password");default:return r.a.createElement("div",null,n.state.error)}},n.googleLogin=function(){var e=new w.a.auth.GoogleAuthProvider;N.auth().signInWithPopup(e).then((function(e){console.log(e),d.push("/shoppingcart")})).catch((function(e){O.NotificationManager.error(e.message,"Error!",2e3)}))},n.renderVerifyPassword=function(){if(n.state.showVerifyPassword)return r.a.createElement(_.a,{type:"password",name:"verifyPassword",label:"Verify Password",component:n.renderInput})},n.renderForgetPassword=function(){if(!n.state.showVerifyPassword)return r.a.createElement(f.a,{to:"/shoppingcart/forgotpassword",className:"my_forgot_password_text"},"Forgot Your Password")},n.SignInSignUpSwitch=function(e){n.setState({showVerifyPassword:e})},n.state={error:"",showVerifyPassword:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui  container "},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"ui equal width center aligned padded grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:" green column",onClick:function(){return e.SignInSignUpSwitch(!1)},style:{cursor:"pointer"}},"Log in"),r.a.createElement("div",{className:"blue column",onClick:function(){return e.SignInSignUpSwitch(!0)},style:{cursor:"pointer"}},"Sign Up"))),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(_.a,{name:"email",label:"Email",component:this.renderInput}),r.a.createElement(_.a,{type:"password",name:"password",label:"Password",component:this.renderInput}),this.renderForgetPassword(),this.renderVerifyPassword(),this.renderErrorFromServer(),r.a.createElement("button",{type:"submit",className:"ui approve  button  my-login-button ".concat(this.state.showVerifyPassword?"blue":"green")},this.state.showVerifyPassword?"Sign Up":"Log In"))),r.a.createElement("button",{onClick:this.googleLogin,className:"ui red google button my-google-login"},r.a.createElement("i",{className:"google icon"}),"Google Login")))}}]),a}(n.Component)),de=Object(h.b)((function(e){return{isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{signIn:P,signOut:F})(pe),he=Object(B.a)({form:"userForm",validate:function(e){var t={};return e.email?e.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)||(t.email=" Wrong Format !"):t.email=" Requite Value !",e.password||(t.password=" Requite Value !"),e.verifyPassword!==e.password&&(t.verifyPassword=" : Wrong Verify Password"),e.verifyPassword||(t.verifyPassword=" Requite Value !"),t}})(de),fe=a(125),ge=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(fe.PayPalButton,{amount:this.props.price,currency:"USD",onSuccess:function(e,t){return alert("Transaction completed by "+e.payer.name.given_name),fetch("/paypal-transaction-complete",{method:"post",body:JSON.stringify({orderId:t.orderID})})},options:{clientId:"AYI5Th6t7An5aFVx5rkUvvbo68XhT-ol3iXLVdyBbkiTzYUo9RaNZJoCcpVUKv3fGNQnGXzpF3J_Bd4a"}})}}]),a}(n.Component),be=(a(263),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).renderList=function(e){return e.map((function(e){return r.a.createElement("div",{key:e.id,className:"three column row itemContainerCart"},r.a.createElement("div",{className:"four wide column "},r.a.createElement("img",{className:"ui tiny image centered",src:e.images?e.images:"https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28",alt:e.name})),r.a.createElement("div",{className:"eight wide column "},r.a.createElement("span",{className:"myItemNameCart "},G(e.name,55))),r.a.createElement("div",{className:"four wide column"},r.a.createElement("div",{className:"myCartViewPrice "},"/$",e.price),r.a.createElement("button",{onClick:function(){return n.props.cartRemove(e.id)},className:"ui  mini  button myRemoveButton  "},"Remove")),r.a.createElement("hr",null))}))},n.countTotal=function(e){if(e){var t=0;return Object.values(e).map((function(e){return t+=parseFloat(e.price)})),t.toFixed(2)}return 0},n.renderWarningPanelForlAnonymoust=function(){if(n.props.isAnonymous)return r.a.createElement(X,{banner:"Please Login",content:"You Are Shopping As Guest User!\n          Please Login To Have Better Service."})},n.renderTotalAndPaypal=function(e){var t=n.countTotal(e);if(t>0)return r.a.createElement("div",{className:"ui container totalAmountAndPaypalContainer"},r.a.createElement("h3",null,"Subtotal (",Object.keys(e).length," item):",r.a.createElement("span",{className:"myTotalAmount"}," $",t)),r.a.createElement("div",{className:"myPaypalContainer"},r.a.createElement(ge,{description:"Paypal Buttons",price:t})))},n.state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.cartFetch()}},{key:"render",value:function(){return this.props.isSignedIn&&this.props.cart?Object.values(this.props.cart).length>0?r.a.createElement("div",{className:"ui container segment",style:{justifyContent:"center"}},this.renderWarningPanelForlAnonymoust(),r.a.createElement("div",{className:"ui grid"},this.renderList(Object.values(this.props.cart))),this.renderTotalAndPaypal(this.props.cart)):r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Your Cart is empty !")):r.a.createElement(X,{banner:"Please Login",content:"To Start Shopping"})}}]),a}(n.Component)),ve=Object(h.b)((function(e){return{cart:e.cart,isSignedIn:e.auth.isSignedIn,isAnonymous:e.auth.isAnonymous}}),{cartRemove:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=n().auth.userId)&&(N.database().ref("/cart/Cart-".concat(r,"/")).child(e).remove(),a({type:"CART_REMOVE",payload:e}));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},cartFetch:I})(be),Ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).componentWillMount=function(){},e.content=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Enter the email address for your account we'll email you a link to reset your password."),r.a.createElement("p",null),r.a.createElement("form",{className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email address: "),r.a.createElement("input",{type:"text",id:"email",autoComplete:"off",style:{width:"300px"}}),r.a.createElement("button",{onClick:e.handleSubmit,className:"ui interted teal button ",style:{marginLeft:"5px"}},"Sent Reset Password Email"),r.a.createElement("h2",{id:"output"}," "))),r.a.createElement("p",null))},e.handleSubmit=function(e){e.preventDefault();var t=N.auth(),a=document.getElementById("email").value;t.sendPasswordResetEmail(a).then((function(){console.log("email sent"),document.getElementById("output").innerHTML="Email has been sent!"})).catch((function(e){document.getElementById("output").innerHTML=e}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(X,{banner:"Forgot your password ? ",content:this.content()})}}]),a}(n.Component),ye=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).actions=function(){return r.a.createElement("div",{class:"ui equal width grid"},r.a.createElement("div",{class:"equal width row"},r.a.createElement("div",{class:"column"},r.a.createElement("button",{className:"ui teal google button my-google-login"},r.a.createElement("i",{class:"user icon",style:{fontSize:"25px",color:"green"}}),"Login")),r.a.createElement("div",{class:"column"},r.a.createElement(Y,null))))},e.content=function(){return r.a.createElement("h4",{style:{textAlign:"center"}},"Do you want to Login ?")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne,{actions:this.actions(),header:"Login Requite: ",content:this.content()}))}}]),a}(n.Component),we=Object(h.b)(null,{signInAsAnonymous:L})(ye),Ne=(a(264),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui  container fluid"},r.a.createElement(O.NotificationContainer,null),r.a.createElement(m.b,{history:d},r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/shoppingcart/",exact:!0,component:K}),r.a.createElement(m.a,{path:"/shoppingcart/items/new",exact:!0,component:ee}),r.a.createElement(m.a,{path:"/shoppingcart/items/edit/:id",exact:!0,component:ae}),r.a.createElement(m.a,{path:"/shoppingcart/items/delete/:id",exact:!0,component:ie}),r.a.createElement(m.a,{path:"/shoppingcart/item/view/:id",exact:!0,component:ce}),r.a.createElement(m.a,{path:"/shoppingcart/loginprompt",exact:!0,component:we}),r.a.createElement(m.a,{path:"/shoppingcart/cart/view",exact:!0,component:ve}),r.a.createElement(m.a,{path:"/shoppingcart/login",exact:!0,component:he}),r.a.createElement(m.a,{path:"/shoppingcart/forgotpassword",exact:!0,component:Ee})))))}}]),a}(r.a.Component)),Oe=a(14),Se=a(126),Ie=a(270),je=a(33),Ce={},Ae={isSignedIn:null,userId:null,isAnonymous:!1},ke=Object(Oe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(g.a)({},e,{isSignedIn:!0,isAnonymous:t.payload.isAnonymous,userId:t.payload.userId});case"SIGN_OUT":return Object(g.a)({},e,{isSignedIn:!1,isAnonymous:!1,userId:null});default:return e}},form:Ie.a,items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_CREATE":case"ITEM_EDIT":case"ITEM_FETCH":return Object(g.a)({},e,Object(je.a)({},t.payload.id,t.payload));case"ITEMS_FETCH":return Object(g.a)({},T.a.mapKeys(t.payload,"id"));case"ITEM_DELETE":return T.a.omit(e,t.payload);case"ITEM_SORTED":return T.a.mapKeys(t.payload,"id");default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD":return Object(g.a)({},e,Object(je.a)({},t.payload.id,t.payload));case"CART_FETCH":return Object(g.a)({},e,{},T.a.mapKeys(t.payload,"id"));case"CART_REMOVE":return T.a.omit(e,t.payload);case"CART_CLEAN":return null;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isSearching:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMSEARCH":return{isSearching:t.payload.isSearching,searchKey:t.payload.searchKey};default:return e}}}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,xe=Object(Oe.e)(ke,Te(Object(Oe.a)(Se.a)));o.a.render(r.a.createElement(h.a,{store:xe},r.a.createElement(Ne,null)),document.querySelector("#root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.ebb5e044.chunk.js.map