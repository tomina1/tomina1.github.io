import{c as n,o as t,a as o}from"./index.99d27838.js";const r={class:"markdown-body"},s=o(`<p>JSX\uFF1A\u5D4C\u5165\u5F0F\u7684\u7C7B\u4F3CXML\u8BED\u6CD5\u3002\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5408\u6CD5\u7684JS\u3002\u56E0React\u6846\u67B6\u800C\u6D41\u884C\u3002 TS\uFF1A\u4E5F\u652F\u6301\u5185\u5D4C\uFF0C\u7C7B\u578B\u68C0\u67E5\u4EE5\u53CA\u5C06JSX\u76F4\u63A5\u7F16\u8BD1\u4E3AJS\u3002</p><h4>\u57FA\u672C\u4F7F\u7528</h4><p>1.\u6587\u4EF6\u6269\u5C55\u4E3A.tsx\u3002</p><p>2.\u542F\u7528jsx\u9009\u9879\u3002</p><h4>\u4E09\u79CDJSX\u6A21\u5F0F\uFF1A\u901A\u8FC7\u547D\u4EE4\u884C<code>--jsx</code>\u6807\u8BB0\u6216\u8005<code>tsconfig.json</code>\u9009\u9879\u6765\u6307\u5B9A\u6A21\u5F0F</h4><p>1.preserve\uFF1A\u751F\u6210\u4EE3\u7801\u5E76\u4FDD\u7559JSX\u4EE5\u4F9B\u540E\u7EED\u4F7F\u7528</p><p>2.react\uFF1A\u751F\u6210React.createElement\uFF0C\u4F7F\u7528\u524D\u4E0D\u9700\u8981\u518D\u8F6C\u6362\uFF0C\u8F93\u51FA\u6587\u4EF6\u4E3AJS</p><p>3.react-native\uFF1A\u4FDD\u7559JSX\u90E8\u5206\uFF0C\u8F93\u51FA\u4E3AJS</p><h4>\u65AD\u8A00\u80FD\u4F7F\u7528\u5C16\u62EC\u53F7(&lt;foor&gt;bar)\uFF0C\u53EA\u80FD\u4F7F\u7528as(bar as foo)</h4><h4>\u7C7B\u578B\u68C0\u67E5\uFF0C\u56FA\u6709\u5143\u7D20\u4EE5\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934(\u2018div\u2019)\uFF0C\u503C\u5143\u7D20\u5927\u5199\u5F00\u5934(\u2018MyComponent\u2019)\u6240\u5728\u4F5C\u7528\u57DF\u67E5\u627E</h4><h4>\u7C7B\u7EC4\u4EF6\uFF1Aclass { render(){} } = func(){ return { render(){} } }\uFF0C\u8FD4\u56DE\u7C7B\u5B9E\u4F8B</h4><h4>\u5C5E\u6027\u7C7B\u578B\u68C0\u67E5</h4><pre><code class="language-jsx">// \u68C0\u67E5\u56FA\u6709\u5143\u7D20\u6709\u65E0bar\u5C5E\u6027\uFF0C\u503C\u4E3A\u5E03\u5C14\u503C
declare namespace JSX {
    interface IntrinsicElements {
        foo: { bar?: boolean }	
    }
}
// \u68C0\u67E5\u503C\u5143\u7D20\u6709\u65E0for\u5C5E\u6027\uFF0C\u503C\u4E3A\u5B57\u7B26\u4E32
declare namespace JSX {
    interface ElementAttributesProperty {
        props;// \u6307\u5B9A\u7528\u6765\u4F7F\u7528\u7684\u5C5E\u6027\u540D
    }
}
class MyComponent {
    props: {
        foo?: string
    }
}
</code></pre><h4>\u5EF6\u5C55\u64CD\u4F5C\u7B26\uFF1A{ \u3002\u3002\u3002props } = v-bind=\u201Cattr\u201D \u7ED9\u7EC4\u4EF6\u8D4B\u503C</h4><h4>\u5B50\u5B59\u7C7B\u578B\u68C0\u67E5</h4><pre><code class="language-jsx">interface PropsType {
    children: JSX.Element	// \u5B9A\u4E49\u83B7\u5F97\u5B9E\u4F8B\u8FD8\u6709\u540D\u5B57
    name: string
}

class Component extends React.Component&lt;PropsType, {}&gt; {	// \u7EE7\u627F\u65B9\u6CD5\u5E76\u4F20\u5165\u8981\u8FD4\u56DE\u7684\u5BF9\u8C61\u6CE8\u5165\u5230props\u91CC
    render() {
        return (
            &lt;h2&gt;
            {this.props.children}
            &lt;/h2&gt;
        )
    }
}
&lt;Component&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    { &quot;This is just a JS expression...&quot; + 1000 } // \u5982\u4E0D\u6307\u5B9A\u5B50\u5B59\u7C7B\u578B  \u5219\u628A\u8FD9\u91CC\u7684\u503C\u6CE8\u5165props\u91CC
&lt;/Component&gt;
</code></pre><h4>\u5D4C\u5165\u8868\u8FBE\u5F0F</h4><pre><code class="language-jsx">var a = &lt;div&gt;
    {[&#39;foo&#39;, &#39;bar&#39;].map(function (i) { return &lt;span&gt;{i / 2}&lt;/span&gt;; })}
&lt;/div&gt;
    
interface Props {
    foo: string;
}
class MyComponent extends React.Component&lt;Props, {}&gt; {
    render() {
    return &lt;span&gt;{this.props.foo}&lt;/span&gt;
    }
}
</code></pre><h4>\u5DE5\u5382\u51FD\u6570jsx\uFF1Areact\u7F16\u8BD1\u9009\u9879\u53EF\u4EE5\u914D\u7F6E\u3002\u53EF\u4EE5\u4F7F\u7528jsxFactory\u547D\u4EE4\u6216\u5185\u8054/* @jsx preact.h */\u6CE8\u91CA\u547D\u4EE4</h4><h2>vue\u4E2D\u6CE8\u610F\u4E8B\u9879</h2><p>v-model\u7528vModel_trim={} trim\u662F\u4FEE\u9970\u7B26 \u4E8B\u4EF6vOn:click v-html\u7528domPropsInnerHTML v-if\u7528if\u8BED\u53E5\u5B9E\u73B0 v-for\u7528map\u5B9E\u73B0 v-show<strong>\u53EF\u4EE5\u4F7F\u7528</strong></p><p><strong>element-ui\u6307\u4EE4</strong>\uFF1A\u9700\u8981</p><pre><code>const directives = [
    { 
      name: &#39;loading&#39;,
      value: this.fullscreenLoading,
      modifiers: { fullscreen: true, lock: true } 
    }
];
{...{directives}}\u8FD9\u6837\u53BB\u4F20\u5165
</code></pre><p><strong>\u63D2\u69FD</strong>\uFF1A\u9700\u8981\u4EE5\u4E0B\u9762\u7684\u65B9\u5F0F\u4F20\u5165</p><pre><code>{...{
	scopedSlots: {
		header: scope =&gt; { return () },
		default: scope =&gt; { return () }
	}
}}
</code></pre><p>\u529F\u80FD\u7EC4\u4EF6\uFF1A\u5F53\u5B83\u4EEC\u662F\u9ED8\u8BA4\u5BFC\u51FA\u65F6\uFF0C\u5C06\u8FD4\u56DE JSX \u7684\u7BAD\u5934\u51FD\u6570\u8F6C\u6362\u4E3A\u529F\u80FD\u7EC4\u4EF6</p><pre><code>export  default  ( { props } )  =&gt;  &lt; p &gt; hello { props . \u7559\u8A00} &lt; / p &gt;
const  HelloWorld  =  ( { props } )  =&gt;  &lt; p &gt; hello { props . \u7559\u8A00} &lt; / p &gt;
</code></pre>`,27),p=[s],h={__name:"JSX",setup(a,{expose:e}){return e({frontmatter:{}}),(l,d)=>(t(),n("div",r,p))}};export{h as default};
