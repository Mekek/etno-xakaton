(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68592a89"],{"4da1e":function(e,t,r){"use strict";r("88e7")},"7f78":function(e,t,r){"use strict";r("abd5")},"88e7":function(e,t,r){},"89bf":function(e,t,r){},abd5:function(e,t,r){},df28:function(e,t,r){"use strict";r("89bf")},e838:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"container"},o={key:0,class:"error-code"};function a(e,t,r,a,i,l){var s=Object(n["resolveComponent"])("el-skeleton"),u=Object(n["resolveComponent"])("text_img_left");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[1==i.is_error?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,"404")):0==i.is_error&&0==i.arcticle_data.length?(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1,rows:25})):(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:2},Object(n["renderList"])(i.arcticle_data,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:e,class:"cards-container"},[Object(n["createVNode"])(u,{text:e["full_text"],img:e["img"],label:e["label"]},null,8,["text","img","label"])])})),128))])}r("d3b7"),r("e9c4");function i(e,t,r,c,o,a){var i=Object(n["resolveComponent"])("el-image"),l=Object(n["resolveComponent"])("Down_arrow"),s=Object(n["resolveComponent"])("el-card");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{"body-style":{padding:"7px"},onClick:a.click_button,class:"ti_element"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{src:r.img,fit:"cover",class:"element_image"},null,8,["src"]),Object(n["createElementVNode"])("div",{class:Object(n["normalizeClass"])(o.active_class)},Object(n["toDisplayString"])(o.text_var),3),Object(n["createVNode"])(l,{class:Object(n["normalizeClass"])(o.arrow_button)},null,8,["class"])]})),_:1},8,["onClick"])}var l={class:"countaner-img"},s=Object(n["createElementVNode"])("img",{class:"image-arrow",src:"https://img.icons8.com/ios-filled/100/000000/double-down.png"},null,-1),u=[s];function d(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,u)}r("4da1e");var b=r("6b0d"),f=r.n(b);const _={},m=f()(_,[["render",d]]);var h=m,g={data:function(){return{text_var:this.label,is_close:!0,arrow_button:"no-rotate-arrow",active_class:"element_text_header"}},props:{label:String,text:String,img:String},components:{Down_arrow:h},methods:{click_button:function(){this.is_close?(this.text_var=this.text,this.is_close=!1,this.arrow_button="rotate-arrow",this.active_class="element_text"):(this.text_var=this.label,this.is_close=!0,this.arrow_button="no-rotate-arrow",this.active_class="element_text_header")}}};r("df28");const p=f()(g,[["render",i]]);var O=p,v={data:function(){return{arcticle_data:[],is_error:!1}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/arcticle_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){"error"==e["meta"]["status"]&&(t.is_error=!0),t.arcticle_data=e["data"]})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city)},components:{text_img_left:O}};r("7f78");const j=f()(v,[["render",a]]);t["default"]=j},e9c4:function(e,t,r){var n=r("23e7"),c=r("da84"),o=r("d066"),a=r("2ba4"),i=r("e330"),l=r("d039"),s=c.Array,u=o("JSON","stringify"),d=i(/./.exec),b=i("".charAt),f=i("".charCodeAt),_=i("".replace),m=i(1..toString),h=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,O=function(e,t,r){var n=b(r,t-1),c=b(r,t+1);return d(g,e)&&!d(p,c)||d(p,e)&&!d(g,n)?"\\u"+m(f(e,0),16):e},v=l((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:v},{stringify:function(e,t,r){for(var n=0,c=arguments.length,o=s(c);n<c;n++)o[n]=arguments[n];var i=a(u,null,o);return"string"==typeof i?_(i,h,O):i}})}}]);
//# sourceMappingURL=chunk-68592a89.cba1beda.js.map