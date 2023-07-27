import{c as t,o,b as n}from"./index.99d27838.js";const s={class:"markdown-body"},r=n("h2",null,"\u88C5\u9970\u5668\uFF1A@ + \u51FD\u6570\u540D",-1),a=n("pre",null,[n("code",{class:"language-javascript"},`\u5C5E\u6027\u8868\u8FF0\u7B26\uFF1A
	\u6570\u636E\u5C5E\u6027
let data_property = {
    configurable: T/F // \u80FD\u5426delete\u5220\u9664\u5C5E\u6027\uFF0C\u4FEE\u6539\u5176\u4ED6\u63CF\u8FF0\u7B26\uFF0C\u80FD\u5426\u5C06\u6570\u636E\u5C5E\u6027\u4FEE\u6539\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027
    enumerable\uFF1A T/F // \u80FD\u5426\u80FD\u88AB\u679A\u4E3E\uFF0C\u88ABfor in\u6216\u8005Object.keys\u7B49\u65B9\u5F0F\u83B7\u53D6\u5C5E\u6027	\u5BF9\u8C61\u9ED8\u8BA4T,class\u9ED8\u8BA4F
    writable: T/F // \u80FD\u5426\u4FEE\u6539\u6570\u636E\u503C\uFF0C\u53EF\u5B9E\u73B0\u53EA\u8BFB
    value\uFF1A T/F // \u5F53\u524D\u5C5E\u6027\u7684\u503C
}
	\u8BBF\u95EE\u5C5E\u6027
let access_property = {		// Object.defineProperty\u5B9A\u4E49\u8FD9\u4E24\u4E2A\u503C
    getter: \u8BFB\u53D6\u5C5E\u6027\u65F6\u8C03\u7528
    setter: \u8BBE\u7F6E\u5C5E\u6027\u65F6\u8C03\u7528
}
`)],-1),c=n("p",null,"\u88C5\u9970\u5668\u53C2\u6570\u533A\u522B",-1),l=n("pre",null,[n("code",{class:"language-javascript"},`//	\u4F7F\u7528\u5728\u65B9\u6CD5\u4E0A\uFF0C\u4E09\u4E2A\u53C2\u6570(target(\u7C7B\u5C5E\u6027\u51FD\u6570,\u5BF9\u4E8E\u7C7B\u540D), name(\u5BF9\u5E94\u51FD\u6570\u540D\u79F0), descriptor(\u5C5E\u6027\u63CF\u8FF0\u7B26))
/**
*@param wait \u5EF6\u8FDF\u65F6\u957F
*/
function debounce(wait) {
  return function(target, name, descriptor) {
    descriptor.value = debounce(descriptor.value, wait)	// \u5305\u88C5\u4E86\u51FD\u6570\uFF0C\u5E76\u66FF\u6362\u539F\u6765\u7684\u51FD\u6570
  }
}
// \u4F7F\u7528\u65B9\u5F0F
class MyClass {
  @debounce(100)
  follow() {
    console.log('\u6211\u662F\u5B50\u541B\uFF0C\u6211\u7684\u516C\u4F17\u53F7\u662F \u3010\u524D\u7AEF\u6709\u7684\u73A9\u3011\uFF0C\u5173\u6CE8\u6709\u60CA\u559C\u54E6')
  }
}

//	\u4F7F\u7528\u5728\u7C7B\u4E0A\uFF0C\u53C2\u6570(target\u5BF9\u4E8E\u7C7B\u672C\u8EAB)
function mixins(obj) {
  return function (target) {
    Object.assign(target.prototype, obj)
  }
}
// \u7136\u540E\u901A\u8FC7\u88C5\u9970\u5668\u6DF7\u5165
@mixins(methods)
class Login{
  login() {}
  logout() {}
}
`)],-1),i=n("p",null,"vue\u8001\u9879\u76EE\u7684\u57FA\u7840\u73AF\u5883\u914D\u7F6E(eslint)\uFF1A\u9ED8\u8BA4\u652F\u6301",-1),u=n("pre",null,[n("code",{class:"language-javascript"},`parserOptions: {
    ecmaFeatures:{
      // \u652F\u6301\u88C5\u9970\u5668
      legacyDecorators: true
    }
}
`)],-1),d=n("p",null,"vue\u88C5\u9970\u5668\uFF1Avue-property-decorator",-1),p=n("p",null,"target\u5BF9\u5E94\u7684\u4E0D\u540C\u5BF9\u8C61\uFF1A 1.methods\u91CC\u9762\u65B9\u6CD5\u4E0A\u4F7F\u7528\u88C5\u9970\u5668\u5BF9\u5E94methods\u3002 2.\u751F\u547D\u5468\u671F\u4F7F\u7528\u5BF9\u5E94\u6574\u4E2A\u7EC4\u4EF6\u5BF9\u8C61",-1),_=[r,a,c,l,i,u,d,p],v={__name:"\u88C5\u9970\u5668(Decorator)",setup(g,{expose:e}){return e({frontmatter:{}}),(h,b)=>(o(),t("div",s,_))}};export{v as default};
