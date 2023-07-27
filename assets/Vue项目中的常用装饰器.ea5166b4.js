import{c as t,o,a as n}from"./index.99d27838.js";const a={class:"markdown-body"},p=n(`<h2>Vue\u9879\u76EE\u4E2D\u7684\u5E38\u7528\u88C5\u9970\u5668\uFF1Avue-property-decorator</h2><p>1.@Component</p><pre><code class="language-javascript">@Component({
        components: {  Home, About }
})
// \u7B49\u540C\u4E8E	\u76F4\u63A5\u58F0\u660E\u7EC4\u4EF6
</code></pre><p>2.@Emit</p><pre><code class="language-javascript">this.$on(&#39;demo-log&#39;,()=&gt;{})

@Emit(&#39;e-name&#39;)
action(){}	// \u8C03\u7528action\u5E76\u89E6\u53D1$emit(&#39;e-name&#39;)

@Emit()
actionName(){}	// \u8C03\u7528actionName\u5E76\u89E6\u53D1$emit(&#39;action-name&#39;) \u76F4\u63A5\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u7684\u65B9\u6CD5\u5411\u4E0A\u629B
</code></pre><p>3.@prop</p><pre><code class="language-javascript">@Prop({type?: String, default?: &#39;default value&#39;}) title!: string;
// \u7B49\u540C\u4E8E\u76F4\u63A5\u58F0\u660E
</code></pre><p>4.@PropSync</p><pre><code class="language-javascript">props: { msg: { require: true } }, this.$emit(&quot;update:msg&quot;, false)
// \u7B49\u540C\u4E8E
@PropSync(&quot;msg&quot;, { required: true }) variable
variable = computed: { variable: { get(){}, set(){this.$emit(&quot;update:msg&quot;, false)} } }
</code></pre><p>5.@Watch</p><pre><code class="language-javascript">@Watch(&#39;propertyName&#39;, {deep?: boolean, immediate?: boolean })
// \u7B49\u540C\u4E8E watch:{ propertyName(nValue, oValue){...} }
func(){}
</code></pre><p>6.@Model</p><pre><code class="language-javascript">@Model(&#39;event&#39;, { type: Boolean }) prop !: string
// \u7B49\u540C\u4E8E model:{ prop: &quot;value\u7684\u522B\u540D&quot;, event: &quot;\u89E6\u53D1input\u4E8B\u4EF6\u7684\u522B\u540D&quot; } props: { prop:{type=Boolean} }
</code></pre><p>7.@ModelSync</p><pre><code class="language-javascript">@ModelSync(&#39;propName&#39;, &#39;propEvent&#39;, { type: Boolean }) readonly checkedValue!: boolean
checkedValue = computed: { checkedValue: { get(){}, set(){this.$emit(&quot;update:msg&quot;, false)} } }
</code></pre><p>8.@Provide / @Inject @ProvideReactive(key)/@InjectReactive(key)\u53D8\u6210\u52A8\u6001\u5B50\u53EF\u76D1\u542C\u7236\u53D8\u5316</p><pre><code class="language-javascript">@Provide( \u522B\u540D?: string )
propertyName = value
@Inject(&#39;propertyName | \u522B\u540D&#39; | { from: &#39;propertyName | \u522B\u540D&#39;, default:&quot;&quot; })
</code></pre><p>9.@Mixins</p><pre><code class="language-javascript">@Component
// \u4FEE\u9970script\u90E8\u5206

@Component({
  mixins: [outMixins]	//	\u6DF7\u5165
})
</code></pre><p>10.@Ref</p><pre><code class="language-javascript">@Ref(&#39;componetName&#39;) val === val = this.$refs.val
</code></pre><p>11.@VModel</p><pre><code class="language-javascript">@VModel({ type: String }) name!: string
// \u7B49\u540C\u4E8E \u5B9A\u4E49value\u4E3Astring\u7C7B\u578B\uFF0Cname\u83B7\u53D6value\u7684\u503C\uFF0C\u66F4\u6539\u65F6\u89E6\u53D1input\u4E8B\u4EF6
</code></pre><p>\u5199\u6CD5\u533A\u522B\uFF1A</p><p>Computed</p><pre><code class="language-javascript">test: { set(){}, get(){} } === get test() {} set test(){}
</code></pre><p>Vue-Class-Component\u63D0\u4F9B\u4E86createDecorator\u65B9\u6CD5\u6765\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u88C5\u9970\u5668 options\u2013Vue\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u7684\u66F4\u6539\u5C06\u5F71\u54CD\u6240\u63D0\u4F9B\u7684\u7EC4\u4EF6 key\u2013\u5E94\u7528\u88C5\u9970\u5668\u7684\u5C5E\u6027\u6216\u65B9\u6CD5 parameterIndex \u2014 \u53C2\u6570\u7D22\u5F15</p><pre><code class="language-js">import Component from &#39;vue-class-component&#39;
@Component
export default class Super extends Vue {}
@Component
export default class HelloWorld extends Super {}
\u7EE7\u627F\u8BED\u6CD5\u5FC5\u987B\u7236\u7C7B\u7EE7\u627Fvue\u5E76\u88AB@Component\u58F0\u660E

\u6DF7\u5165\uFF1Aexport class HelloWorld extends mixins(Hello, World)

props\u5B9A\u4E49\uFF1Alet Prop = Vue.extend({ props: { name: String }})
\u8D85\u7C7B\u7EC4\u4EF6:export default class Greeting extends Prop
\u6216 mixins \u6765\u6269\u5C55\uFF1Aexport default class Greeting extends mixis(Prop, super)

Vuex\u7684mapGetters\u548CmapActions\u6620\u5C04\uFF0C\u5199\u5728\u88C5\u9970\u5668\u91CC\uFF0C\u5728\u7C7B\u4E2D\u58F0\u660E\u7C7B\u578B
computed: mapGetters([ &#39;posts&#39; ]),	methods: mapActions([ &#39;fetchPosts&#39; ])
posts!: Post[]	fetchPosts!: () =&gt; Promise&lt;void&gt;
    
$refs\u7C7B\u578B\u6269\u5C55\uFF1A\u53EF\u4EE5\u5B9A\u4E49$refs!: {input: HTMLInputElement}\u7C7B\u578B\u6765\u7279\u6307
\u88C5\u9970\u5668\u4E2Dthis\u6307\u5411vue\u7C7B\u578B\uFF0C\u9700\u8981@Options&lt;comName&gt;\u4E0E\u7EC4\u4EF6\u5173\u8054\u8D77\u6765
</code></pre>`,28),s=[p],d={__name:"Vue\u9879\u76EE\u4E2D\u7684\u5E38\u7528\u88C5\u9970\u5668",setup(r,{expose:e}){return e({frontmatter:{}}),(l,i)=>(o(),t("div",a,s))}};export{d as default};
