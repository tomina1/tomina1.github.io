import{c as e,o as n,a}from"./index.99d27838.js";const o={class:"markdown-body"},s=a(`<p>\u5168\u5C40\u4F7F\u7528\u6837\u5F0F \u9700\u8981\u4E0B\u8F7D \u5168\u5C40\u6CE8\u518C npm i sass-loader --save \u914D\u7F6E Vue.config.js</p><pre><code>module.exports = {
	css:{
		loaderOptions:{
			scss:{
				additionalData: \`@import &quot;~@/commonStyle.scss&quot;;\`
			}
		}
	}}
</code></pre><p>\u9A8C\u8BC1\u7801\u6D41\u8F6C\u56FE\u7247 <a href="https://blog.csdn.net/weixin_30593261/article/details/97659316">https://blog.csdn.net/weixin_30593261/article/details/97659316</a></p><p>\u56FE\u7247\u5143\u7D20\u8F6CPDF <a href="https://blog.csdn.net/karecat/article/details/107414917">https://blog.csdn.net/karecat/article/details/107414917</a> npm install --save html2canvas npm install jspdf --save</p><p>\u7535\u5B50\u7B7E\u540D <a href="https://www.jianshu.com/p/cfb9d5998cd6">https://www.jianshu.com/p/cfb9d5998cd6</a> npm install vue-esign --save</p><p>PDF\u9884\u89C8 vue-pdf\u7EC4\u4EF6 \u4E0B\u8F7D\u6587\u4EF6\u8981\u8BBE\u7F6EresponseType\u7C7B\u578B\u4E3Ablob</p><p>\u4E0B\u8F7D\u6587\u4EF6</p><pre><code class="language-js">const blob = new Blob([content],{type: \`application/\${type};charset=utf-8\`})
if (&#39;download&#39; in document.createElement(&#39;a&#39;)) { // \u975EIE\u4E0B\u8F7D
    const elink = document.createElement(&#39;a&#39;)
    elink.download = fileName			//\u8BBE\u7F6E\u6587\u4EF6\u540D
    elink.href = URL.createObjectURL(blob)		//\u521B\u5EFA\u5173\u4E8Eblob\u7684\u94FE\u63A5
    document.body.appendChild(elink)			//\u653E\u5230\u6587\u6863\u91CC\u5355\u51FB\u540E\u91CA\u653E\u4E8B\u4EF6
    elink.click()
    URL.revokeObjectURL(elink.href) // \u91CA\u653EURL \u5BF9\u8C61
    document.body.removeChild(elink)		//\u79FB\u9664
}else{
    navigator.msSaveBlob(blob, fileName)
}										//\u8BF7\u6C42\u5934\u5FC5\u987B\u8BBE\u7F6EresponseType: &#39;blob&#39;
</code></pre><p>\u9884\u89C8PDF\u6587\u4EF6 <a href="https://www.jianshu.com/p/1afb25fcabd6">https://www.jianshu.com/p/1afb25fcabd6</a></p><p>\u524D\u540E\u7AEF\u5E03\u7F6E\u5728\u540C\u4E00\u4E2A\u670D\u52A1\u91CC \u5982tomcat \u6216\u8005nginx\u4E0A\u8F6C\u53D1\u5230tomcat\u4E0A</p>`,10),c=[s],m={__name:"\u9879\u76EE\u529F\u80FD\u5C0F\u77E5\u8BC6\u70B9",setup(l,{expose:t}){return t({frontmatter:{}}),(i,d)=>(n(),e("div",o,c))}};export{m as default};
