import{c as e,o,a as n}from"./index.99d27838.js";const a={class:"markdown-body"},i=n(`<p>component</p><ul><li><p>BrowserRouter\uFF1A\u8DEF\u7531\u6A21\u3002basename(\u57FA\u672CURL)\uFF0CforceRefresh(\u5F3A\u5236\u5237\u65B0)\uFF0CgetUserConfirmation(\u786E\u8BA4\u5BFC\u822A\u51FD\u6570)\uFF0CkeyLength(Location.key \u7684\u957F\u5EA6)</p></li><li><p>HashRouter\uFF1A\u4E0D\u652F\u6301Location.key\u548Cstate\u3002basename\uFF0CgetUserConfirmation</p></li><li><p>MemoryRouter\uFF1A\u6D4B\u8BD5\u73AF\u5883\u548C\u975E\u6D4F\u89C8\u5668\u73AF\u5883 (React-Native) \u5F88\u6709\u7528</p><pre><code class="language-js">initialEntries: array&lt; string | { pathname?: str, search?: str, hash?: str, state?: obj }&gt;	// \u521D\u59CB\u5316\u8BB0\u5F55\u6808
initialIndex: number																  // \u521D\u59CB\u5316\u5F53\u524D\u6808\u4E0B\u6807
getUserConfirmation\uFF0CkeyLength
</code></pre></li><li><p>Route\uFF1A\u8DEF\u5F84\u5BF9\u5E94\u7EC4\u4EF6</p><pre><code class="language-js">// \u4E09\u79CD\u6E32\u67D3\u65B9\u6CD5
component\uFF1A\u5982\u679C\u5185\u8054\u51FD\u6570\uFF0C\u5219\u6BCF\u6B21\u521B\u9020\u65B0\u7684\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u66F4\u65B0\u7EC4\u4EF6\u3002\u8BF7\u4F7F\u7528\u53E6\u5916\u65B9\u6CD5
render\uFF1A\u6E32\u67D3\u8FD4\u56DE\u5185\u5BB9\uFF0C\u65E0\u8BBA\u662F\u5426\u5339\u914D\u90FD\u4F1A\u8C03\u7528
children\uFF1A\u5339\u914D\u5185\u5BB9\u65F6\uFF0C\u6E32\u67D3\u5176\u5185\u5BB9\uFF0C
3 &gt; 1 &gt; 2\uFF1A&lt;Animate&gt; \u52A8\u753B\u7EC4\u4EF6\u59CB\u7EC8\u6E32\u67D3\uFF0C\u53EF\u4EE5\u4E3A\u5176\u6DFB\u52A0\u8FDB\u51FA\u52A8\u753B
&lt;Route exact:boolean strict: boolean path: string | string[]  sensitive: boolean &gt;
</code></pre></li><li><p>Switch\uFF1A\u663E\u793A\u9996\u4E2A\u5339\u914D\u8DEF\u7531\u5185\u5BB9\u3002location\uFF1A\u8981\u5339\u914D\u7684\u5B50\u5143\u7D20\uFF0C\u9ED8\u8BA4\u5F53\u524D\u6D4F\u89C8\u5668URL\u3002</p></li><li><p>generatePath\uFF1A\u751F\u6210\u8DEF\u5F84\u3002in react-router\u3002generatePath(\u201C/user/:id/:entity(post|comments)\u201D, { id\uFF1A1, entity\uFF1A\u201Cposts\u201D })</p></li><li><p>Link\uFF1A\u8DEF\u7531\u8DF3\u8F6C</p><pre><code class="language-react">&lt;Link to=&quot;path?query=value&quot;&gt;&lt;/Link&gt;							// \u70B9\u51FB\u8DF3\u8F6C
&lt;Link to={{ pathname:&quot;&quot;, search: &quot;?sort=name&quot;, hash: &quot;#the-hash&quot;, state: { k: v } }}&gt;&lt;/Link&gt;  // \u901A\u8FC7\u5BF9\u8C61\u914D\u7F6E\u8DF3\u8F6C
&lt;Link to={ location =&gt; path: string }&gt;&lt;/Link&gt;				// \u70B9\u51FB\u8FD4\u56DE\u8DEF\u5F84\u5B57\u7B26\u4E32
&lt;Link to=&quot;path?query=value&quot; replace&gt;&lt;/Link&gt;					// \u66FF\u6362
&lt;Link to=&quot;path?query=value&quot; innerRef&gt;&lt;/Link&gt;				// 5.1\u540E\u8DDFref\u4E00\u6837
&lt;Link to=&quot;path?query=value&quot; component={ CusLink }&gt;&lt;/Link&gt;	 // \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5BFC\u822A\u7EC4\u4EF6
</code></pre></li><li><p>NavLink\uFF1A\u5BFC\u822A\u94FE\u63A5\uFF0C\u8DEF\u5F84\u5339\u914D\u65F6\u6DFB\u52A0\u6837\u5F0F\u3002activeStyle\uFF0C activeClassName\uFF0Cexact\u7CBE\u786E\u5339\u914D\uFF0Cstrict\u5339\u914D\u65F6\u5C3E\u90E8\u659C\u6760\u4E5F\u8981\u8003\u8651\uFF0CisActive\uFF1Afunc(match, location) =&gt; bool \u662F\u5426\u6FC0\u6D3B</p></li><li><p>Prompt\uFF1A\u79BB\u5F00\u9875\u9762\u7684\u63D0\u793A\uFF0Cwhen: boolean \u5F00\u542F\uFF0C message\uFF1ALocation =&gt; string \u63D0\u793A\u5185\u5BB9</p></li><li><p>Redirects\uFF1A\u91CD\u5B9A\u5411\u8DEF\u7531</p><pre><code class="language-js">to: string | { pathname:&quot;&quot;, search: &quot;?sort=name&quot;, state: { k: v } }		// \u91CD\u5B9A\u5411\u8DEF\u5F84
push: boolean														// \u65B0\u589E\u8BB0\u5F55\u800C\u975E\u66FF\u6362
from: string	from=&quot;/users/:id&quot; to=&quot;/users/profile/:id&quot;				// \u8981\u91CD\u5B9A\u5411\u7684\u8DEF\u5F84
exact /sensitive / strict: boolean									// \u7CBE\u786E\u5339\u914D	/ \u533A\u5206\u5927\u5C0F\u5199 / \u4E25\u683C\u8DEF\u5F84
</code></pre></li><li><p>useHistory\uFF1A\u83B7\u53D6router\u5B9E\u4F8B\uFF0C\u5386\u53F2\u8BB0\u5F55\uFF0C\u66FF\u6362\u8DEF\u5F84</p><pre><code>length					// \u6808\u4E2D\u6761\u76EE\u6570
action					// \u5F53\u524D\u52A8\u4F5C
location				// \u83B7\u53D6\u5F53\u524D\u8DEF\u7531\u53C2\u6570{ pathname\u8DEF\u5F84, search\u67E5\u8BE2\u53C2\u6570, hash\u54C8\u5E0C\u53C2\u6570, state }
push(path, [state])		// \u5F80\u6808\u4E2D\u6DFB\u52A0\u65B0\u8BB0\u5F55
replace(path, [state]) 	// \u66FF\u6362\u6808\u4E2D\u5F53\u524D\u8BB0\u5F55\u7684\u5185\u5BB9\u548C\u72B6\u6001
go(n), goBack = go(-1), goForward = go(1)
block
</code></pre></li><li><p>useLocation\uFF1A\u83B7\u53D6route\u5B9E\u4F8B\uFF0C\u5F53\u524D\u8DEF\u5F84\u548C\u53C2\u6570</p><pre><code>Route component as this.props.location
Route render as ({ location }) =&gt; ()
Route children as ({ location }) =&gt; ()
withRouter as ({ location }) =&gt; ()
</code></pre></li><li><p>match\uFF1A\u5339\u914D\u5230\u7684\u8DEF\u5F84\u53C2\u6570</p><pre><code>params: \u52A8\u6001\u53C2\u6570\u5BF9\u5E94\u7684\u952E\u503C\u5BF9\u5BF9\u8C61
isExact: boolean \u662F\u5426\u5B8C\u5168\u5339\u914D
path: string \u7528\u4E8E\u5339\u914D\u7684\u8DEF\u5F84\u6A21\u5F0F\uFF0C\u7528\u4E8E\u6784\u5EFA Route
url: string URL\u5339\u914D\u7684\u90E8\u5206\uFF0C\u7528\u4E8E\u6784\u5EFA\u5D4C\u5957&lt;Link&gt;
Route component as this.props.match
Route render as ({ match }) =&gt; ()
Route children as ({ match }) =&gt; ()
withRouter as ({ match }) =&gt; ()
matchPath() as the return value
useRouteMatch() as the return value 
</code></pre></li><li><p>useParams\uFF1A\u83B7\u53D6\u53C2\u6570 kv \u952E\u503C\u5BF9\u8C61\uFF0C\u8DEF\u7531\u53C2\u6570\u5BF9\u8C61</p></li><li><p>useRouteMatch\uFF1A\u76F4\u63A5\u8C03\u7528\u83B7\u53D6{ path: \u540E\u7EED\u8DEF\u5F84\uFF0Curl\uFF1ARoute\u5BF9\u5E94\u7684\u8DEF\u5F84 }\uFF0C\u4F20\u5165\u914D\u7F6E\u9879\u5224\u65AD\u662F\u5426\u4E0E\u5F53\u524D\u8DEF\u5F84\u5339\u914D</p></li><li></li><li><p>*\uFF1A\u8DEF\u7531\u901A\u914D\u7B26\uFF0C\u5904\u7406404 error</p></li><li><p>\u7F16\u5199\u8DEF\u7531\uFF0C\u5FAA\u73AF\u751F\u6210Route\uFF0C\u5229\u7528route.component \u8BBE\u7F6E\u5668componet\u5C5E\u6027\u6765\u9009\u62E9\u5BF9\u5E94\u7EC4\u4EF6</p></li><li><p>\u5168\u5C4F\u548C\u7A97\u53E3\u5F39\u6846\u7EC4\u4EF6\uFF0C\u5168\u5C4F\u662F\u76F4\u63A5\u5728 switch \u8DEF\u7531\u5217\u8868\u91CC\u663E\u793A\u5BF9\u5E94\u5168\u5C4F\u5F39\u6846\uFF0C\u7A97\u53E3\u5F39\u6846\u662F\u628A\u5F53\u524D\u8DEF\u7531\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u9012\u7ED9Switch\u7684location\u5C5E\u6027\uFF0C\u6765\u4FDD\u6301\u5185\u5BB9\uFF0C\u7136\u540E\u5728\u5916\u56F4\u6DFB\u52A0\u65B0\u8DEF\u7531(isWin &amp;&amp; Route)\uFF0C\u4F7F\u5176\u663E\u793A\uFF0C\u6765\u8FBE\u5230\u7A97\u53E3\u5F39\u7A97\u7684\u6548\u679C\u3002</p></li><li><p>\u9759\u6001\u8DEF\u7531\uFF08\u6CA1\u6709path\uFF09\uFF0C\u8DEF\u7531\u6784\u9020\u7684\u65F6\u5019\u53EF\u4EE5\u62FF\u5230\u7EC4\u4EF6\u5BF9\u5E94\u7684props\uFF0C\u7136\u540E\u8D4B\u503C\u5176\u65B0\u503C\u3002</p></li><li><p>\u67E5\u8BE2\u53C2\u6570\uFF1A\u4E0D\u9700\u8981\u652F\u6301IE11\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528 URLSearchParams(useLocation().search) \u8F6C\u6362 k=v \u7684\u666E\u901A\u67E5\u53C2\uFF0C\u5176\u4ED6\u5C31\u9700\u8981\u4F60\u81EA\u5E26\u7684\u67E5\u8BE2\u53C2\u6570\u89E3\u6790\u3002</p></li></ul>`,2),r=[i],h={__name:"React-Router",setup(s,{expose:t}){return t({frontmatter:{}}),(p,c)=>(o(),e("div",a,r))}};export{h as default};
