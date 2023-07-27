import{c as n,o,b as t}from"./index.99d27838.js";const s={class:"markdown-body"},c=t("pre",null,[t("code",{class:"language-typescript"},`{
	"files": [
        // \u4E00\u4E2A\u5305\u542B\u76F8\u5BF9\u6216\u7EDD\u5BF9\u6587\u4EF6\u8DEF\u5F84\u7684\u5217\u8868
    ],
    "include": [
        "src/**/*"	// \u7F16\u8BD1\u5305\u542B\u54EA\u4E9B	**/ \u9012\u5F52\u5339\u914D\u4EFB\u610F\u5B50\u76EE\u5F55 *0\u6216\u591A\u4E2A\u5B57\u7B26 \uFF1F\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26
    ],
    "exclude": [
        "node_modules",	// \u7F16\u8BD1\u6392\u9664\u54EA\u4E9B	include\u5305\u542B\u7684\u53EF\u4EE5\u88AB\u8FD9\u4E2A\u518D\u6B21\u8FC7\u6EE4\uFF0C\u5217\u8868\u5C31\u4E0D\u884C
        "**/*.spec.ts"
    ],
    "compilerOptions": [
        "typeRoots" : ["./typings"],	// \u9ED8\u8BA4\u6240\u6709@type\u5305\u542B\uFF0C\u73B0\u5728\u53EA\u6709./typings\u4E0B\u7684
        "types" : ["node", "lodash", "express"]	// /node_modules/@type/node\u4F1A\u5305\u542B
    	// \u5C31\u662Fimport "foo" \u4F1A\u53BBnode_modules\u91CC\u9762\u627E
    	// https://www.tslang.cn/docs/handbook/compiler-options.html \u7F16\u8BD1\u9009\u9879
    ],
    "extends": "./configs/base",	// \u6E90\u6587\u4EF6\u5148\u52A0\u8F7D\uFF0C\u7136\u540E\u88AB\u7EE7\u627F\u6587\u4EF6\u91CD\u5199\uFF0C\u5FAA\u73AF\u5F15\u7528\u62A5\u9519
    "compileOnSave": true,	//\u4FDD\u5B58\u6587\u4EF6\u65F6\u91CD\u65B0\u7F16\u8BD1\uFF0C\u9700\u8981vs2015 \u548C\u5B89\u88C5atom-typescript\u63D2\u4EF6\u3002
}
`)],-1),p=[c],m={__name:"tsconfig",setup(a,{expose:e}){return e({frontmatter:{}}),(r,l)=>(o(),n("div",s,p))}};export{m as default};
