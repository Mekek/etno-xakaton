(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de397260"],{"03e9":function(e,t,r){},"1cde":function(e,t,r){},"4da1e":function(e,t,r){"use strict";r("03e9")},"562a":function(e,t,r){"use strict";r("1cde")},"6f37":function(e,t,r){},"7ab8":function(e,t,r){"use strict";r("6f37")},e838:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n={class:"container"},o={key:0,class:"error-code"};function a(e,t,r,a,i,l){var s=Object(c["resolveComponent"])("el-skeleton"),u=Object(c["resolveComponent"])("text_img_left");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[1==i.is_error?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,"404")):0==i.is_error&&0==i.arcticle_data.length?(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:1,rows:25})):(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:2},Object(c["renderList"])(i.arcticle_data,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e,class:"cards-container"},[Object(c["createVNode"])(u,{text:e["full_text"],img:e["img"],label:e["label"]},null,8,["text","img","label"])])})),128))])}r("d3b7"),r("e9c4");function i(e,t,r,n,o,a){var i=Object(c["resolveComponent"])("el-image"),l=Object(c["resolveComponent"])("Down_arrow"),s=Object(c["resolveComponent"])("el-card");return Object(c["openBlock"])(),Object(c["createBlock"])(s,{"body-style":{padding:"7px"},onClick:a.click_button,class:"ti_element"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i,{src:r.img,fit:"cover",class:"element_image"},null,8,["src"]),Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(o.active_class)},Object(c["toDisplayString"])(o.text_var),3),Object(c["createVNode"])(l,{class:Object(c["normalizeClass"])(o.arrow_button)},null,8,["class"])]})),_:1},8,["onClick"])}var l={class:"countaner-img"},s=Object(c["createElementVNode"])("img",{class:"image-arrow",src:"https://img.icons8.com/ios-filled/100/000000/double-down.png"},null,-1),u=[s];function d(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",l,u)}r("4da1e");var b=r("d959"),_=r.n(b);const f={},m=_()(f,[["render",d]]);var h=m,g={data:function(){return{text_var:this.label,is_close:!0,arrow_button:"no-rotate-arrow",active_class:"element_text_header"}},props:{label:String,text:String,img:String},components:{Down_arrow:h},methods:{click_button:function(){this.is_close?(this.text_var=this.text,this.is_close=!1,this.arrow_button="rotate-arrow",this.active_class="element_text"):(this.text_var=this.label,this.is_close=!0,this.arrow_button="no-rotate-arrow",this.active_class="element_text_header")}}};r("562a");const p=_()(g,[["render",i]]);var O=p,v={data:function(){return{arcticle_data:[],is_error:!1}},methods:{get_data_for_article:function(e){var t=this;fetch("https://engine.etno-xakaton.ru/arcticle_data",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","Access-Control-Allow-Private-Network":!0},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({router:e})}).then((function(e){return e.json()})).then((function(e){"error"==e["meta"]["status"]&&(t.is_error=!0),t.arcticle_data=e["data"]})).catch((function(e){return console.error("Error:",e),null}))}},mounted:function(){this.get_data_for_article(this.$route.params.city)},components:{text_img_left:O}};r("7ab8");const j=_()(v,[["render",a]]);t["default"]=j},e9c4:function(e,t,r){var c=r("23e7"),n=r("da84"),o=r("d066"),a=r("2ba4"),i=r("e330"),l=r("d039"),s=n.Array,u=o("JSON","stringify"),d=i(/./.exec),b=i("".charAt),_=i("".charCodeAt),f=i("".replace),m=i(1..toString),h=/[\uD800-\uDFFF]/g,g=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,O=function(e,t,r){var c=b(r,t-1),n=b(r,t+1);return d(g,e)&&!d(p,n)||d(p,e)&&!d(g,c)?"\\u"+m(_(e,0),16):e},v=l((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&c({target:"JSON",stat:!0,forced:v},{stringify:function(e,t,r){for(var c=0,n=arguments.length,o=s(n);c<n;c++)o[c]=arguments[c];var i=a(u,null,o);return"string"==typeof i?f(i,h,O):i}})}}]);
//# sourceMappingURL=chunk-de397260.1b714d37.js.map